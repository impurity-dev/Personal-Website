import { Component } from "@angular/core";

@Component({
  selector: "app-item-tray",
  templateUrl: "./item-tray.component.html",
  styleUrls: ["./item-tray.component.css"]
})
export class ItemTrayComponent {

  // The currently selected index
  selectedIndex: number;

  constructor() {
    this.selectedIndex = 0;
   }

  /**
   * Update the selected index at the top parent
   * event handler
   * @param updatedIndex index that has been selected
   */
  updateSelectedIndex(updatedIndex) {
    this.selectedIndex = updatedIndex;
  }
}
