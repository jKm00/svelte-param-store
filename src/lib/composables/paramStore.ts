import { browser } from '$app/environment';
import { afterNavigate, goto } from '$app/navigation';
import { page } from '$app/stores';
import { onMount } from 'svelte';
import { get, writable } from 'svelte/store';

interface ParamStoreOptions {
	debounce?: number;
	multiple: boolean;
}

const defaultOptions: ParamStoreOptions = {
	multiple: false
};

export const useParamStore = (name: string, options: ParamStoreOptions) => {
	// Merge the options with the default options
	options = { ...defaultOptions, ...options };

	// Get the initial value from the URL
	let urlValue: string | string[];
	if (options.multiple) {
		urlValue = get(page).url.searchParams.getAll(name);
	} else {
		urlValue = get(page).url.searchParams.get(name) ?? '';
	}

	// Create store
	const { subscribe, set, update } = writable<string | string[]>(urlValue);

	// Identifier of the timeout used for debouncing
	let timeoutId: number | null = null;

	onMount(() => {
		let first = true;
		// Subscribe to the store
		const unsubscribe = subscribe(async (value) => {
			// Make sure we don't update URL on page mount
			if (first) {
				first = false;
				return;
			}

			if (options.debounce) {
				await waitForDelay(options.debounce);
			}

			const params = updateParams(value);
			navigate(`?${params.toString()}`);
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
	 * Updates the URL search params
	 * @param value
	 */
	function updateParams(value: string | string[]) {
		const params = get(page).url.searchParams;

		switch (typeof value) {
			case 'string':
				if (value) {
					params.set(name, value);
				} else {
					params.delete(name);
				}
				break;
			case 'object':
				params.delete(name);
				value.forEach((v) => params.append(name, v));
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
			goto(url, { keepFocus: true, invalidateAll: true });
		}
	}

	return {
		subscribe,
		update,
		set
	};
};
