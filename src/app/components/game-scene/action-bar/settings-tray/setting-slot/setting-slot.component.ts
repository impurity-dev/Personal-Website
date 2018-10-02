import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-setting-slot",
  templateUrl: "./setting-slot.component.html",
  styleUrls: ["./setting-slot.component.css"]
})
export class SettingSlotComponent implements OnInit {

  @Input() imagePath: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
