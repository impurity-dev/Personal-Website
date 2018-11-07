import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemSlotComponent } from "./item-slot.component";

describe("ItemSlotComponent", () => {
  let component: ItemSlotComponent;
  let fixture: ComponentFixture<ItemSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
