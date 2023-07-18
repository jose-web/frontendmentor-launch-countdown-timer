import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';
import particlesjsConfig from '../assets/particlesjs-config.json'; 

declare var particlesJS: any;


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

  dateTo:any

  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.queryParams.subscribe(params=>{
      
      if(params['dateTo']){
        let dateTo = params['dateTo'].split('T')

        let date = dateTo[0]
        let hour = dateTo[1]
  
        this.dateTo = moment(date + ' ' + hour)
      }else{
        this.dateTo = moment().add(2, 'days')
      }
      this.setTimer()
        setInterval(()=>{
          this.setTimer()
        },1000)
    })
  }

  ngOnInit(){
    particlesJS('particles-js', particlesjsConfig, function() {});
  }

  setTimer(){
    let now = moment()

    this.days = this.numberWithZero(this.dateTo.diff(now, 'days'))
    this.hours = this.numberWithZero(this.dateTo.diff(now.add(this.days, 'day'), 'hours'))
    this.minutes = this.numberWithZero(this.dateTo.diff(now.add(this.hours, 'hours'), 'minutes'))
    this.seconds = this.numberWithZero(this.dateTo.diff(now.add(this.minutes, 'minutes'), 'seconds'))
  }

  numberWithZero(number:number):string{
    return number > 9 ? String(number) : '0' + number
  }
}
