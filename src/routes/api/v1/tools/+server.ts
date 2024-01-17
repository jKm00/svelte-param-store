import { json } from '@sveltejs/kit';
import data from '../data.json';

export function GET() {
	return json([...new Set(data.map((d) => d.tools).flat())]);
}
