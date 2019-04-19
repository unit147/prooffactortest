import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Rule } from './form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() headerTitle: string;
  @Input() matchingOptions: [{ [key: string]: string }];
  @Input() rule: Rule;
  @Input() index: number;
  @Output() remove = new EventEmitter<number>();
  public form: FormGroup;

  constructor( private fb: FormBuilder ) {
  }

  ngOnInit() {
    if ( !this.matchingOptions.length ) {
      throw Error('Required parameter \'matchingOptions\' wasn\'t defined');
    }

    this.form = this.fb.group({
      matching: [ this.rule.matching || this.matchingOptions[0] ],
      url: [ this.rule.url || '', [Validators.required] ],
    });
  }

  get url(): AbstractControl {
    return this.form.get('url');
  }

  removeClick() {
    this.remove.emit(this.index);
  }
}
