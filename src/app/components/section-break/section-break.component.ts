import { Component, Input } from "@angular/core";

@Component({
  selector: "app-section-break",
  templateUrl: "./section-break.component.html",
  styleUrls: ["./section-break.component.css"]
})
export class SectionBreakComponent {
  @Input() title: string;
}
