import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { page } from '$app/stores';
import { get, writable } from 'svelte/store';

export const useParamStore = <T>(name: string, fallback: T) => {
	const urlValue = get(page).url.searchParams.get(name);
	const initValue = urlValue ? (urlValue as unknown as T) : fallback;

	const { subscribe, set, update } = writable<T>(initValue);

	subscribe((value) => {
		const params = get(page).url.searchParams;
		if (value) {
			params.set(name, `${value}`);
		} else {
			params.delete(name);
		}
		navigate(`?${params.toString()}`);
	});

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
