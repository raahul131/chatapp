import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const email = data.get('email');
		const phoneNumber = data.get('phoneNumber');
		const password = data.get('password');
		const confirmPassword = data.get('confirmPassword');
		console.log({ username, email, phoneNumber, password, confirmPassword });

		// form validation
		if (password != confirmPassword) {
			return fail(400, {
				success: false,
				error: 'Password do not match',
				username,
				email,
				phoneNumber
			});
		}
	}
};
