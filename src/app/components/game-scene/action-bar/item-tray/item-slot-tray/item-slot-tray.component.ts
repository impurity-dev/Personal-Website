import { Component, OnInit } from "@angular/core";
import {Item} from "../../../../../models/game-scene/action-bar/item-tray/item-slot-tray/item-slot/Item/Item";

@Component({
  selector: "app-item-slot-tray",
  templateUrl: "./item-slot-tray.component.html",
  styleUrls: ["./item-slot-tray.component.css"]
})
export class ItemSlotTrayComponent implements OnInit {

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
