import { AxiosResponse } from 'axios';
import { BaseService } from './base';

export class GenericService<T> extends BaseService {
  constructor(protected baseName: string) {
    super(baseName);
  }

  findAll(): Promise<AxiosResponse<T[]>> {
    return this.axios.get<T[]>(this.url);
  }

  findById(id: number): Promise<AxiosResponse<T>> {
    return this.axios.get<T>(`${this.url}/${id}`);
  }

  delete(id: number): Promise<AxiosResponse> {
    return this.axios.delete(`${this.url}/${id}`);
  }

  edit(id: number, data: T): Promise<AxiosResponse> {
    return this.axios.put(`${this.url}/${id}`, data);
  }

  patch(id: number, data: Partial<T>): Promise<AxiosResponse> {
    return this.axios.patch(`${this.url}/${id}`, data);
  }

  add(id: number, data: T): Promise<AxiosResponse> {
    return this.axios.post(`${this.url}/${id}`, data);
  }
}
