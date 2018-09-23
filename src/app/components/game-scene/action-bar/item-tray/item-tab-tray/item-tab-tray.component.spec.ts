import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ItemTabTrayComponent } from "./item-tab-tray.component";

describe('ItemTabTrayComponent', () => {
  let component: ItemTabTrayComponent;
  let fixture: ComponentFixture<ItemTabTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemTabTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTabTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
