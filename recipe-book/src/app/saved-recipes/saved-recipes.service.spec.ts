import { TestBed, inject } from '@angular/core/testing';

import { SavedRecipesService } from './saved-recipes.service';

describe('SavedRecipesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedRecipesService]
    });
  });

  it('should be created', inject([SavedRecipesService], (service: SavedRecipesService) => {
    expect(service).toBeTruthy();
  }));
});
