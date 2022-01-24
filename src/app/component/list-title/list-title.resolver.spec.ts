import { TestBed } from '@angular/core/testing';

import { ListTitleResolver } from './list-title.resolver';

describe('ListTitleResolver', () => {
  let resolver: ListTitleResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListTitleResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
