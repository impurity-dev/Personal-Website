import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SettingsTrayComponent } from "./settings-tray.component";

describe("SettingsTrayComponent", () => {
  let component: SettingsTrayComponent;
  let fixture: ComponentFixture<SettingsTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
