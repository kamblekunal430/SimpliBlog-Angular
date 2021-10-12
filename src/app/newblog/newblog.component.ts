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
  author: any;
  image: any;
  blog: any = {};
  base64: any;

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
    console.log(this.title);
    console.log(this.content);
    console.log('addblog', this.image);
    this.blog = {
      title: this.title,
      content: this.content,
      image: this.image,
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
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
