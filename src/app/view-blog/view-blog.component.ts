import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css'],
})
export class ViewBlogComponent implements OnInit {
  blogId: any;
  blog: any;

  deleteBlog() {
    if (confirm('Confirm Delete Blog')) {
      this.blogApi
        .deleteBlog('http://localhost:8000/blogs/' + this.blogId)
        .subscribe(
          (response: any) => {
            console.log('Deleted successfully', response);
            this.router.navigate(['/']);
          },
          (error: any) => {
            console.log('Failed to delete the blog');
          }
        );
    }
  }
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private blogApi: BlogApiService
  ) {
    this.route.params.subscribe((params) => (this.blogId = params.id));
  }

  ngOnInit() {
    this.blogApi
      .getBlog('http://localhost:8000/blogs/' + this.blogId)
      .subscribe(
        (response: any) => {
          //console.log('Blog with id ' + this.blogId + ' fetched', response);
          this.blog = response;
        },
        (error: any) => {
          console.log('cannot fetch blog');
        }
      );
  }
}
