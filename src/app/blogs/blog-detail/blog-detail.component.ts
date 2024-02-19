import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyBlogsService } from '../dummy-blogs.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {
  id:any;
  blogs:any;
  selectedData:any;
  constructor(private route: ActivatedRoute, private apiService:ApiService){

  }

  ngOnInit(): void {

   
    this.id = this.route.snapshot.params;
    console.log(this.id['id']);
      this.apiService.getPostById(this.id['id']).subscribe( posts => {
        this.selectedData = posts; 
        console.log(this.selectedData);
      })
    
  }
  
}
