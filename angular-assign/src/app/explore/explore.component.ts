import { Component, OnInit } from '@angular/core';
import { PostApiService } from 'src/app/services/post-api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styles: [
  ]
})
export class ExploreComponent implements OnInit {

 
  constructor(private postApi: PostApiService) { }

  public posts = []
  private allposts = []

  private limit = 3
  public currentIndex = 0

  public poststart=0
  public postend=0
  public totalpost=0

  increment() {
    if ((this.currentIndex + 1) * this.limit < this.allposts.length) {
      this.currentIndex += 1
    }

    this.posts = this.pagination(this.currentIndex)
  }

  decrement() {
    if (this.currentIndex >= 1) {
      this.currentIndex -= 1
    }
    this.posts = this.pagination(this.currentIndex)
    console.log(this.posts)
  }

  pagination(index: any) {
    this.poststart = index*this.limit+1
    this.postend = Math.min(index*this.limit+this.limit,this.allposts.length)
    this.totalpost = this.allposts.length
    return this.allposts.slice(index * this.limit, index * this.limit + this.limit)
  }

  ngOnInit(): void {
    this.postApi.getAllPosts().subscribe((posts: any) => {
      this.allposts = posts
      this.posts = this.pagination(this.currentIndex)
    }, (err) => {
      console.log(err)
    })
  }

}