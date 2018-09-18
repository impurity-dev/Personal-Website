import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-section-break",
  templateUrl: "./section-break.component.html",
  styleUrls: ["./section-break.component.css"]
})
export class SectionBreakComponent implements OnInit {

  @Input() title: string;

  constructor() {

  }

  ngOnInit() {
  }

}
