import { Component, OnInit } from "@angular/core";
import { Setting } from "../../../../models/Settings/Setting";

@Component({
  selector: "app-settings-tray",
  templateUrl: "./settings-tray.component.html",
  styleUrls: ["./settings-tray.component.css"]
})
export class SettingsTrayComponent implements OnInit {

  settings: Setting[][];

  constructor() {
    this.settings = [
      [new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"),
      new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub")],
      [new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"),
      new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub")],
      [new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"),
      new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub")],
      [new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"),
      new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub")],
      [new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"),
      new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub"), new Setting("GitHub", "GitHub")],

    ];
  }

  ngOnInit() {
  }

}
