import { Axios } from 'axios';
import axios, { BASE_URL } from '../configs/axios';

export class BaseService {
  protected axios: Axios;

  protected url: string;

  constructor(protected baseName: string) {
    this.axios = axios;
    this.url = `${BASE_URL}/${baseName}`;
  }
}
