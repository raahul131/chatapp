import { SignInServiceClient, signInReq } from '../grpcClients/grpc-client-factory';

export function login(userName, password) {
	signInReq.userName = userName;
	signInReq.password = password;

	return new Promise((resolve, reject) => {
		const call = SignInServiceClient.login(signInReq);
		call.response
			.then((res) => {
				console.log('res ', res);
				resolve(res);
			})
			.catch((err) => {
				console.log('err', err);
			});
	});
}
