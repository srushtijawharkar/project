import { sequence } from '@angular/animations';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'project';
  header = 'new Project';
  num =100;
  getarea()
  {
    let num1:number = 10; 
    let num2:number = 20; 
   let add:number;
    add = num1 + num2;
    return add;
   
  }
  getName(name:string)
  {
    alert(name);
    console.warn(name);
  }
  dispvalue:string = '';
   getuname(val:string)
  {
    console.warn(val);
    this.dispvalue = val;
  } 
  count = 0;
  counter(type:string)
  {
    //this.count++
    type ==="add"?this.count++:this.count--
  }
  disable = true;
  name= "srushti";
 
titlenm ="Style binding";
color = "orange";
colorchange()
{
this.color = "maroon";

}
title_form = "User Form";
userdata:any;
getuserdata(data:NgForm)
{
  console.warn(data);
  this.userdata = data;
}
title_name_todo = 'TODO-LIST';
list:any[]=[];
add_task(item1:string)
{

this.list.push({id:this.list.length,name1:item1})
console.warn(this.list);
}
removetask(id:number)
{
  this.list =this.list.filter(item1=>item1.id!==id)
  console.warn(id);
}

main_title = "pass Data  main/parent compoment to child"
data = 10;
updatedata()
{
  this.data= Math.floor(Math.random()*10);

}
child_title = "pass Data  child compoment to parent component";
data1 = "x";
userupdate(item2:string)
{
  console.warn(item2);
  this.data1=item2;

}
}

