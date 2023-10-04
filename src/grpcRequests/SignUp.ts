import { SignUpServiceClient } from '../grpcClients/grpc-client-factory';
import { signUpReq } from '../grpcClients/grpc-client-factory';

export function register(userName, email, password, phoneNumber) {
	signUpReq.email = email;
	signUpReq.password = password;
	signUpReq.userName = userName;
	signUpReq.phoneNumber = phoneNumber;

	return new Promise((resolve, reject) => {
		SignUpServiceClient.register(signUpReq)
			.then((res) => {
				resolve(res);
			})
			.catch((err) => {
				reject(err);
			});
	});
}
