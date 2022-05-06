import { BuiltinType } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onButtonClick(){
    console.log("Button Clicked");
  }
}

//event binding syntax <button (click)="method()" ><button/>