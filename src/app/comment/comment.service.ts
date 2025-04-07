import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from './comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }
  http: HttpClient = inject(HttpClient);

  getComments(): Observable<Comments[]> {
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
