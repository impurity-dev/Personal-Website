import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SettingSlotComponent } from "./setting-slot.component";

describe("SettingSlotComponent", () => {
  let component: SettingSlotComponent;
  let fixture: ComponentFixture<SettingSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
