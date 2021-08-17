import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { Restangular } from 'ngx-restangular';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-brand-dialog',
	templateUrl: './brand-dialog.component.html',
	styleUrls: ['./brand-dialog.component.css']
})
export class BrandDialogComponent implements OnInit {
	title: string;
	closeBtnName: string;
	actionBtnName: string;
	public brand : any;
	public form;
	public logo_image: any;
	public cover_image: any;
	public logo_image_upload: any;
	public cover_image_upload: any;
	public uploading: true;
	public onClose: Subject<boolean>;
	public env = environment;
	constructor(public bsModalRef: BsModalRef,
		private api: Restangular,
		private toastrService: ToastrService,
		) { }

	ngOnInit() {
		this.onClose = new Subject();
		this.form = new FormGroup({
			name: new FormControl(this.brand.name, [Validators.required]),
			phone: new FormControl(this.brand.phone, []),
			address: new FormControl(this.brand.address, []),
		});
		this.logo_image = this.brand.logo != null ? this.env.urlfile  + this.brand.logo : null;
		this.cover_image = this.brand.cover_image != null ?  this.env.urlfile  +  this.brand.cover_image	 : null;
	}

	onSubmit() {
		if(this.logo_image_upload != null){
			this.brand.logo = this.logo_image_upload;
		}
		if(this.cover_image_upload){
			this.brand.cover_image = this.cover_image_upload;
		}

		if(this.brand.id){
			this.api.one('brands',this.brand.id).customPUT(this.brand).subscribe(sub => {
				console.log(sub);
				if(sub.result){
					this.bsModalRef.hide();
					this.onClose.next(true);
					this.toastrService.success('update success!')
				}
			});
		}else{
			this.api.all('brands').customPOST(this.brand).subscribe(sub => {
				if(sub.result){
					this.bsModalRef.hide();
					this.onClose.next(true);
					this.toastrService.success('add success!')
				}
			});
		}
	}

	onChangeInput(param, input) {
		let me = this;
		let file = param.target.files[0];
		let reader = new FileReader();
		if(input.id == 'logo'){
			document.getElementById('loader_logo').className = "loader active";
		}else if(input.id == 'image_cover'){
			document.getElementById('loader_cover').className = "loader active";
		}
		reader.readAsDataURL(file);
		reader.onload = function () {
			if(input.id == 'logo'){
				document.getElementById('loader_logo').className = "loader";
				me.logo_image = reader.result;
				me.uploadFile(me.logo_image,"logo");
			}else if(input.id == 'image_cover'){
				document.getElementById('loader_cover').className = "loader";
				me.cover_image = reader.result;
				me.uploadFile(me.cover_image,"cover_image");
			}
		};
		reader.onerror = function (error) {
			console.log('Error: ', error);
		};
	}
	uploadFile(param,id) {
		this.api.all('upload').customPOST({ images: param }).subscribe(sub => {
			if (id == 'logo') {
				this.logo_image_upload = sub.result;
				console.log('logo');
				console.log(this.logo_image_upload);
			} else {
				this.cover_image_upload = sub.result;
				console.log('cover');
				console.log(this.cover_image_upload);
			}
		});
	}
}
