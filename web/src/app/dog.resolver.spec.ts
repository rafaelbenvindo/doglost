import { TestBed } from '@angular/core/testing';

import { DogResolver } from './dog.resolver';

describe('DogResolver', () => {
  let resolver: DogResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DogResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
