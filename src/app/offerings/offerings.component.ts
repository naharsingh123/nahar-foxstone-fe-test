import { Component, OnInit } from '@angular/core';
import{OfferingsService} from './../service/offerings/offerings.service'

@Component({
  selector: 'app-tabs',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.scss']
})
export class OfferingsComponent implements OnInit {
  offeringsArray:any;
  newArray:any;

  constructor(private offering:OfferingsService) { }

  ngOnInit() {
      this.offering.getOfferings().subscribe(
        (res:any) =>{
         this.offeringsArray=res.offerings;
     
         this.offeringsArray.forEach(element => {
          element.progress=(element.available_to_invest/element.purchase_price)*100
        });
         this.newArray= Object.assign([],this.offeringsArray);
         this.newArray.splice(0,1)

        },
        error => {
          console.log(error);  
      }
    )
  }

}
