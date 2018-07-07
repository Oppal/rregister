import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/register';
import { RegisterService } from '../services/register.service';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

public file_src: string='../assets/iconworkout.png';

  constructor(private router:Router,
   private registerService:RegisterService){}

  ngOnInit() {
  }

model = new Register ();

addRegister(){

this.registerService
  .addRegister(this.model)
  .subscribe(response =>{console.log(response);
  
  })


}


goBack(){

  this.router.navigate(['/home']);
}



}
