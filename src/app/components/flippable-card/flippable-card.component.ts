import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-flippable-card",
  templateUrl: "./flippable-card.component.html",
  styleUrls: ["./flippable-card.component.css"]
})
export class FlippableCardComponent implements OnInit {


  @Input() imagePath: String; // Front of card icon - TODO: Have default image
  @Input() header: String; // Front of card title
  @Input() subHeader: String; // Front of card sub title
  @Input() description: String; // Back of card summary


  constructor() { }

  ngOnInit() {
  }

}
