import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DummyBlogsService } from './dummy-blogs.service';
import { ApiService } from './api.service';
import { Blog } from './models/post.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  blogs: Blog[]=[];
  date: Date = new Date();
  constructor(private router: Router,private datas: DummyBlogsService,
    private apiService:ApiService) {
      this.getPosts();
    //  this.blogs = datas.getPosts();
   }

navigateToBlogDetail(id:number) {
  console.log('jkbjkbk')
  this.router.navigate(['/blog-detail',id]);
}

getPosts() {
  this.apiService.getPosts().subscribe( posts => {
      this.blogs = posts; 
      console.log(this.blogs);
    })

}



}
