import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  postEmployee(data: any) {
    return this.http.post<any>('http://localhost:8000/api/addEmployee/', data);
  }
  getEmployee() {
    return this.http.get<any>('http://localhost:8000/api/employeeData/');
  }
  getEmployeePagination(pagesize: number, pageNo: number, filter: any) {
    let queryParams = new HttpParams()
      .append('pagesize', pagesize)
      .append('pageNo', pageNo)
      .append('filter', filter);
    return this.http.get<any>('http://localhost:8000/api/employeeData', {
      params: queryParams,
    });
  }
  putEmployee(data: any, id: number) {
    return this.http.put<any>(
      'http://localhost:8000/api/employeeUpdate/'+id,
      data
    );
  }
  deleteEmployee(id: number) {
    return this.http.delete<any>(
      'http://localhost:8000/api/employeeDelete/' + id
    );
  }
}
