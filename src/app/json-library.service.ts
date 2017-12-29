import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
@Injectable()
export class JsonLibraryService {

  

  constructor(private http: Http) { 

  }

  

  getProjects(){
    return this.http.get("assets/teacher_game.json");
  }

}
