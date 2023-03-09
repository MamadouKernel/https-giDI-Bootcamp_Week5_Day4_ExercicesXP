import { Component } from '@angular/core';
import {interval, Observable} from "rxjs";
import {TimeInterval} from "rxjs";
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercice1';

  constructor(interval:TimeInterval<Number>, observable:Observable<Number>) {
  }

  ngOnInit(){
    //TODO: generate random number each second with interval
  }

}
