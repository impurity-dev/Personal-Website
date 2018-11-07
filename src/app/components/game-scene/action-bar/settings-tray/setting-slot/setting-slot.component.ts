import { Component, Input } from "@angular/core";

@Component({
  selector: "app-setting-slot",
  templateUrl: "./setting-slot.component.html",
  styleUrls: ["./setting-slot.component.css"]
})
export class SettingSlotComponent {

  @Input() imagePath: string;
  @Input() name: string;
  @Input() link: string;
}
