import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs: any = [];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:8000/blogs').subscribe(
      (response: any) => {
        console.log('Data fetched successfully\n', response);
        this.blogs = response;
      },
      (error: any) => {
        console.log('Error occured while fetching blogs\n', error);
      }
    );
  }

  ngOnInit(): void {}
}
