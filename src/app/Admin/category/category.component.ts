import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Restangular } from 'ngx-restangular';
import { ToastrService } from 'ngx-toastr';
import { CategoryDialogComponent } from '../category-dialog/category-dialog.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categories: any;
  public filter = {
    name:""
  }

  ColumnMode = ColumnMode;
  bsModalRef: BsModalRef;
  constructor(private api: Restangular,
    private modalService: BsModalService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.api.all('category').customGET('',{name: this.filter.name }).subscribe(sub => {
        this.categories = sub.result;
    });
  }
  openModalAddBrand(){
    const initialState = {
        title:  "ADD",
        category: {}
    };
      this.bsModalRef = this.modalService.show(CategoryDialogComponent, {initialState});
      this.bsModalRef.content.closeBtnName = 'Close';
      this.bsModalRef.content.actionBtnName = 'Add';
      this.bsModalRef.content.onClose.subscribe(result => {
        if(result){
          this.getCategories();
            }
        })
  }
  onEdit(param){
    const initialState = {
      title:  "Edit",
      category: param
    };
    this.bsModalRef = this.modalService.show(CategoryDialogComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.actionBtnName = 'Update';
    this.bsModalRef.content.onClose.subscribe(result => {
      if(result){
        this.getCategories();
          }
      })
  }
  onDelete(param){
    this.api.one('category',param.id).customDELETE().subscribe(sub => {
        console.log(sub);
        if(sub.result){
          this.toastrService.success('Xóa thành công!!');
        }
    });

  }

  onSearch(){
    this.getCategories();
  }
  onReset(){
    this.filter = {
      name: ""
    };
    this.getCategories();
  }
}
