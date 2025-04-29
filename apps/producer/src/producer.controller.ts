import { UserList } from '@app/shared';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProducerService } from './producer.service';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @GrpcMethod('UsersService', 'GetFilteredUsers')
  getFilteredUsers(): UserList {
    const users = this.producerService.getFilteredUsers();
    return { users };
  }
}
