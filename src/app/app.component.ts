import {Component, OnInit} from '@angular/core';
import {CatalogService} from "./catalog.service";
import {Recipe} from "./recipe";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AsianFoodFront';
  public catalog: Recipe[] | undefined;

  constructor(private catalogService: CatalogService) {
  }

  public getCatalog(): void {
    this.catalogService.getCatalog().subscribe(
      (response: Recipe[]) => {
        console.log("Get recipe list:");
        console.log(response);
        this.catalog = response;
      },
      (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    )
  }

  ngOnInit(): void {
    this.getCatalog();
  }
}
