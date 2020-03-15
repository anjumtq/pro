import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {DesignationService} from './DesignationService';
import { Designation } from './Designation';@Component({
  selector: 'app-Designation',
  templateUrl: './Designation.html',
})
export class DesignationComponent implements OnInit {
   formGroup:FormGroup;
   elements:Designation[]; 
 constructor(private DesignationService:DesignationService, ) { }
 ngOnInit() {
 this.formGroup = new FormGroup({"id":new FormControl(), 
"lastName":new FormControl(), 
})
}
public  save(){ let id = this.formGroup.get('id').value;
 let lastName = this.formGroup.get('lastName').value;
let obj:Designation  = new Designation();
obj.id = id
obj.lastName = lastName
this.DesignationService.save(obj).subscribe( 
(data)=>{ 
 console.log(data); 
 this.clear(); 
 this.getAll(); 
 }, 
(data)=>{ console.log(data)} 
       ); }getAll(){ 
this.DesignationService.getAll().subscribe( 
 (data)=>{ 
  console.log(data);
  this.elements = data;
  }, 
 (data)=>{ console.log(data)} 
     );  } getById(id){ 
 console.log(id); 
 this.DesignationService.getById(id).subscribe( 
  (data)=>{   console.log(data);  this.formGroup.get('id').setValue(data['id']);
  this.formGroup.get('lastName').setValue(data['lastName']);
       },
       (data)=>{ 
        console.log(data) 
       } 
     ) 
  } 
 public clear(){ 
 this.formGroup.get('id').setValue(null); 
 this.formGroup.get('lastName').setValue(null); 
}
 public delete(){ 
     let id = this.formGroup.get('id').value;      this.DesignationService.deleteById(id).subscribe(     (data)=>{          console.log(data),         this.clear();          this.getAll();       },       (data)=>{ console.log(data)}      );  } } 
