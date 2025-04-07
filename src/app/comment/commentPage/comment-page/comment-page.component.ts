import { Component, inject, OnInit } from '@angular/core';
import { CommentService } from '../../comment.service';
import { map, Observable, pluck } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Comments } from '../../comment.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-page',
  imports: [CommonModule],
  templateUrl: './comment-page.component.html',
  styleUrl: './comment-page.component.css'
})
export class CommentPageComponent implements OnInit {
  commentService: CommentService = inject(CommentService);
  activatedRouter = inject(ActivatedRoute);

  //comments$: Observable<Comments[]> = this.commentService.getComments()
  comment$: Observable<Comments[]> = this.activatedRouter.data.pipe(map(data => data['comments']))

  ngOnInit(): void {
      this.activatedRouter.data.subscribe(data => console.log(data['comments']))

  }
}
