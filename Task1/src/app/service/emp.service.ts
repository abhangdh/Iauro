import { Injectable } from '@angular/core';
import { Empdata } from '../model/empdata';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  _dataList: Empdata[] = []

  constructor() { }

  addEmp(empdata: Empdata){
    this._dataList.push(empdata);
  }

  removeEmp(id: number){
    const empdata = this._dataList.findIndex(e => e.ID === id);
    this._dataList.splice(empdata, 1);
  }

  getAllData(){
    return this._dataList;
  }

}
