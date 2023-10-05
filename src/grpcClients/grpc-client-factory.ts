import { UserServiceClient } from '../generated/signup.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { UserRequest } from '../generated/signup';

import { LoginServiceClient } from '../generated/userlogin.client';
import { LoginRequest } from '../generated/userlogin';

const config = new GrpcWebFetchTransport({
	baseUrl: 'http://192.168.28.35:8082'
});

const SignUpServiceClient = new UserServiceClient(config);
const signUpReq = UserRequest.create();

const SignInServiceClient = new LoginServiceClient(config);
const signInReq = LoginRequest.create();

//message
import { MessageServiceClient } from '../generated/message-service.client';
import { MessageRequest } from '../generated/message-service';

const messageServiceClient = new MessageServiceClient(config);
const messageReq = MessageRequest.create();

export {
	SignUpServiceClient,
	signUpReq,
	SignInServiceClient,
	signInReq,
	messageServiceClient,
	messageReq
};
