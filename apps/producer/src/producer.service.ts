import { User } from '@app/shared';
import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class ProducerService {
  getFilteredUsers(): User[] {
    const dataPath = join(__dirname, 'data', 'users.json');
    const raw = readFileSync(dataPath, 'utf-8');
    const users: User[] = JSON.parse(raw);
    return users.filter((u) => u.age >= 18);
  }
}
