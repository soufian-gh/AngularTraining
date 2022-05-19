import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'cards';
 posts = [
   {
     title : "neat tree",
     imageUrl : "assets/tree.jpeg",
     userName : "nature",
     content : "paragraph one"
   },
   {
    title : "biking",
    imageUrl : "assets/biking.jpeg",
    userName : "biker",
    content : "paragraph two"
  },
  {
    title : "mountain",
    imageUrl : "assets/mountain.jpeg",
    userName : "mount",
    content : "paragraph three"
  },
  {
    title : "biking",
    imageUrl : "assets/biking.jpeg",
    userName : "biker",
    content : "paragraph two"
  },
  {
    title : "mountain",
    imageUrl : "assets/mountain.jpeg",
    userName : "mount",
    content : "paragraph three"
  },
 ];
}
