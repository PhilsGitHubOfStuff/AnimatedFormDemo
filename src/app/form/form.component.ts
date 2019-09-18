import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class FormComponent implements OnInit {

	fullName: string = "Name";
	descr: string = "Description";
	selectedShow: string = "Succession";
	first: boolean = true;
	second: boolean = false;
	third: boolean = false;
	fourth: boolean = false;
	fState: string = "active";
	sState: string = "";
	tState: string = "";
	tvshows = ['Successon', 'Silicon Valley', 'Mindhunter', 'Other']

  constructor() { }

  ngOnInit() {
	
  }
  
  next(): void {
    this.first = !this.first;
	this.second = !this.second;
	if (this.sState == "active") 
		this.sState = "";
	else
		this.sState = "active";
  }
  
  next2(): void {
	this.second = !this.second;
	this.third = !this.third;
	if (this.tState == "active") 
		this.tState = "";
	else
		this.tState = "active";
  }
  
  finish(): void {
	this.third = !this.third;
	this.fourth = !this.fourth;
  }
  
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedShow = event.target.value;
  }

}
