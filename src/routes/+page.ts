import type { Application } from '$lib/types.js';

export const load = async ({ url, fetch }) => {
	async function fetchApplications() {
		try {
			const res = await fetch(`/api/v1/applications${url.search}`);
			const data = (await res.json()) as Application[];

			return data;
		} catch (err) {
			console.error(err);
		}
	}

	return {
		applications: await fetchApplications()
	};
};
