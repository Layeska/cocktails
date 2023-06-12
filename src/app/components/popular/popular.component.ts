import { Component } from '@angular/core';
import { Cocktail } from 'src/app/interfaces/item.interface';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})

export class PopularComponent {
  drink1: Cocktail[] = []

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.searchById(11007)
  }

  searchById(id: number | string) {
    this.itemService.getById(id).subscribe(res => {
      console.log("By Id: ", res.drinks[0])
      this.drink1 = res.drinks[0]
      console.log(this.drink1)
    })
  }
}
