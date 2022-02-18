import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  cancle(): void {
    this.router.navigateByUrl('#');
  }
  
  formdata=new User();
	  savedata()
      {
       console.log(this.formdata);
      }
}
