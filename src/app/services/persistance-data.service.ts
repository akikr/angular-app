import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistanceDataService {
  
  constructor() { }

  public setData(data: any): void  {
    try {
      localStorage.setItem("form-data", JSON.stringify(data));
    } catch (error) {
      console.log("Error saving data to local-stroage: " + error);
    }
  }

  public getData() {
    try {
      return (localStorage.getItem("form-data") || "[]");
    } catch (error) {
      console.log("Error getting data from local-stroage: " + error);
      return null;
    }
  }
}
