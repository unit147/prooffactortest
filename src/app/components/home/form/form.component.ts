import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public form: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.form = this.fb.group({
      matching: [ this.rule.matching || '', Validators.required],
      url: [this.rule.url || '', Validators.required],
    });
  }

}
