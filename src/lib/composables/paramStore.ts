import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get, writable } from 'svelte/store';

interface ParamStoreOptions {
	debounce?: number;
}

const defaultOptions: ParamStoreOptions = {};

export const useParamStore = <T>(name: string, fallback: T, options: ParamStoreOptions) => {
	const urlValue = get(page).url.searchParams.get(name);
	const initValue = urlValue ? (urlValue as unknown as T) : fallback;

	options = { ...defaultOptions, ...options };

	const { subscribe, set, update } = writable<T>(initValue);

	let timeoutId: number | null = null;
	subscribe(async (value) => {
		if (options.debounce) {
			await waitForDelay(options.debounce);
		}
		updateParams(value);
	});

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

	function updateParams(value: T) {
		const params = get(page).url.searchParams;
		if (value) {
			params.set(name, `${value}`);
		} else {
			params.delete(name);
		}
		navigate(`?${params.toString()}`);
	}

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
