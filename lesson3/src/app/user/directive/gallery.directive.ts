import { Directive, Input, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appGallery]'
})
export class GalleryDirective {
  public imgIndex = 0;

  @Input()
  public imgs: string[];

  constructor(
    public element: ElementRef,
    public renderer: Renderer2
  ) { }

  ngOnInit() {
    console.log(this);
  }

  @HostListener('click')
  public changeImg() {
    this.imgIndex++;
    console.log(this.imgIndex);
    this.renderer.setProperty(this.element.nativeElement, 'src', this.imgs[this.imgIndex % this.imgs.length])
  }

}