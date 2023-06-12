import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

import { Cocktail } from 'src/app/interfaces/item.interface';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  item: Cocktail[] = []

  itemValueFC = new FormControl('Margarita')
  error: string = ''


  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemValueFC.valueChanges.pipe(debounceTime(1000))
    .subscribe(res => {
      console.log('Respuesta: ', res)
      this.searchByName(res)
    })

    this.searchByName('')
    console.log('item:', this.item)

  }

  searchByName(nameCoctail: string|null) {
    this.itemService.getbyName(nameCoctail).subscribe(res => {
      this.item = res
      console.log("Res: ", this.item)
    }, error => console.log(error))
  }
}
