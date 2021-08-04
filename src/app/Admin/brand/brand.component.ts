import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  public brands: any;
  public filter = {
      name:'',
      phone :'',
      address : '',
      column :'name',
      sort :'desc'
  };
  
  constructor(private api: Restangular,
            ) { }

  ngOnInit() {
    this.getBrands();
  }

  getBrands(){
      this.api.all('brands').customGET("",{
        name: this.filter.name, phone: this.filter.phone, address: this.filter.address, 
        column: this.filter.column, sort: this.filter.sort
      }).subscribe(sub => {
        this.brands = sub.result
      });
      
  }

  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    // this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
  }
}
