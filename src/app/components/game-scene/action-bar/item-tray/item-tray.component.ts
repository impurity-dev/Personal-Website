import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-item-tray",
  templateUrl: "./item-tray.component.html",
  styleUrls: ["./item-tray.component.css"]
})
export class ItemTrayComponent implements OnInit {

  selectedIndex: number;

  constructor() {
    this.selectedIndex = 0;
   }

  ngOnInit() {
  }

  updateSelectedIndex(updatedIndex) {
    this.selectedIndex = updatedIndex;
  }
}
