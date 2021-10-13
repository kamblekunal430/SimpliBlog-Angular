import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  blogs: any = [];

  constructor(private http: HttpClient, private blogApi: BlogApiService) {
    //console.log('api in');
    this.blogApi.getAllBlogs('http://localhost:8000/blogs').subscribe(
      (data: any) => {
        //console.log('getall', data);
        this.blogs = data;
      },
      (err: any) => {
        console.log('Something went wrong', err);
      }
    );
    //console.log('api out');
    // this.http.get('http://localhost:8000/blogs').subscribe(
    //   (response: any) => {
    //     console.log('Data fetched successfully\n', response);
    //     this.blogs = response;
    //   },
    //   (error: any) => {
    //     console.log('Error occured while fetching blogs\n', error);
    //   }
    // );
  }

  ngOnInit(): void {}
}
