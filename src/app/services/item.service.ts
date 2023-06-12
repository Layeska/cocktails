import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { environment } from '../environments/environments'
import { Cocktail } from '../interfaces/item.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  //API_URL: string = 'https://www.thecocktaildb.com/api.php'
  API_URL: string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
  API_URL_LookUp: string = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php'

  constructor(private http: HttpClient){ }

  getbyName(name: string | null) {
    const params: any = {
      s: name
    }

    return this.http.get<Cocktail[]>(this.API_URL, {params}).pipe(map((res:any) => res.drinks))
  }

  getById(id: number | string) {
    const params: any = {
      i: id
    }

    return this.http.get<Cocktail[]>(this.API_URL_LookUp, {params}).pipe(map((res:any) => res.drinks[0]))
  }
}
