import { grpcUsersOptions, USERS_PROVIDER_TOKEN } from '@app/shared';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { ConsumerService } from './consumer.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        ...grpcUsersOptions,
        name: USERS_PROVIDER_TOKEN,
      },
    ]),
  ],
  controllers: [],
  providers: [ConsumerService],
})
export class ConsumerModule {}
