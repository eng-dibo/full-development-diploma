import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  posts = [
    {id: 1, title: 'post-1', summary: 'this is the summary of post-1'},
    {id: 2, title: 'post-2'},
    {id: 3, title: 'post-3'},
  ];

  post!: {
    id: number;
    title: string;
    summary?: string;
  };
  

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      let postId = params.get('id')
      if(postId){
        let post = this.posts.find(el=> el.id === +postId!)
        if(post) this.post = post
      }
     

    })
  }

}
