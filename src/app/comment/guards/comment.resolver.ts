import { ResolveFn } from '@angular/router';
import { Comments } from '../comment.interface';
import { inject } from '@angular/core';
import { CommentService } from '../comment.service';


export const commentResolver: ResolveFn<Comments[]> = (route, state) => {
  
  const comService = inject(CommentService);
  return comService.getComments();
};
