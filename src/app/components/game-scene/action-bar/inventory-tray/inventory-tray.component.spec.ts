import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InventoryTrayComponent } from "./inventory-tray.component";

describe("InventoryTrayComponent", () => {
  let component: InventoryTrayComponent;
  let fixture: ComponentFixture<InventoryTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
