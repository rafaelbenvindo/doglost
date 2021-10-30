import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  dogs: Dog[] = [];

  constructor(private dogService: DogService) { };

  ngOnInit(): void {
    this.load();
  };

  async load() {
    this.dogs = await this.dogService.list().toPromise();
  }
}
