import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCommandStoreComponent } from './angular-command-store.component';

describe('AngularCommandStoreComponent', () => {
  let component: AngularCommandStoreComponent;
  let fixture: ComponentFixture<AngularCommandStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularCommandStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularCommandStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
