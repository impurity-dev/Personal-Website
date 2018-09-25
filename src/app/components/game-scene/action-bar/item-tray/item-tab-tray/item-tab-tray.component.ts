import { Component, OnInit } from "@angular/core";

import {ItemTab} from "../../../../../models/Items/ItemTabs/ItemTab";

@Component({
  selector: "app-item-tab-tray",
  templateUrl: "./item-tab-tray.component.html",
  styleUrls: ["./item-tab-tray.component.css"]
})
export class ItemTabTrayComponent implements OnInit {

  itemTabs: ItemTab[];

  constructor() {
    this.itemTabs = [
      new ItemTab("", "DEFAULT"),
      new ItemTab("", "DEFAULT"),
      new ItemTab("", "DEFAULT"),
      new ItemTab("", "DEFAULT")
    ];
  }

  ngOnInit() {
  }

}

