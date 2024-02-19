import { TestBed } from '@angular/core/testing';

import { DummyBlogsService } from './dummy-blogs.service';

describe('DummyBlogsService', () => {
  let service: DummyBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
