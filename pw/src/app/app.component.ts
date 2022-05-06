import { BuiltinType } from '@angular/compiler';
import { Component } from '@angular/core';

const handler = (e: { target: HTMLInputElement }) => {
  const value = e.target.value;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//event binding syntax     <button (click)="method()" ><button/>
//property binding syntax  <input [value]=password> <input/>


export class AppComponent {

  password ='';

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  lenght = 6 ;
   // Event handler for lenth


   onChangeLength(value:string){
   
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)) {
      this.lenght=parsedValue;
    }
  };
    // Event handler for checkboxes

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  };
  
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  };

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  };

  onButtonClick(){
   // this.password='password test'
 

    const numbers = '1234567890';
    const letters = 'AZERTYUIOOPQSDFGHJKLMWXCVBN';
    const symbols = '@*$^%µ£#';

    let validChars = '';

    if(this.includeLetters){
      validChars += letters;
    };

    if(this.includeSymbols){
      validChars += symbols;
    };

    if(this.includeNumbers){
      validChars += numbers;
    };

    let generatedPass = '';
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPass += validChars[index];
    }

    this.password = generatedPass;


    console.log(this.password);

    
  };
  
}
