import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndNavigationComponent } from './search-and-navigation.component';

describe('SearchAndNavigationComponent', () => {
  let component: SearchAndNavigationComponent;
  let fixture: ComponentFixture<SearchAndNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAndNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
