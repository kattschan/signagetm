import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ locals }) {
	if (!locals.user) {
		throw redirect(
			307,
			'https://docs.google.com/presentation/d/e/2PACX-1vSpq6VJ96ky5ShT_HYfhXu5tuPSINIej3zWGjEmwYIfieyB9ilPVoRGVTBsXzmM8q1sdK6SW4MBta4m/pub?start=true&loop=true&delayms=30000'
		);
	}
}
