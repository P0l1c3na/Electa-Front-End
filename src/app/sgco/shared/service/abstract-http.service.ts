import {HttpClient} from '@angular/common/http';
import {delay, take, tap} from 'rxjs/operators';

export class AbstractHttpService<T> {

  constructor(protected  httpClient: HttpClient,
              private API_URL: string) {
  }

  list() {
    return this.httpClient.get<T[]>(this.API_URL)
      .pipe(delay(2000),
        tap(console.log));
  }

  save(record: T) {
    return this.httpClient.post(this.API_URL, record).pipe(take(1));
  }

  delete(id) {
    return this.httpClient.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }

  update(id, record: T) {
    return this.httpClient.put(`${this.API_URL}/${id}`, record).pipe(take(1));
  }

}
