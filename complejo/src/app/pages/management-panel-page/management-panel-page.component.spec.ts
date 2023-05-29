import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPanelPageComponent } from './management-panel-page.component';

describe('ManagementPanelPageComponent', () => {
  let component: ManagementPanelPageComponent;
  let fixture: ComponentFixture<ManagementPanelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementPanelPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
