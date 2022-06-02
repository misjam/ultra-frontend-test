import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { GiphyService } from '../services/giphy.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PageContentComponent } from './page-content.component';

describe('PageContentComponent', () => {
  let component: PageContentComponent;
  let fixture: ComponentFixture<PageContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageContentComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call GiphyService.init() on component ngOnInit', inject([GiphyService], (giphyService: GiphyService) => {
    spyOn(giphyService, 'init');
    component.ngOnInit();
    expect(giphyService.init).toHaveBeenCalled();
  }));
});
