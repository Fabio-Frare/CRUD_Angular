import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myFor]',
  standalone: false
})
export class ForDirective  implements OnInit {

    constructor() {

  }

  ngOnInit(): void {
    
  }

}
