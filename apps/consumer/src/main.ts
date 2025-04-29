import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConsumerModule } from './consumer.module';
import { ConsumerService } from './consumer.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(ConsumerModule);
  const logger = new Logger('ConsumerApp');

  const service = app.get(ConsumerService);
  const users = await service.fetchFilteredUsers();

  logger.debug(
    `Fetched ${users.length} users: ${JSON.stringify(users, null, 2)}`,
  );

  await app.close();
}

bootstrap().catch(console.error);
