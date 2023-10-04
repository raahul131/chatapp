// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "signup.proto" (package "com.example", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message com.example.UserRequest
 */
export interface UserRequest {
    /**
     * @generated from protobuf field: string userName = 1;
     */
    userName: string;
    /**
     * @generated from protobuf field: string email = 2;
     */
    email: string;
    /**
     * @generated from protobuf field: string password = 3;
     */
    password: string;
    /**
     * @generated from protobuf field: int64 phoneNumber = 5;
     */
    phoneNumber: bigint;
}
/**
 * @generated from protobuf message com.example.UserReply
 */
export interface UserReply {
    /**
     * @generated from protobuf field: string userName = 1;
     */
    userName: string;
    /**
     * @generated from protobuf field: string email = 2;
     */
    email: string;
    /**
     * @generated from protobuf field: string role = 3;
     */
    role: string;
    /**
     * @generated from protobuf field: int64 phoneNumber = 4;
     */
    phoneNumber: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class UserRequest$Type extends MessageType<UserRequest> {
    constructor() {
        super("com.example.UserRequest", [
            { no: 1, name: "userName", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "phoneNumber", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<UserRequest>): UserRequest {
        const message = { userName: "", email: "", password: "", phoneNumber: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserRequest): UserRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string userName */ 1:
                    message.userName = reader.string();
                    break;
                case /* string email */ 2:
                    message.email = reader.string();
                    break;
                case /* string password */ 3:
                    message.password = reader.string();
                    break;
                case /* int64 phoneNumber */ 5:
                    message.phoneNumber = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string userName = 1; */
        if (message.userName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.userName);
        /* string email = 2; */
        if (message.email !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.email);
        /* string password = 3; */
        if (message.password !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.password);
        /* int64 phoneNumber = 5; */
        if (message.phoneNumber !== 0n)
            writer.tag(5, WireType.Varint).int64(message.phoneNumber);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.example.UserRequest
 */
export const UserRequest = new UserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UserReply$Type extends MessageType<UserReply> {
    constructor() {
        super("com.example.UserReply", [
            { no: 1, name: "userName", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "email", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "role", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "phoneNumber", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<UserReply>): UserReply {
        const message = { userName: "", email: "", role: "", phoneNumber: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<UserReply>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserReply): UserReply {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string userName */ 1:
                    message.userName = reader.string();
                    break;
                case /* string email */ 2:
                    message.email = reader.string();
                    break;
                case /* string role */ 3:
                    message.role = reader.string();
                    break;
                case /* int64 phoneNumber */ 4:
                    message.phoneNumber = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UserReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string userName = 1; */
        if (message.userName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.userName);
        /* string email = 2; */
        if (message.email !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.email);
        /* string role = 3; */
        if (message.role !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.role);
        /* int64 phoneNumber = 4; */
        if (message.phoneNumber !== 0n)
            writer.tag(4, WireType.Varint).int64(message.phoneNumber);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.example.UserReply
 */
export const UserReply = new UserReply$Type();
/**
 * @generated ServiceType for protobuf service com.example.UserService
 */
export const UserService = new ServiceType("com.example.UserService", [
    { name: "register", options: {}, I: UserRequest, O: UserReply }
]);