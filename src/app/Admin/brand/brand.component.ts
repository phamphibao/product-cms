import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Restangular } from 'ngx-restangular';
import { environment } from 'src/environments/environment';
import { BrandDialogComponent } from '../brand-dialog/brand-dialog.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  ColumnMode = ColumnMode;
  bsModalRef: BsModalRef;
  public brands: any;
  public brand: any;
  public filter = {
      name:'',
      phone :'',
      address : '',
      column :'name',
      sort :'desc'
  };
  public pageSize = 5;
  public count;
  env: string;
  constructor(private api: Restangular,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getBrands();
    this.env = environment.urlfile;
  }

  getBrands(){
      this.api.all('brands').customGET("",{
        name: this.filter.name, phone: this.filter.phone, address: this.filter.address, 
        column: this.filter.column, sort: this.filter.sort
      }).subscribe(sub => {
        this.brands = sub.result
        this.count  = sub.result.length;
        console.log(this.brands);
      });
      
  }

  openModalAddBrand() {
    const initialState = {
        title:  "ADD",
        brand: {}
    };
    this.bsModalRef = this.modalService.show(BrandDialogComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.actionBtnName = 'Add';
    this.bsModalRef.content.onClose.subscribe(result => {
      console.log('results', result);
      if(result){
        this.getBrands();
      }
  })
    
  }
  setPage(){

  }
}
