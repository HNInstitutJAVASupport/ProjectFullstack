import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeUser } from 'src/app/model/type-user';
import { TypeUserService } from 'src/app/service/type-user.service';

@Component({
  selector: 'app-type-user-form',
  templateUrl: './type-user-form.component.html'
})
export class TypeUserFormComponent implements OnInit {
  typeUser:TypeUser=new TypeUser();
  errormessage!:any;

  constructor(private typeUserService:TypeUserService,
    private activeRoute:ActivatedRoute,private router:Router){}

ngOnInit(){
  this.activeRoute.params.subscribe(params =>{
    let id: number = params['id'];
    if(id){
      this.typeUserService.getTypeUserById(id).
      subscribe(response=>this.typeUser=response)
    }
  })
}
  onSubmit(){
      this.typeUserService.createTypeUser(this.typeUser).
      subscribe(r =>{
        this.router.navigate(['/typeuser'])
      },(error)=>{
        this.errormessage="The Type of User Already Exists"
      });
 
   
  }
}
