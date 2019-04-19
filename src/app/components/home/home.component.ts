import { Component, OnInit } from '@angular/core';
import { Rule } from './form/form.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public baseFormTitle = 'Type a full or partial url where you would like to display notifications.';
  public excludeFormTitle = 'Type a full or partial url where you would like to NOT display notifications.';
  public matchingOptions = [{display: 'Contains', value: 'contains'}, {display: 'Exact Match', value: 'exact'}];

  public rules: { [key: string]: Rule[] } = {
    base: [],
    exclusion: [],
  };

  constructor() { }

  ngOnInit() {
  }

  addForm( ruleType: string ): void {
    this.rules[ruleType].push({
      matching: 'contains',
      url: ''
    });
  }

  removeRule( index: number, path: string ): void {
    this.rules[path].splice(index, 1);
  }
}
