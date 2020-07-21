import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


type GuestInfo = {
  name: string;
  selected: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guest-list-todo-like-app';
  
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

  submitName(): void {
    
    this.guestLists.push({name: `${this.firstName} ${this.lastName}`, selected: false});
    this.allGuestsNum = this.guestLists.length;
  
  }

  crossOut(guest: GuestInfo): void {
    
    guest.selected = !guest.selected;
    this.crossedOutGuest = this.guestLists.filter(e => e.selected === true).length;

  }
}
