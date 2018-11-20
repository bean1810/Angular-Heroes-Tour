import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.scss']
})

export class DashboardComponent implements OnInit {
  title = 'the most favorite superheroes in the Marvel Cinematic Universe';
  constructor() { }

  ngOnInit() {
  }

}
