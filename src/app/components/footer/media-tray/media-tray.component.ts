import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-media-tray",
  templateUrl: "./media-tray.component.html",
  styleUrls: ["./media-tray.component.css"]
})
export class MediaTrayComponent implements OnInit {
  private imagePath = "assets/img/social-media/";
  mediaLinks: MediaLink[];

  constructor() {
    this.mediaLinks = [
      new MediaLink(this.imagePath + "tmp.png", "LinkedIn"),
      new MediaLink(this.imagePath + "tmp.png", "Stack Overflow"),
      new MediaLink(this.imagePath + "tmp.png", "GitHub"),
      new MediaLink(this.imagePath + "tmp.png", "Kongregate"),
      new MediaLink(this.imagePath + "tmp.png", "NewGrounds"),
      new MediaLink(this.imagePath + "tmp.png", "Facebook"),
      new MediaLink(this.imagePath + "tmp.png", "Twitter"),
      new MediaLink(this.imagePath + "tmp.png", "Instagram"),
      new MediaLink(this.imagePath + "tmp.png", "Youtube")
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
