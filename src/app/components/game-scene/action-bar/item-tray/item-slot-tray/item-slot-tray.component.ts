import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../../../../../models/Items/Item";
import { BluePotion } from "../../../../../models/Items/Potions/BluePotion";
import { YellowPotion } from "../../../../../models/Items/Potions/YellowPotion";
import { GreenPotion } from "../../../../../models/Items/Potions/GreenPotion";
import { PinkPotion } from "../../../../../models/Items/Potions/PinkPotion";
import { PurplePotion } from "../../../../../models/Items/Potions/PurplePotion";

@Component({
  selector: "app-item-slot-tray",
  templateUrl: "./item-slot-tray.component.html",
  styleUrls: ["./item-slot-tray.component.css"]
})
export class ItemSlotTrayComponent implements OnInit {
  @Input() selectedIndex: number;
  items: Item[][][];

  constructor() {
    this.items = [
      [
        [new BluePotion(), new YellowPotion(), new GreenPotion(), new PinkPotion(), new PurplePotion()],
        [new PurplePotion(), new BluePotion(), new YellowPotion(), new GreenPotion(), new PinkPotion()],
        [new PinkPotion(), new PurplePotion(), new BluePotion(), new YellowPotion(), new GreenPotion()],
        [new GreenPotion(), new PinkPotion(), new PurplePotion(), new BluePotion(), new YellowPotion()],
      ],
      [
        [new YellowPotion(), new GreenPotion(), new PinkPotion(), new PurplePotion(), new BluePotion()],
        [new BluePotion(), new YellowPotion(), new GreenPotion(), new PinkPotion(), new PurplePotion()],
        [new PurplePotion(), new BluePotion(), new YellowPotion(), new GreenPotion(), new PinkPotion()],
        [new PinkPotion(), new PurplePotion(), new BluePotion(), new YellowPotion(), new GreenPotion()],
      ],
      [
        [new BluePotion(), new YellowPotion(), new GreenPotion(), new PinkPotion(), new PurplePotion()],
        [new PurplePotion(), new BluePotion(), new YellowPotion(), new GreenPotion(), new PinkPotion()],
        [new PinkPotion(), new PurplePotion(), new BluePotion(), new YellowPotion(), new GreenPotion()],
        [new GreenPotion(), new PinkPotion(), new PurplePotion(), new BluePotion(), new YellowPotion()],
      ],
      [
        [new YellowPotion(), new GreenPotion(), new PinkPotion(), new PurplePotion(), new BluePotion()],
        [new BluePotion(), new YellowPotion(), new GreenPotion(), new PinkPotion(), new PurplePotion()],
        [new PurplePotion(), new BluePotion(), new YellowPotion(), new GreenPotion(), new PinkPotion()],
        [new PinkPotion(), new PurplePotion(), new BluePotion(), new YellowPotion(), new GreenPotion()],
      ],
      [
        [new BluePotion(), new YellowPotion(), new GreenPotion(), new PinkPotion(), new PurplePotion()],
        [new PurplePotion(), new BluePotion(), new YellowPotion(), new GreenPotion(), new PinkPotion()],
        [new PinkPotion(), new PurplePotion(), new BluePotion(), new YellowPotion(), new GreenPotion()],
        [new GreenPotion(), new PinkPotion(), new PurplePotion(), new BluePotion(), new YellowPotion()],
      ]
    ];
   }

  ngOnInit() {
  }

}
