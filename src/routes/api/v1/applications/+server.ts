import { json } from '@sveltejs/kit';
import data from './data.json';

export function GET({ url }) {
	if (!url) {
		return json(data);
	}

	let filteredData = data;

	// Filter by title
	let title = url.searchParams.get('title')?.toLowerCase();
	if (title) {
		filteredData = filteredData.filter((item) => item.title.toLowerCase().includes(title));
	}

	// Filter by company
	let company = url.searchParams.get('company')?.toLowerCase();
	if (company) {
		filteredData = filteredData.filter((item) => item.company.toLowerCase().includes(company));
	}

	// Filter by tools
	let tools = url.searchParams.getAll('tools');
	if (tools.length > 0) {
		tools = tools.map((tool) => tool.toLowerCase());
		filteredData = filteredData.filter((item) => {
			const itemTools = item.tools.map((tool) => tool.toLowerCase());
			return itemTools.some((tool) => tools.includes(tool));
		});
	}

	return json(filteredData);
}
