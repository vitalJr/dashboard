import { BaseService } from './base';

export class LoginService extends BaseService {
  constructor() {
    super('login');
  }

  async login(credentials: any) {
    return this.axios.post('/login', credentials);
  }

  //   async logout() {}
}
