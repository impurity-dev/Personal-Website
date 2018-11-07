import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpellSlotComponent } from "./spell-slot.component";

describe("SpellSlotComponent", () => {
  let component: SpellSlotComponent;
  let fixture: ComponentFixture<SpellSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
