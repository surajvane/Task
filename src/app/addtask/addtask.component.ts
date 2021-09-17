import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
public msg:String="";

  constructor(private crud:CrudService) { }

  ngOnInit(): void {
  }
  add_task(t:any,d:any,s:any)
  {var obj={title:t.value,description:d.value,status:s.value,datetime:Date.now()
  }

  
console.log(obj);
this.crud.postData("task",obj).subscribe((res)=>{
this.msg="Task added";
},
(err)=>{

})
  }

}
