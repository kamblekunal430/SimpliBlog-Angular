import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NewblogComponent } from './newblog/newblog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newBlog', component: NewblogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'viewBlog/:id', component: ViewBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
