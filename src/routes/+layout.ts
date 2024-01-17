export const load = async ({ fetch }) => {
	async function fetchTools() {
		try {
			const res = await fetch(`/api/v1/tools`);
			const data = (await res.json()) as string[];
			return data;
		} catch (err) {
			console.error(err);
		}
	}

	return {
		tools: await fetchTools()
	};
};
