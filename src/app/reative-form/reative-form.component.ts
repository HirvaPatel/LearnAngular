import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.css']
})
export class ReativeFormComponent implements OnInit {

  registerForm : FormGroup;
  submitted: boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        address: this.formBuilder.group({
          street: [],
          zip: [],
          city: []
        })

    });
  }

}
