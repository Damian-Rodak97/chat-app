import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails;

  constructor(private router: Router, private serive: UserService) { }
  public rooms: Array<string>;
  public selectedRoom: number;

  ngOnInit(): void {
    this.rooms = new Array<string>();
    this.rooms.push('room0');
    this.selectedRoom = 0;
    this.serive.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);

  }

  addRoom(): void {
    this.rooms.push('room');
  }

  selectRoom(roomNumber: number): void {
    this.selectedRoom = roomNumber;
  }
}
