import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EvaluateComponent } from "./evaluate/evaluate.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EvaluateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Expense-Tracker';
}
