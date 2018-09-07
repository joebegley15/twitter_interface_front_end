import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'angular-frontend';
  handle:string = '';
  userTweets:string = '';
  tagFound:boolean = false;
  userFound:boolean = false;
  userError:boolean = false;
  tagError:boolean = false;
  handleNum:number = 1;
  tag:string = '';
  tagNum:number = 1;
  tagTweets:string = '';

  constructor(private httpClient:HttpClient){  };

  onNameKeyUp(event:any){
    this.handle = event.target.value;
  }
  onTagKeyUp(event:any){
    this.tag = event.target.value;
  }
  onNumNameKeyUp(event:any){
    this.handleNum = event.target.value;
  }
  onNumTagKeyUp(event:any){
    this.tagNum = event.target.value;
  }
  getTweetsUser(){
    this.httpClient.get(`https://node-twit.herokuapp.com/api/userTweets/${this.handle}/${this.handleNum}`)
    .subscribe(
      (data:any) => {
        if(data.length) {
          this.userTweets = data;
          this.userFound = true;
        } else {
          this.userError = true;
        }
      }
    )
  }
  getTagTweets(){
    this.httpClient.get(`https://node-twit.herokuapp.com/api/tagTweets/${this.tag}/${this.tagNum}`)
    .subscribe(
      (data:any) => {
        if(data.length) {
          this.tagTweets = data;
          this.tagFound = true;
        } else {
          this.tagError = true;
        }
      }
    )
  }
}
