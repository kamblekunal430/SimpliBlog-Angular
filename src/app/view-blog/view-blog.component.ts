import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css'],
})
export class ViewBlogComponent implements OnInit {
  blogId: any;
  blog: any;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe((params) => (this.blogId = params.id));
  }

  ngOnInit() {
    this.http.get('http://localhost:8000/blogs/' + this.blogId).subscribe(
      (response: any) => {
        console.log('Blog with id ' + this.blogId + ' fetched', response);
        this.blog = response;
      },
      (error: any) => {
        console.log('cannot fetch blog');
      }
    );
  }
}
