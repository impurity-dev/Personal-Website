import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { MediaTrayComponent } from "./media-tray.component";

describe("MediaTrayComponent", () => {
  let component: MediaTrayComponent;
  let fixture: ComponentFixture<MediaTrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaTrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
