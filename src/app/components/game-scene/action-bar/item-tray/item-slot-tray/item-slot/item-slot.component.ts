import { Component, Input } from "@angular/core";

@Component({
  selector: "app-item-slot",
  templateUrl: "./item-slot.component.html",
  styleUrls: ["./item-slot.component.css"]
})
export class ItemSlotComponent {

  @Input() name: string;
  @Input() imagePath: string;
}
