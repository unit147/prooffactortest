import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public baseFormTitle = 'Type a full or partial url where you would like to display notifications.';
  public excludeFormTitle = 'Type a full or partial url where you would like to NOT display notifications.';

  public rules: { [key: string]: any } = {
    base: [],
    exclusion: [],
  };

  constructor() { }

  ngOnInit() {
  }

}
