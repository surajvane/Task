import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';


@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {
  public result:any;
  public progress:any=[];
  public complete:any=[];

  constructor(private crud:CrudService) { }
  openTask(abc:any){
  
    this.crud.fetchData('Task'+abc).subscribe((res:any)=>{
      this.result=res;
     
    
    },
    (err)=>{
  console.log(err);
    })
  }
  progressTask(abc:any){
    
    this.crud.fetchData('Task'+abc).subscribe((res:any)=>{
      this.progress=res;
     
    
    },
    (err)=>{
  console.log(err);
    })
  }
  completeTask(abc:any){
    
    this.crud.fetchData('Task'+abc).subscribe((res:any)=>{
      this.complete=res;
     
    
    },
    (err)=>{
  console.log(err);
    })
  }
  ngOnInit(): void { 
    this.openTask("?status=1");
    this.progressTask("?status=2");
    this.completeTask("?status=3");
  }
  onItemDrag(Dragitem:any) {
   
  var obj=Dragitem.target.attributes.for.value.split('#'); 
  console.log("fromdrag")
  console.log(obj); 
  localStorage.setItem("title",obj[0]);
  localStorage.setItem("description",obj[1]);
  localStorage.setItem("status",obj[2]);
  localStorage.setItem("datetime",obj[3]);
  localStorage.setItem("id",obj[4]);
 
  console.log(Dragitem.target);
  }
  
  
  onItemDrop(Dropitem:any) { 
    var t=this.progress.push(Dropitem.dragData);
    console.log("drg data "+Dropitem.dragData);
    console.log(this.progress)
    console.log(this.result);

   
    this.result.splice(this.result.indexOf(Dropitem.dragData),1);
      console.log(this.result);

      localStorage.setItem("status","2");
      var obj={
        title:localStorage.getItem("title"),
        description:localStorage.getItem("description"),
        status:localStorage.getItem("status"),
        datetime:localStorage.getItem("datetime"),
        id:localStorage.getItem("id")
      }
      console.log(obj)
      console.log("collection name");
      console.log(`Task?id=${obj.id}`,obj);
      
      this.crud.putData(`Task/${obj.id}`,obj).subscribe(
        (response:any)=>{
      console.log(response);
    },
     (err:any)=>{
      console.log(err);

    })   
}
  
  onItemDropComplete(DropComplete:any) {
    this.complete.push(DropComplete.dragData);
    var position=this.result.indexOf(DropComplete.dragData);
    this.result.splice(position,1);
    console.log(this.result);
    console.log(DropComplete.dragData);
    console.log(this.complete);
    localStorage.setItem("status","3");
    var obj={
      title:localStorage.getItem("title"),
      description:localStorage.getItem("description"),
      status:localStorage.getItem("status"),
      datetime:localStorage.getItem("datetime"),
      id:localStorage.getItem("id")
    }
    console.log(obj)
    
    this.crud.putData("Task/"+obj.id,obj).subscribe((res:any)=>{
        console.log(res);
    },(error:any)=>{

    })
  } 
 
}
