import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable()
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('https://my-json-server.typicode.com/azosa/fakeDB/posts');
  }

  getOne(id: number): Observable<EmployeeModel> {
    return this._httpClient.get<EmployeeModel>(`https://my-json-server.typicode.com/azosa/fakeDB/posts/${id}`);
  }
}
