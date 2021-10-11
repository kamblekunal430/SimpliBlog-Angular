import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newblog',
  templateUrl: './newblog.component.html',
  styleUrls: ['./newblog.component.css'],
})
export class NewblogComponent implements OnInit {
  title: any;
  content: any;
  constructor() {}

  ngOnInit(): void {}
  addBlog() {
    console.log(this.title);
    console.log(this.content);
  }
}
