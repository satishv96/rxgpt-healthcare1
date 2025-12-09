import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  workingMessage: string | null = null;

  healthTip = "Take a 5-minute walk.";
  tips = [
    "Take a 5-minute walk.",
    "Drink water.",
    "Stretch for 20 seconds.",
    "Relax your eyes.",
    "Do deep breathing."
  ];

  ngOnInit() {
    setInterval(() => {
      this.healthTip = this.tips[Math.floor(Math.random() * this.tips.length)];
    }, 6000);
  }

  showCallMessage() {
    this.showMessage("Calling feature coming soon!");
  }

  working() {
    this.showMessage("Working on it!");
  }

  private showMessage(msg: string) {
    this.workingMessage = msg;
    setTimeout(() => this.workingMessage = null, 3000);
  }
}
