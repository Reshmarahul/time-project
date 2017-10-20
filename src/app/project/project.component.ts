import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  dataUrl = 'assets/data/data.json'
  results:any={};
   constructor(private http: Http,
     private httpClient: HttpClient) {

  }


  ngOnInit() {
    this.httpClient.get(this.dataUrl).subscribe(res => {
      console.log(res);
      this.results=res;
     
  } );
  }

}
