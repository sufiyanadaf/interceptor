import { Component } from '@angular/core';
import { ApisharedService } from './apishared/apishared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interceptor';

  constructor(private api : ApisharedService){}
  ngOnInit(){
    this.recieveInformation()
  }
  recieveInformation(){
    this.api.getInfromation().subscribe((Response:any)=>{
      console.log(Response)
    })
  }
}
