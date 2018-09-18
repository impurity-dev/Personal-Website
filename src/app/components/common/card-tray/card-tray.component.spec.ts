import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardTrayComponent } from "./card-tray.component";

describe("CardTrayComponent", () => {
  let component: CardTrayComponent;
  let fixture: ComponentFixture<CardTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
