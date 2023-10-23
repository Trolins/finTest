import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) {
    // this.getJSON().subscribe(data => {
    //     console.log("service - ", data);
    // });
}

public getJSON(): Observable<any> {
    return this.http.get("./assets/financical_example.json");
}
}
