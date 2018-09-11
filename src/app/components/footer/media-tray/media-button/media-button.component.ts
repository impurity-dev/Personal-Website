import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-media-button",
  templateUrl: "./media-button.component.html",
  styleUrls: ["./media-button.component.css"]
})
export class MediaButtonComponent implements OnInit {

  @Input() imagePath: String; // TODO: default icon
  @Input() header: String; // Front of card title

  constructor() { }

  ngOnInit() {
  }

}
