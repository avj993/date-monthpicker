import { Component, OnInit } from '@angular/core';
import {ElementRef,TemplateRef,ViewChild,Renderer2} from '@angular/core'
@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
   @ViewChild('calCont',{static: true})
      CalContainer:ElementRef;
   
        currentMonth = new Date().getMonth()+1;
        currentYear = new Date().getFullYear();
        startYear;
        sample=[];
        count=[0,1,2,3,4,5,6,7,8,9,10,11];
        months=['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
        selectedYear;
        selectedMonth;
        toggler:boolean=true;
         constructor(private render:Renderer2) { }
    ngOnInit() {
      console.log(this.currentMonth,this.currentYear);
      this.startYear = this.currentYear - this.currentYear%12;
      this.render.listen(this.CalContainer.nativeElement,'click',(event)=>{
          if(this.toggler){
          this.selectedYear = event.target.innerText;
          this.toggler = !this.toggler;
          }
      })
    }
    goPrev(){
      if(this.startYear != 0){
      this.startYear = this.startYear - 12;
      }
    }
    goNext(){
      this.startYear = this.startYear+12;
    }
}

