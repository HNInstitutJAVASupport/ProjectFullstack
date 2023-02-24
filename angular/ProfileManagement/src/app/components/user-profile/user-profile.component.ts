import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeUser } from 'src/app/model/type-user';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { TypeUserService } from 'src/app/service/type-user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  users:User=new User();

  typeUser:TypeUser[]=[];
  constructor(private userService:UserService, private typeUserService:TypeUserService,
    private activeRoute:ActivatedRoute,private router:Router){}

  ngOnInit() {
        this.typeUserService.getTypeUser().subscribe(response =>{
        this.typeUser = response;
        });
       

    this.activeRoute.params.subscribe(params =>{
      let id: number = params['id'];  
        this.userService.getUserById(id).
        subscribe(response=>this.users=response)      
    });
  }
  viewType(opt1:TypeUser,opt2:TypeUser):boolean {
    if(opt1===undefined && opt2===undefined)return true;
    return opt1 === null || opt2 === null || opt1 === undefined || opt2 === undefined ? false: opt1.id === opt2.id;
  }
}
