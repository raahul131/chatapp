import { messageServiceClient, messageReq } from '../grpcClients/grpc-client-factory';

export function Message(message, userName, token) {
	// console.log(message, userName, token);
	messageReq.message = message;
	messageReq.userName = userName;

	return new Promise((resolve, reject) => {
		// console.log(`Bearer ${token}`);
		messageServiceClient
			.message(messageReq, {
				meta: {
					Authorization: `Bearer ${token}`
				}
			})
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
}
