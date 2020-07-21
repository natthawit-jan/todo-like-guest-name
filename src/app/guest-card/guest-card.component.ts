import { Component, OnInit } from '@angular/core';
import {GuestInfo} from '../guestType'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-guest-card',
  templateUrl: './guest-card.component.html',
  styleUrls: ['./guest-card.component.css']
})
export class GuestCardComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['']
  })
  guestLists: Array<GuestInfo> = [];
  
  allGuestsNum = 0;
  crossedOutGuest = 0;

  get firstName() {
    return this.profileForm.value.firstName
  }
  get lastName() {
    return this.profileForm.value.lastName
  }

  constructor(private fb: FormBuilder) {

  }
  ngOnInit(): void {
    
  }

  submitName(): void {
    
    this.guestLists.push({name: `${this.firstName} ${this.lastName}`, selected: false});
    this.allGuestsNum = this.guestLists.length;
  
  }

  crossOut(guest: GuestInfo): void {
    
    guest.selected = !guest.selected;
    this.crossedOutGuest = this.guestLists.filter(e => e.selected === true).length;

  }

}
