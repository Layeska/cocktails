import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail } from 'src/app/interfaces/item.interface'
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})

export class ItemComponent {
  @Input() item!: Cocktail

  constructor(private router: Router) {}

  goToDrink() {
    console.log("ruta: ",this.item)
    this.router.navigate([`./cocktail/${this.item.idDrink}`])
  }

  ngOnInit(): void {
    //console.log('Ver: ', this.item)
  }


}
