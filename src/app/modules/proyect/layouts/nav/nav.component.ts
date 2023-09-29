import { Component, HostListener, OnInit } from '@angular/core';
import { every } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  public items:any

  ngOnInit(): void {
    this.onRize()
    this.items = [
      {
        label: 'Dashboard',
        icon: 'fa-solid fa-gauge',
        url:'dashboard'
      },
      {
        label: 'Analytics',
        icon: 'fa-solid fa-chart-simple',
        url:'analytics'
      },
      {
        label: 'Poyects',
        icon: 'fa-solid fa-folder-open',
        url:'task-list'
      },
      {
        label: 'Team',
        icon: 'fa-solid fa-users',
        url:'teams'
      },
      {
        label: 'Friends',
        icon: 'fa-solid fa-users-viewfinder',
        url:'friends'
      },
      
    ];
  }
  
  @HostListener('window:rizise', ['$event'])
  onRize():void{
    const size = window.innerWidth;
    if(size < 580){
      this.toggle()
    }
  }



  toggle(){
    const nav = document.querySelector('nav')
    nav?.classList.toggle('active')
  }

}
