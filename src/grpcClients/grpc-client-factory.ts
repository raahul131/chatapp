import { UserServiceClient } from '../generated/signup.client';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { UserRequest } from '../generated/signup';

//signIn
import { LoginServiceClient } from '../generated/signin.client';
import { LoginRequest, LoginResponse } from '../generated/signin';

const config = new GrpcWebFetchTransport({
	baseUrl: 'http://192.168.28.35:8082'
});

const SignUpServiceClient = new UserServiceClient(config);
const signUpReq = UserRequest.create();

const SignInServiceClient = new LoginServiceClient(config);
const signInReq = LoginRequest.create();

export { SignUpServiceClient, signUpReq, SignInServiceClient, signInReq };
