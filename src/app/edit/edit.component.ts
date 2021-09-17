import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public Title:any
  public Desc:any
  public status:any
  public msg:string="";

  constructor(private route:ActivatedRoute, private service:CrudService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.route)
    var titleId = this.route.snapshot.params['EditId']
    console.log(titleId)
    this.service.fetchData('task/'+titleId).subscribe((res:any)=>{
      console.log(res);
      this.Title = res['title']
      this.Desc = res['description']
      this.status=res['status']
    }),
    (error:any)=>{
      console.log(error)
    }
  }

  update(a1:any,a2:any,a3:any){
    console.log(a1)
    var obj = {title:a1,description:a2,status:a3,datetime:Date.now()}
    console.log(obj)
    var titleId = this.route.snapshot.params['titleId'] 
  
    this.service.putData('task/'+titleId,obj).subscribe((res:any)=>{
      console.log(res)
      this.router.navigate(['/showtask'])
    }
    ,(err:any)=>{
      console.log(err)
    })

  }
}
