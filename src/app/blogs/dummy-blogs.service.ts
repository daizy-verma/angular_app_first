import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyBlogsService {

   blogs = [
    {
      id: 1,
      title: "The Basics of Cooking",
      author: "Chef Master",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-02-14",
      likes: 56
    },
    {
      id: 2,
      title: "Fitness Tips for Beginners",
      author: "Fitness Guru",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-02-13",
      likes: 102
    },
    {
      id: 3,
      title: "Traveling on a Budget",
      author: "Wanderlust Explorer",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-02-12",
      likes: 78
    },
    {
      id: 4,
      title: "The Art of Photography",
      author: "Photo Enthusiast",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-02-11",
      likes: 91
    },
    {
      id: 5,
      title: "Understanding Quantum Mechanics",
      author: "Physics Professor",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-02-10",
      likes: 203
    },
    {
      id: 6,
      title: "Gardening Tips for Beginners",
      author: "Green Thumb",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-02-09",
      likes: 65
    },
    {
      id: 7,
      title: "Improving Your Communication Skills",
      author: "Communication Expert",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-02-08",
      likes: 122
    },
    {
      id: 8,
      title: "Investing in Stocks 101",
      author: "Financial Analyst",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-02-07",
      likes: 88
    },
    {
      id: 9,
      title: "The Art of Writing Fiction",
      author: "Fiction Writer",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-02-06",
      likes: 77
    },
    {
      id: 10,
      title: "Healthy Eating Habits",
      author: "Nutritionist",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "2024-02-05",
      likes: 135
    }
  ];
  

  constructor() { }

  getPosts():any[] {
    return this.blogs
  }

  getPost(id:any):any {
    return this.blogs.find(post => post.id == id)
  }

}
