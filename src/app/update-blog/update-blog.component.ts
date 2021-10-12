import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css'],
})
export class UpdateBlogComponent implements OnInit {
  blogId: any;
  title: any;
  author: any;
  date: any = new Date();
  image: any;
  content: any;

  updateBlog() {
    this.http
      .put('http://localhost:8000/blogs/' + this.blogId, {
        title: this.title,
        author: this.author,
        date: this.date,
        image: this.image,
        content: this.content,
      })
      .subscribe(
        (res: any) => {
          console.log('Update success', res);
          alert('Blog Updated Successfully...');
          this.router.navigate(['/viewBlog/' + this.blogId]);
        },
        (err: any) => {
          console.log('Error while updating', err);
        }
      );
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => (this.blogId = params.id));
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8000/blogs/' + this.blogId).subscribe(
      (response: any) => {
        console.log('Blog with id ' + this.blogId + ' fetched', response);
        this.title = response.title;
        this.author = response.author;
        this.content = response.content;
        this.image = response.image;
      },
      (error: any) => {
        console.log('cannot fetch blog', error);
      }
    );
  }
}
