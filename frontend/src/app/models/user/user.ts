import { Role } from '@models/enums/role';

export interface User {
  id: string;
  username: string;
  email: string;
  role: Role;
  loginAt: Date;
}
