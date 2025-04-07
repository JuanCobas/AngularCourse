import { ElementRef, Renderer2 } from '@angular/core';
import { HoverDirective } from './hover.directive';

describe('HoverDirective', () => {

  let elementRefMock: ElementRef;
  let rendererMock: Renderer2;

  beforeEach(() => {
    elementRefMock = new ElementRef(document.createElement('div'));
    rendererMock = jasmine.createSpyObj('Renderer2', ['setStyle']);
  });


  it('should create an instance', () => {
    const directive = new HoverDirective(elementRefMock,rendererMock);
    expect(directive).toBeTruthy();
  });
});
