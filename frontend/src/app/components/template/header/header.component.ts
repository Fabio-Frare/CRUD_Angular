import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  
  constructor(private headerService: HeaderService) {  }

  ngOnInit(): void {
    
  }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get routerUrl(): string {
    return this.headerService.headerData.routerUrl;
  }

}
