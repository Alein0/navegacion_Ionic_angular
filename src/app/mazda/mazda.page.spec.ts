import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MazdaPage } from './mazda.page';

describe('MazdaPage', () => {
  let component: MazdaPage;
  let fixture: ComponentFixture<MazdaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MazdaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
