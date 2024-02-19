import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Blog } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
blogUrl: string="https://jsonplaceholder.typicode.com/posts";


constructor(
  private http: HttpClient,
) { }

getPostById(id: number): Observable<Blog> {
  return this.http.get<Blog>(`${this.blogUrl}/${id}`)
}

getPosts(): Observable<Blog[]> {
  return this.http.get<Blog[]>(`${this.blogUrl}`)
}


// addPost(post: Blog): Observable<Blog> {
//   return this.http.post<Blog>(this.blog, post, httpOptions) 
// }

}