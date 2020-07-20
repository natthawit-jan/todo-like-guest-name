import { Component } from '@angular/core';


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
  firstname = "";
  lastname = "";
  guestLists: Array<GuestInfo> = [];
  err = 0;
  allGuestsNum = 0;
  crossedOutGuest = 0;

  submitName(): void {
    if (/\s/.test(this.firstname) || this.firstname === "") {
      // It has only spaces, or is empty
      this.err =1;
      return;
    } 
    this.err = 0;
    this.allGuestsNum += 1;
    this.guestLists.push({name: `${this.firstname} ${this.lastname}`, selected: false});

    console.log(this.guestLists);
    
  }

  crossOut(guest: GuestInfo): void {
    
    console.log(guest);
    if (guest.selected) {
      this.crossedOutGuest -= 1;
      guest.selected = false;
    } else {
      this.crossedOutGuest += 1;
      guest.selected = true;

    }

  }
}
