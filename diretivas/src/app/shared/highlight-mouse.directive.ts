import { Directive, HostListener, HostBinding, Input, OnInit/*, ElementRef, Renderer2 */} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightMouseDirective implements OnInit {
  @HostListener('mouseover') onMouseOver() {
    this.background = this.highlightColor;

    // this.background = 'yellow';

    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background = this.defaultColor;

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


  @Input('highlight') highlightColor: string = 'yellow';
  @Input() defaultColor: string = 'transparent';

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) { }


  ngOnInit(): void {
    this.background = this.defaultColor;
  }

}
