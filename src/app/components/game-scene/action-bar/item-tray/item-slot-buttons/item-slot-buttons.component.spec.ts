import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSlotButtonsComponent } from './item-slot-buttons.component';

describe('ItemSlotButtonsComponent', () => {
  let component: ItemSlotButtonsComponent;
  let fixture: ComponentFixture<ItemSlotButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSlotButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSlotButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
