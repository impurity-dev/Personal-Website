import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  mediaLinks: string[];

  constructor() {
    this.mediaLinks = [
      "LinkedIn",
      "Stack Overflow",
      "GitHub",
      "Kongregate",
      "NewGrounds",
      "Facebook",
      "Twitter",
      "Instagram",
      "Youtube"
    ];


  }

  ngOnInit() {
  }

}
