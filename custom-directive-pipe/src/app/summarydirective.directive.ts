import { Directive, ElementRef, Renderer, Inject, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appSummarydirective]'
})
export class SummarydirectiveDirective implements OnInit {
oldText= '';
 @Input() appSummarydirective: number;

 @HostListener('click') onMyClick() {
   console.log('Clicked !!!');
   this.eleRef.nativeElement.innerText = this.oldText;
   if (this.eleRef.nativeElement.innerText.length < 24) {
     this.eleRef.nativeElement.innerText = this.oldText.substring(0, this.appSummarydirective) + '...';
   }
   console.log(this.eleRef.nativeElement.innerText.length);
 }
  constructor(@Inject(ElementRef) private eleRef: ElementRef,
    @Inject(Renderer) private render: Renderer) {
      this.appSummarydirective = 10;
    }

    ngOnInit() {
      console.log(this.eleRef.nativeElement.innerText);
      console.log(this.appSummarydirective);
      if (this.oldText.length === 0) {
        this.oldText = this.eleRef.nativeElement.innerText;
      }
      let oldText: string;
      oldText = this.eleRef.nativeElement.innerText;
      this.eleRef.nativeElement.innerText = oldText.substring(0, this.appSummarydirective) + '...';
    }

}
