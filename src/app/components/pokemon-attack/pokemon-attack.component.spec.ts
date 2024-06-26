import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAttackComponent } from './pokemon-attack.component';

describe('PokemonAttackComponent', () => {
  let component: PokemonAttackComponent;
  let fixture: ComponentFixture<PokemonAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonAttackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
