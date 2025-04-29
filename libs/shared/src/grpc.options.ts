import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const USERS_PROVIDER_TOKEN = 'USERS_PACKAGE';

export const grpcUsersOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'users',
    protoPath: join(__dirname, '..', '..', '..', 'proto', 'users.proto'),
    url: process.env.GRPC_PRODUCER_URL ?? 'localhost:5000',
  },
};
