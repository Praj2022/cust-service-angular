import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  newChange(): void {
    this.router.navigateByUrl('register');
  }
}
