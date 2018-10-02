import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemSlotTrayComponent } from "./item-slot-tray.component";

describe("ItemSlotTrayComponent", () => {
  let component: ItemSlotTrayComponent;
  let fixture: ComponentFixture<ItemSlotTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSlotTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSlotTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
