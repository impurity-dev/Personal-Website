import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-tab",
  templateUrl: "./item-tab.component.html",
  styleUrls: ["./item-tab.component.css"]
})
export class ItemTabComponent {
  // The currently selected index
  @Input() selectedIndex: number;
  // Event to notify parent that this tab was activated
  @Output() selectedIndexChange: EventEmitter<number>;
  // The index for the current slot
  @Input() index: number;
  // Tab name
  @Input() name: String;
  // Tab icon imagePath
  @Input() imagePath: String;

  /**
   * Item tab represents a bag that is equipped
   */
  constructor() {
    this.selectedIndexChange = new EventEmitter<number>();
   }

  /**
   * Click event handler for the tab component
   * If NOT active, lets make it active
   * If ALREADY active, do nothing
   */
  toggleTab() {
    if (this.index !== this.selectedIndex) {
      this.selectedIndexChange.emit(this.index);
    }
  }

}
