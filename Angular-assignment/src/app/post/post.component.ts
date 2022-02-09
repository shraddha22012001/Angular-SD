import { Component,  OnInit ,Input} from '@angular/core';
import { PostApiService } from 'src/app/services/post-api.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
  ]
})
export class PostComponent implements OnInit {

  constructor(private postApi:PostApiService) { }

@Input() post:any
  public user:any

  ngOnInit(): void {
    this.postApi.getRandomUser().subscribe((user:any)=>{
      this.user = user
    },(err)=>{console.log(err)})
  }
}
