import { Component, OnInit } from "@angular/core";
import { SocialMedia } from "../../../../models/Settings/SocialMedia";

@Component({
  selector: "app-settings-tray",
  templateUrl: "./settings-tray.component.html",
  styleUrls: ["./settings-tray.component.css"]
})
export class SettingsTrayComponent implements OnInit {

  settings: SocialMedia[][];

  constructor() {
    this.settings = [
      [
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub")
      ],
      [
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub")
      ],
      [
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub")
      ],
      [
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub")
      ],
      [
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub"), new SocialMedia("GitHub", "GitHub"),
        new SocialMedia("GitHub", "GitHub")
      ],
    ];
  }

  ngOnInit() {
  }

}
