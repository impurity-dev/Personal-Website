import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-item-tab",
  templateUrl: "./item-tab.component.html",
  styleUrls: ["./item-tab.component.css"]
})
export class ItemTabComponent implements OnInit {

  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Click event handler for the tab component
   * If NOT active, lets make it active
   * If ALREADY active, do nothing
   */
  toggleTab() {
    if (!this.isActive) {
      this.isActive = true;
      // TODO: Notify tray that an index has been updated
    }
  }

}
