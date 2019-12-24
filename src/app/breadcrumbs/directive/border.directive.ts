import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnInit{

  @Input('appBorder') dateCreation: string;

  ngOnInit() {

    const creationDate = new Date(this.dateCreation);
    const currentDate = new Date();

      if( (creationDate < currentDate) && (creationDate >= new Date(currentDate.setDate(currentDate.getDate() - 14)))) {
        this.renderer.setStyle(this.el.nativeElement, "border-color", "green");

        } else if (creationDate > currentDate) {
          this.renderer.setStyle(this.el.nativeElement, "border-color", "blue");

        } else {
          this.renderer.setStyle(this.el.nativeElement, "border-color", "black");
        }
    }

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }
}
