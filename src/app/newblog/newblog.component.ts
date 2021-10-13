import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css'],
})
export class NewblogComponent implements OnInit {
  title: any;
  content: any;
  author: any;
  image: any;
  date: any = new Date().toDateString();
  blog: any = {};

  handleReaderLoaded = (readerEvent: any) => {
    this.image = readerEvent.target.result;
    console.log('2 ', this.image);
  };

  onImgUpload(event: any) {
    let file = event.target.files[0];
    console.log('file to upload', file);

    // if file exist convert into base64 string
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
    }
  }

  addBlog() {
    /*console.log(this.title);
    console.log(this.content);
    console.log('addblog', this.image);*/
    this.blog = {
      title: this.title,
      content: this.content,
      image: this.image,
      author: this.author,
      date: this.date,
    };

    this.blogApi.postBlog('http://localhost:8000/blogs', this.blog).subscribe(
      (response: any) => {
        //console.log('blog added successfully', response);
        alert('Blog posted successfully!!!');
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.log('error occured', error);
      }
    );
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private blogApi: BlogApiService
  ) {}

  ngOnInit(): void {}
}
