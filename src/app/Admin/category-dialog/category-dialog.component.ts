import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { Restangular } from 'ngx-restangular';
import {  ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {
	title: string;
	closeBtnName: string;
	actionBtnName: string;
  public category: any = {};
  public form: any;
  public onClose: Subject<boolean>;
  constructor(public bsModalRef: BsModalRef,
    private api: Restangular,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.form = new FormGroup({
      name: new FormControl(this.category.name,[Validators.required])
    });

  }

  onSubmit(){
    if(this.category.id){
      this.api.one('category',this.category.id).customPUT(this.category).subscribe(sub =>{
        if(sub.result){
          this.bsModalRef.hide();
          this.toastrService.success('Update thành công!');
          this.onClose.next(true);
        }
      });
    }else{
      this.api.all('category').customPOST(this.category).subscribe(sub =>{
        console.log(sub);
        if(sub.result){
          this.bsModalRef.hide();
          this.toastrService.success('Thêm thành công!');
          this.onClose.next(true);
        }
      });
    }
  }
}
