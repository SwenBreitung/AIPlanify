import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleHubComponent } from './module-hub.component';

describe('ModuleHubComponent', () => {
  let component: ModuleHubComponent;
  let fixture: ComponentFixture<ModuleHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModuleHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
