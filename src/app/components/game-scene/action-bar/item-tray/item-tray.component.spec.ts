import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTrayComponent } from './item-tray.component';

describe('ItemTrayComponent', () => {
  let component: ItemTrayComponent;
  let fixture: ComponentFixture<ItemTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
