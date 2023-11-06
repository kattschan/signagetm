import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
	if (!locals.user) {
		throw redirect(
			307,
			'https://docs.google.com/presentation/d/e/2PACX-1vQHOf-3fp5Dod1vQKqg62JXXrm1Z01hhs8C71oJAh0Pf6I4zlco2_dK29dm3aywLoGJ3YfA61JgCYSZ/embed?start=true&loop=true&delayms=10000'
		);
	}
}
