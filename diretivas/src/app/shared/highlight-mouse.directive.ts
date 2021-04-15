import { Directive, HostListener, HostBinding/*, ElementRef, Renderer2 */} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  @HostListener('mouseover') onMouseOver() {
    this.background = 'yellow';

    // this.background = 'yellow';

    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background = 'transparent';

    // this.background = 'transparent';

    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
  }

  @HostBinding('style.backgroundColor') background: string;
  // @HostBinding('style.backgroundColor') get getColor() {
  //   return this.backgroundColor;
  // }

  // @HostBinding('style.backgroundColor') set defineColor(value: string) {
  //   this.backgroundColor = value;
  // }

  // private backgroundColor: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) { }

}
