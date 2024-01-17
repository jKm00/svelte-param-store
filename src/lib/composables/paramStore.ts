import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get, writable } from 'svelte/store';

interface ParamStoreOptions {
	debounce?: number;
}

const defaultOptions: ParamStoreOptions = {};

export const useParamStore = (
	name: string,
	fallback: string | string[],
	options: ParamStoreOptions
) => {
	// Get the initial value from the URL
	const urlValue = get(page).url.searchParams.getAll(name);
	const initValue = urlValue ? urlValue : fallback;

	// Merge the options with the default options
	options = { ...defaultOptions, ...options };

	// Create store
	const { subscribe, set, update } = writable<string | string[]>(initValue);

	// Subscribe to the store
	let timeoutId: number | null = null;
	subscribe(async (value) => {
		if (options.debounce) {
			await waitForDelay(options.debounce);
		}

		const params = updateParams(value);
		navigate(`?${params.toString()}`);
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
			goto(url, { keepFocus: true });
		}
	}

	return {
		subscribe,
		update,
		set
	};
};
