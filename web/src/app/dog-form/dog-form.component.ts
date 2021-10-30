import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {

  dogForm: FormGroup | any;

  constructor(
    private formBuilder: FormBuilder,
    private dogService: DogService
  ) { }

  ngOnInit(): void {
    this.dogForm = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  record() {
    const name = this.dogForm.get('name').value;
    const gender = this.dogForm.get('gender').value;

    console.log("Fez submit! Valores: ", name, gender);
  }
}
