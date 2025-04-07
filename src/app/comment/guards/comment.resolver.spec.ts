import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { commentResolver } from './comment.resolver';
import { Comments } from '../comment.interface';

describe('commentResolver', () => {
  const executeResolver: ResolveFn<Comments[]> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => commentResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
