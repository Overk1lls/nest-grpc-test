import { grpcUsersOptions } from '@app/shared';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import 'dotenv/config';
import { ProducerModule } from './producer.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProducerModule,
    grpcUsersOptions,
  );
  const logger = new Logger('ProducerApp');

  await app.listen();

  logger.log(
    `Producer microservice is running at ${process.env.GRPC_PRODUCER_URL}`,
  );
}

bootstrap().catch(console.error);
