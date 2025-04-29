import { Directive, ElementRef, Input, HostListener, Renderer2, Signal, signal, effect, computed } from '@angular/core';

@Directive({
  selector: '[textClamp]',
  standalone: true,
  exportAs: 'textClamp'
})
export class TextClampDirective {
  private isExpanded = signal(false);
  private isOverflowing = signal(false);

  @Input() textClampLines = 3;
  readonly expanded = computed(() => this.isExpanded());
  readonly overflowing = computed(() => this.isOverflowing());

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.checkOverflow();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkOverflow();
  }

  toggle() {
    this.isExpanded.update(v => !v);
    this.updateStyles();
  }

  private checkOverflow() {
    const element = this.el.nativeElement as HTMLElement;

    // Temporarily remove clamping to check
    this.renderer.setStyle(element, '-webkit-line-clamp', 'unset');
    this.renderer.setStyle(element, 'display', 'block');
    this.renderer.setStyle(element, 'overflow', 'visible');

    this.isOverflowing.set(element.scrollHeight > element.clientHeight);

    this.updateStyles();
  }

  private updateStyles() {
    const element = this.el.nativeElement as HTMLElement;
    if (this.isExpanded()) {
      this.renderer.setStyle(element, '-webkit-line-clamp', 'unset');
      this.renderer.setStyle(element, 'display', 'block');
      this.renderer.setStyle(element, 'overflow', 'visible');
    } else {
      this.renderer.setStyle(element, 'display', '-webkit-box');
      this.renderer.setStyle(element, '-webkit-line-clamp', this.textClampLines.toString());
      this.renderer.setStyle(element, '-webkit-box-orient', 'vertical');
      this.renderer.setStyle(element, 'overflow', 'hidden');
      this.renderer.setStyle(element, 'text-overflow', 'ellipsis');
    }
  }
}
