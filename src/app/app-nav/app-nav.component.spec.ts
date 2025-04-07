import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppNavComponent } from './app-nav.component';
import { ActivatedRoute } from '@angular/router';

describe('AppNavComponent', () => {
  let component: AppNavComponent;
  let fixture: ComponentFixture<AppNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [{provide: ActivatedRoute, useValue: {}}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
  it('should render toolbar', () => {
    const toolbar = fixture.nativeElement.querySelector('mat-toolbar');
    expect(toolbar).toBeTruthy();
  });
});
