import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts = [
    {id: 1, title: 'post-1', summary: 'this is the summary of post-1'},
    {id: 2, title: 'post-2'},
    {id: 3, title: 'post-3'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


