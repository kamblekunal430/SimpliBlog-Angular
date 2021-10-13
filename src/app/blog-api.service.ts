import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogApiService {
  blogs: any;
  imgStr: any;
  getAllBlogs(url: any): any {
    return this.http.get(url);
  }

  getBlog(url: any): any {
    return this.http.get(url);
  }

  deleteBlog(url: any): any {
    return this.http.delete(url);
  }

  postBlog(url: any, obj: any): any {
    return this.http.post(url, obj);
  }

  updateBlog(url: any, obj: any): any {
    return this.http.put(url, obj);
  }

  constructor(private http: HttpClient) {}
}
