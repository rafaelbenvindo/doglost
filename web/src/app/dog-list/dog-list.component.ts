import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  dogs: Dog[] = [];

  constructor(private activatedRoute: ActivatedRoute) { };

  ngOnInit(): void {
    this.dogs = this.activatedRoute.snapshot.data.dogs;
  };

}
