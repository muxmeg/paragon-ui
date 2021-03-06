import {AfterContentInit, Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
  selector: "[appScrollDown]"
})
export class ScrollDownDirective implements AfterContentInit {
  public el: any;
  public isLocked: boolean;
  public observer: MutationObserver;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }
  @HostListener("scroll") onScroll() {
    this.isLocked = this.el.scrollHeight > 700 ? this.el.scrollTop < this.el.scrollHeight / 3 : false;
  }

  ngAfterContentInit() {
    this.el.scrollTop = this.el.scrollHeight;

    this.observer = new MutationObserver((mutations) => {
      if ( !this.isLocked ) {
        this.el.scrollTop = this.el.scrollHeight;
      }
      console.log(this.el.scrollTop + "   ====   " + this.el.scrollHeight / 3);
    });

    this.observer.observe(this.el, { childList: true, subtree: true });
  }
}
