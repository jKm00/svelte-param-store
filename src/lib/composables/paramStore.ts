import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { onMount } from 'svelte';
import { get, writable } from 'svelte/store';

interface ParamStoreOptions {
	debounce?: number;
	multiple?: boolean;
}

const defaultOptions: ParamStoreOptions = {
	debounce: undefined,
	multiple: false
};

export const useParamStore = (key: string, options?: ParamStoreOptions) => {
	// Merge the options with the default options
	options = { ...defaultOptions, ...options };

	// Get the initial value from the URL
	let urlValue: string | string[];
	if (options.multiple) {
		urlValue = get(page).url.searchParams.getAll(key);
	} else {
		urlValue = get(page).url.searchParams.get(key) ?? '';
	}

	// Create store
	const { subscribe, set, update } = writable<string | string[]>(urlValue);

	// Identifier of the timeout used for debouncing
	let timeoutId: number | null = null;

	// Flag to indicate if debounce should be omitted
	let omitDebounce = false;

	onMount(() => {
		let first = true;
		// Subscribe to the store
		const unsubscribe = subscribe(async (value) => {
			// Make sure we don't update URL on page mount
			if (first) {
				first = false;
				return;
			}

			if (!omitDebounce && options.debounce !== undefined) {
				await waitForDelay(options.debounce);
			}

			if (omitDebounce) {
				omitDebounce = false;
			}

			const currentUrl = get(page).url;

			const params = updateParams(currentUrl, key, value);
			navigate(`?${params.toString()}${currentUrl.hash}`);
		});

		// Unsubscribe on demount
		return () => unsubscribe();
	});

	/**
	 * A functions that returns a promise that resolves after a delay
	 * @param delay the delay in milliseconds
	 * @returns a promise that resolves after the delay
	 */
	async function waitForDelay(delay: number) {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		return new Promise((resolve) => {
			timeoutId = setTimeout(() => {
				resolve(null);
			}, delay) as unknown as number;
		});
	}

	/**
	 * Updates the URL with for the given key with the given value
	 * @param currentUrl the current URL
	 * @param key the key to update the value of
	 * @param value the value to set
	 * @returns a URL with updated URLSearchParams
	 */
	function updateParams(currentUrl: URL, key: string, value: string | string[]) {
		const params = currentUrl.searchParams;

		switch (typeof value) {
			case 'string':
				if (value) {
					params.set(key, value);
				} else {
					params.delete(key);
				}
				break;
			case 'object':
				params.delete(key);
				value.forEach((v) => params.append(key, v));
				break;
		}

		return params;
	}

	/**
	 * Navigate to the given URL
	 * @param url to navigate to
	 */
	function navigate(url: string) {
		if (browser) {
			goto(url, { keepFocus: true, invalidateAll: true, noScroll: true });
		}
	}

	/**
	 * Sets the value of the store without debouncing
	 * @param value the value to set
	 */
	function setImmediate(value: string | string[]) {
		omitDebounce = true;
		set(value);
	}

	return {
		subscribe,
		update,
		set,
		setImmediate
	};
};
