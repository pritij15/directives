import { Component, OnInit } from '@angular/core';
import { Iposts } from '../interface/postinterface';
import { posts } from '../consts/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
postArr : Array<Iposts> = posts;
  constructor() { }

  ngOnInit(): void {
  }

}
