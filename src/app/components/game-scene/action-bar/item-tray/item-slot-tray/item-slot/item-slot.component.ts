import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-item-slot",
  templateUrl: "./item-slot.component.html",
  styleUrls: ["./item-slot.component.css"]
})
export class ItemSlotComponent implements OnInit {

  @Input() name: string;
  @Input() imagePath: string;

  constructor() { }

  ngOnInit() {
  }

}
