import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-tab",
  templateUrl: "./item-tab.component.html",
  styleUrls: ["./item-tab.component.css"]
})
export class ItemTabComponent implements OnInit {

  @Input() selectedIndex: number;
  @Output() selectedIndexChange: EventEmitter<number>;
  @Input() index: number;

  constructor() {
    this.selectedIndexChange = new EventEmitter<number>();
   }

  ngOnInit() {
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
