import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const username = data.get('username');
		const email = data.get('email');
		const password = data.get('password');
		const confirmPassword = data.get('confirmPassword');
		console.log({ name, username, email, password, confirmPassword });

		// form validation
		if (password != confirmPassword) {
			return fail(400, {
				success: false,
				error: 'Password do not match',
				name,
				username,
				email
			});
		}
	}
};
