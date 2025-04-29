import { User, USERS_PROVIDER_TOKEN, UsersService } from '@app/shared';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ConsumerService {
  private usersService: UsersService;

  constructor(
    @Inject(USERS_PROVIDER_TOKEN)
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.usersService = this.client.getService<UsersService>('UsersService');
  }

  async fetchFilteredUsers(): Promise<User[]> {
    const { users } = await lastValueFrom(
      this.usersService.GetFilteredUsers({}),
    );
    return users;
  }
}
