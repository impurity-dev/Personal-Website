import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-tray",
  templateUrl: "./card-tray.component.html",
  styleUrls: ["./card-tray.component.css"]
})
export class CardTrayComponent implements OnInit {
  private cardPath = "assets/img/cards/";

  cards = [
    new Card(this.cardPath + "Android.png", "Android", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "Angular.png", "Angular", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "Bootstrap.png", "Bootstrap", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "C.png", "C", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "CPlusPlus.png", "C++", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "CSharp.png", "C#", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "Css.png", "CSS", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "Git.png", "Git", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "Html.png", "HTML", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "Java.png", "Java", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "Javascript.png", "Javascript", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "Microsoft.png", "Microsoft", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "Nodejs.png", "NodeJS", "WPF, .NET, Unit", "My big bad description you should read"),
    new Card(this.cardPath + "R.png", "R", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "React.png", "React", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "Scala.png", "Scala", "WPF, .NET, Unity", "My big bad description you should read"),
    new Card(this.cardPath + "VBDotNet.png", "VB.NET", "WPF, .NET, Unity", "My big bad description you should read"),
  ];

  constructor() { }

  ngOnInit() {
  }

}

export class Card {
  constructor(
    public imagePath: string,
    public header: string,
    public subHeader: string,
    public description: string) { }
}
