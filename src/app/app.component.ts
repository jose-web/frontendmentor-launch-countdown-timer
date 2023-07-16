import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  days = '00'
  hours = '00'
  minutes = '00'
  seconds = '00'

  date = new Date(0,0,0,0,0)

  ngOnInit(){
    
    setInterval(()=>{
      this.date.setSeconds(this.date.getSeconds() +1)
      this.setTimer()
    },1000)
    
  }

  setTimer(){
    this.days = this.numberWithZero(this.date.getDay())
    this.hours = this.numberWithZero(this.date.getHours())
    this.minutes = this.numberWithZero(this.date.getMinutes())
    this.seconds = this.numberWithZero(this.date.getSeconds())
  }

  numberWithZero(number:number):string{
    return number > 9 ? String(number) : '0' + number
  }
}
