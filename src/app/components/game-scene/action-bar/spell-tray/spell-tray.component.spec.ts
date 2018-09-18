import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpellTrayComponent } from "./spell-tray.component";

describe("SpellTrayComponent", () => {
  let component: SpellTrayComponent;
  let fixture: ComponentFixture<SpellTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
