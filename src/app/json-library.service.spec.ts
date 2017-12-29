import { TestBed, inject } from '@angular/core/testing';

import { JsonLibraryService } from './json-library.service';

describe('JsonLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonLibraryService]
    });
  });

  it('should be created', inject([JsonLibraryService], (service: JsonLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
