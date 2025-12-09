import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../../../services/user.service';

@Component({
  selector: 'app-registered-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  users: User[] = [];
  isLoading = true;
  isError = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.users = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error while loading users:', err);
        this.isError = true;
        this.isLoading = false;
      }
    });
  }
}

