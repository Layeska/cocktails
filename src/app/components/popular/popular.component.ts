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
  item: Cocktail[] = []

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.searchById(11000)
    this.searchById(12322)
    this.searchById(17207)
    this.searchById(15328)
    this.searchById(178348)
    this.searchById(178352)
    this.searchById(11872)
    this.searchById(14372)
    //console.log("AUX: ", this.item)
  }

  searchById(id: number | string) {
    this.itemService.getById(id).subscribe(res => {
      this.drink1 = res.drinks
     //console.log("drink1: ",this.drink1)
      this.item.push(this.drink1[0])
    })
  }
}
