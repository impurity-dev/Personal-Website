import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-media-tray",
  templateUrl: "./media-tray.component.html",
  styleUrls: ["./media-tray.component.css"]
})
export class MediaTrayComponent implements OnInit {
  private imagePath = "assets/img/potions/";
  mediaLinks: MediaLink[];

  constructor() {
    this.mediaLinks = [
      new MediaLink(this.imagePath + "Green.png", "LinkedIn"),
      new MediaLink(this.imagePath + "Green.png", "Stack Overflow"),
      new MediaLink(this.imagePath + "Green.png", "GitHub"),
      new MediaLink(this.imagePath + "Green.png", "Kongregate"),
      new MediaLink(this.imagePath + "Green.png", "NewGrounds"),
      new MediaLink(this.imagePath + "Green.png", "Facebook"),
      new MediaLink(this.imagePath + "Green.png", "Twitter"),
      new MediaLink(this.imagePath + "Green.png", "Instagram"),
      new MediaLink(this.imagePath + "Green.png", "Youtube")
    ];
   }

  ngOnInit() {
  }
}

export class MediaLink {
  constructor(
    public imagePath: string,
    public header: string) { }
}
