import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tray',
  templateUrl: './card-tray.component.html',
  styleUrls: ['./card-tray.component.css']
})
export class CardTrayComponent implements OnInit {

  cards = [
    new Card('assets/img/Android.png', 'Android', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/Angular.png', 'Angular', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/Bootstrap.png', 'Bootstrap', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/C.png', 'C', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/CPlusPlus.png', 'C++', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/CSharp.png', 'C#', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/Css.png', 'CSS', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/Git.png', 'Git', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/Html.png', 'HTML', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/Java.png', 'Java', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/Javascript.png', 'Javascript', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/Microsoft.png', 'Microsoft', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/Nodejs.png', 'NodeJS', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/R.png', 'R', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/React.png', 'React', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/Scala.png', 'Scala', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/VBDotNet.png', 'VB.NET', 'WPF, .NET, Unity', 'My big bad description you should read'),
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
