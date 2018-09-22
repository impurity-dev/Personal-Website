import { Component, OnInit } from "@angular/core";
import {Item} from "../../../../models/Item/item";

@Component({
  selector: "app-item-tray",
  templateUrl: "./item-tray.component.html",
  styleUrls: ["./item-tray.component.css"]
})
export class ItemTrayComponent implements OnInit {

  items: Item[][];

  constructor() {
    // TODO: Add actual item pathing and types
    this.items = [
      [new Item(), new Item(), new Item(), new Item(), new Item()],
      [new Item(), new Item(), new Item(), new Item(), new Item()],
      [new Item(), new Item(), new Item(), new Item(), new Item()],
      [new Item(), new Item(), new Item(), new Item(), new Item()],
    ];
   }

  ngOnInit() {
  }

}
