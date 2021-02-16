import { TestBed } from '@angular/core/testing';

import { RecebedoresService } from './recebedores.service';

describe('RecebedoresService', () => {
  let service: RecebedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecebedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
