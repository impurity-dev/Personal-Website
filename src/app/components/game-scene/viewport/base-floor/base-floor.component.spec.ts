import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BaseFloorComponent } from "./base-floor.component";

describe("BaseFloorComponent", () => {
  let component: BaseFloorComponent;
  let fixture: ComponentFixture<BaseFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
