import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Recipe} from "./recipe";

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getCatalog(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.apiServerUrl}catalog`);
  }


}
