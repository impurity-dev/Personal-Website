import { Component, OnInit } from "@angular/core";

import {SpellCard} from "../../../models/spell-book/SpellCard";

@Component({
  selector: "app-card-tray",
  templateUrl: "./card-tray.component.html",
  styleUrls: ["./card-tray.component.css"]
})
export class CardTrayComponent implements OnInit {
  private cardPath = "assets/img/cards/";

  cards = [
    new SpellCard(this.cardPath + "Android.png", "Android", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "Angular.png", "Angular", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "Bootstrap.png", "Bootstrap", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "C.png", "C", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "CPlusPlus.png", "C++", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "CSharp.png", "C#", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "Css.png", "CSS", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "Git.png", "Git", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "Html.png", "HTML", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "Java.png", "Java", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "Javascript.png", "Javascript", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "Microsoft.png", "Microsoft", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "Nodejs.png", "NodeJS", "WPF, .NET, Unit", "My big bad description you should read"),
    new SpellCard(this.cardPath + "R.png", "R", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "React.png", "React", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "Scala.png", "Scala", "WPF, .NET, Unity", "My big bad description you should read"),
    new SpellCard(this.cardPath + "VBDotNet.png", "VB.NET", "WPF, .NET, Unity", "My big bad description you should read"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
