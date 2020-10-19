import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {

  items:any;
  total:any;
  public donhangForm: FormGroup;

  constructor(injector: Injector) {
    super(injector);
   }

   ngOnInit(): void {
    this.donhangForm = new FormGroup({
      ho_ten: new FormControl('', Validators.required),
      dia_chi: new FormControl(''),
      so_dien_thoai : new FormControl(''),      
    });

    this._cart.items.subscribe((res) => {
      this.items = res;
      this.total = 0;
      for(let x of this.items){ 
        x.so_luong = +x.quantity;
        x.money = x.quantity * x.giaBan;
        this.total += x.quantity * x.giaBan;
      } 
    });
  }

  onSubmit(value: any) {
    let donhang = {
      ho_ten: value.ho_ten,
       dia_chi: value.dia_chi,
       so_dien_thoai: +value.so_dien_thoai,
       listjson_chitiet:this.items
      };
    this._api.post('/api/donhang/themDH', donhang).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Tạo thành công');
       }, err => { });      
 
  }

}

