import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCardTrayComponent } from './spell-card-tray.component';

describe('SpellCardTrayComponent', () => {
  let component: SpellCardTrayComponent;
  let fixture: ComponentFixture<SpellCardTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellCardTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellCardTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
