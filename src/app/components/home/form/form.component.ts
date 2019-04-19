import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() headerTitle: string;
  public form: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.form = this.fb.group({
      rule: ['', Validators.required],
      url: ['', Validators.required],
    });
  }

}
