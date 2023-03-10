import { Component, OnInit } from '@angular/core';
import { TypeUser } from 'src/app/model/type-user';
import { TypeUserService } from 'src/app/service/type-user.service';

@Component({
  selector: 'app-type-user-list',
  templateUrl: './type-user-list.component.html'
})
export class TypeUserListComponent implements OnInit {
  TypeUser:TypeUser[]=[];

  errormessage!:any;

  notFound:string="No Type of User found in the Database. Please add a Type of User."
  
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  constructor(private typeUserService:TypeUserService){}

  ngOnInit() {
    this.typeUserService.getTypeUser().subscribe(response=>{
      this.TypeUser=response;
    });
  }
  
  deleteType(id:number){
    this.typeUserService.deleteType(id).subscribe(response=>{
      this.TypeUser=this.TypeUser.filter(type=>type.id!=id)
    },(error)=>{
      this.errormessage="Cannot delete this Type of User because there are users associated with it."
    })
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
  }
}
