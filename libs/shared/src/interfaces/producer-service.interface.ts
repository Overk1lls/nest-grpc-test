import { Observable } from 'rxjs';
import { UserList } from './user.interface';

export interface UsersService {
  GetFilteredUsers(data: {}): Observable<UserList>;
}
