import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-animals-crud',
  templateUrl: './animals-crud.component.html',
  styleUrls: ['./animals-crud.component.css']
})
export class AnimalsCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAnimalCreate(): void {
    this.router.navigate(['/animals/create'])
  }
}
