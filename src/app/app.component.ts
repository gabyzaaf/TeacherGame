import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  teacherGameObject: any;
 
  constructor(private httpClient: HttpClient){

  }

  step:number = 0;

  ngOnInit(): void {
    this.httpClient.get('assets/teacher_game.json').subscribe(value => {
      this.teacherGameObject = value;
    })
  }

  goToNextStep(nextStep :number){
    this.step = nextStep;
  }
  title = 'HELLO';
}
