import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css'],
})
export class NewblogComponent implements OnInit {
  title: any;
  content: any;
  blog: any = {};
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  addBlog() {
    console.log(this.title);
    console.log(this.content);
    this.blog = {
      title: this.title,
      content: this.content,
    };

    this.http.post('http://localhost:8000/blogs', this.blog).subscribe(
      (response: any) => {
        console.log('blog added successfully', response);
      },
      (error: any) => {
        console.log('error occured', error);
      }
    );
  }
}
