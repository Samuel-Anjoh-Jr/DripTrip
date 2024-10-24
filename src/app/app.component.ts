import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public title = 'DripTrip';

  constructor() {
    this.title = 'DripTrip';
  }

  public ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
