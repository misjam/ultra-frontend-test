import { ComponentFixture } from '@angular/core/testing';
import { inject, TestBed } from '@angular/core/testing'
import { GiphyService } from 'src/app/services/giphy.service'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { GifsGridComponent } from './gifs-grid.component'

describe('GifsGridComponent', () => {
  let component: GifsGridComponent
  let fixture: ComponentFixture<GifsGridComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GifsGridComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(GifsGridComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should call GiphyService.init() on component ngOnInit', inject([GiphyService], (giphyService: GiphyService) => {
    spyOn(giphyService, 'choosePage')
    component.onPageChange(1)
    expect(giphyService.choosePage).toHaveBeenCalled()
  }))
})
