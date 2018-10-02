import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import {ItemTab} from "../../../../../models/Items/ItemTabs/ItemTab";

@Component({
  selector: "app-item-tab-tray",
  templateUrl: "./item-tab-tray.component.html",
  styleUrls: ["./item-tab-tray.component.css"]
})
export class ItemTabTrayComponent implements OnInit {
  @Input() selectedIndex: number;
  @Output() selectedIndexChange: EventEmitter<number>;
  itemTabs: ItemTab[];

  constructor() {
    this.selectedIndexChange = new EventEmitter<number>();

    this.itemTabs = [
      new ItemTab("Blue", "Bag 1"),
      new ItemTab("Green", "Bag 2"),
      new ItemTab("Purple", "Bag 3"),
      new ItemTab("Yellow", "Bag 4"),
      new ItemTab("Pink", "Bag 5")
    ];
  }

  ngOnInit() {
  }


  updateSelectedIndex(updatedIndex) {
    this.selectedIndexChange.emit(updatedIndex);
  }
}

