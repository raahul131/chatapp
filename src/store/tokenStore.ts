import { writable } from 'svelte/store';

// Initialize the store with an initial value (null for accessToken)
export const userDetails = writable({
	userName: '',
	accessToken: ''
});

// Define a function to update the accessToken value
// export function setDetails(username, token) {
// 	userDetails.update({
// 		userName: username,
// 		accessToken: token
// 	});
// }
