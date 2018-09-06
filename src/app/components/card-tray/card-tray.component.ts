import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tray',
  templateUrl: './card-tray.component.html',
  styleUrls: ['./card-tray.component.css']
})
export class CardTrayComponent implements OnInit {

  cards = [
    new Card('assets/img/tmp.jpg', 'C#', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/tmp.jpg', 'C#', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/tmp.jpg', 'C#', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/tmp.jpg', 'C#', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/tmp.jpg', 'C#', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/tmp.jpg', 'C#', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/tmp.jpg', 'C#', 'WPF, .NET, Unity', 'My big bad description you should read'),
    new Card('assets/img/tmp.jpg', 'C#', 'WPF, .NET, Unity', 'My big bad description you should read'),
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
