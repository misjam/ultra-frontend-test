import { Injectable } from '@angular/core'
import { BehaviorSubject, Subject, switchMap } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http'
import { GiphyData } from '../models/gif'

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  public totalCount = 0
  private API = 'https://api.giphy.com/v1/gifs/search'
  private readonly GIPHY_API_KEY = 'xnAAR5y4xu0T7PmPz3Ki7bZKi3MorJQF'

  private gifSubject = new Subject<GiphyData>()
  public gif$ = this.gifSubject.asObservable()

  private apiParams = new BehaviorSubject({
    page: 0,
    limit: 9,
    searchQueries: ['cat', 'dog'] // Default search
  })

  constructor(
    private http: HttpClient
  ) { }

  init() {
    this.apiParams.pipe(
      switchMap(() => this.http.get<GiphyData>(this.API, {
        params: this.httpParams
      }))
    )
      .subscribe(res => {
        this.gifSubject.next(res)
        this.totalCount = res.pagination.total_count
      })
  }

  searchData(searchQueries: string[]) {
    this.apiParams.next({ ...this.apiParams.value, searchQueries })
  }

  choosePage(page: number) {
    this.apiParams.next({ ...this.apiParams.value, page })
  }

  get httpParams() {
    const httpParams = new HttpParams()
      .append('api_key', this.GIPHY_API_KEY)
      .append('q', this.apiParams.value.searchQueries.join(','))
      .append('limit', this.apiParams.value.limit)
      .append('offset', this.apiParams.value.page)
    return httpParams
  }

  get page() {
    return this.apiParams.value.page
  }

  get limit() {
    return this.apiParams.value.limit
  }
}
