import { BaseComponent } from './../lib/base-component';
import { Component, OnInit,Injector } from '@angular/core';
import { Observable} from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil'; 


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  list_item:any;
  constructor(injector: Injector) { 
    super(injector);
  }

  ngOnInit(): void {
    
    this._api.get('/api/chude/get-all')
    .takeUntil(this.unsubscribe).subscribe(res => {
      console.log(res);   
      this.list_item=res; 
    })
  }

}
