import { ComponentFixture } from '@angular/core/testing';
import { inject, TestBed } from '@angular/core/testing'

import { SearchComponent } from './search.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { GiphyService } from 'src/app/services/giphy.service'

describe('SearchComponent', () => {
  let component: SearchComponent
  let fixture: ComponentFixture<SearchComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('Remove search param on removeQuery()', () => {
    component.searchQueries = ['Dog', 'Cat', 'Mouse']
    component.removeQuery('Dog')
    expect(component.searchQueries).toContain('Cat')
    expect(component.searchQueries).toContain('Mouse')
    expect(component.searchQueries).not.toContain('Dog')
  })

  it('Add search query on addSearchQuery()', inject([GiphyService], (giphyService: GiphyService) => {
    spyOn(giphyService, 'searchData')
    component.searchQueries = ['Dog', 'Cat']
    component.searchCtrl.setValue('Mouse')
    component.addSearchQuery()
    expect(component.searchQueries).toContain('Cat')
    expect(component.searchQueries).toContain('Mouse')
    expect(component.searchQueries).toContain('Dog')

    expect(giphyService.searchData).toHaveBeenCalled()
  }))
})
