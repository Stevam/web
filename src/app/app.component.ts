import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'Web';
  lista = [];

  click() {
    console.log("passou aqui");
    this.list().subscribe((data: []) => { this.lista = data });
  }

  list(){
    return this.http.get(`${environment.url}/list`);
  }

}
