import { Component, Input } from "@angular/core";
import { Item } from "../../../../../models/Items/Item";
import { ItemFactory } from "../../../../../factories/ItemFactory";
import { PotionType } from "../../../../../enums/Potions/PotionType";
import { PotionColor } from "../../../../../enums/Potions/PotionColor";


@Component({
  selector: "app-item-slot-tray",
  templateUrl: "./item-slot-tray.component.html",
  styleUrls: ["./item-slot-tray.component.css"]
})
export class ItemSlotTrayComponent {
  @Input() selectedIndex: number;
  items: Item[][][];

  constructor() {
    this.items = [
      [
        // Row 1
        [
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Purple)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Purple)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Purple)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Purple)
        ]
      ],
      [
        // Row 2
        [
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Empty)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Empty)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Empty)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Empty)
        ]
      ],
      [
        // Row 3
        [
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Purple)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Purple)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Purple)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Purple)
        ]
      ],
      [
        // Row 4
        [
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Purple)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Purple)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Pink),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Purple)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Empty),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Empty)
        ]
      ],
      [
        // Row 5
        [
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Yellow),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Yellow)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Blue),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Blue)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Green),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Green)
        ],
        [
          ItemFactory.CreatePotion(PotionType.Rectangle, PotionColor.Purple),
          ItemFactory.CreatePotion(PotionType.Round, PotionColor.Purple),
          ItemFactory.CreatePotion(PotionType.Triangle, PotionColor.Purple),
          ItemFactory.CreatePotion(PotionType.Square, PotionColor.Purple),
          ItemFactory.CreatePotion(PotionType.Tube, PotionColor.Purple)
        ]
      ]
    ];
   }
}
