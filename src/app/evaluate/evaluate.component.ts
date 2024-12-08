
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-evaluate',
  imports:[FormsModule,CommonModule,EvaluateComponent],
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
  
})
export class EvaluateComponent {
  expenses: { name: string; price: number }[] = [];
  expenseName: string = '';
  expensePrice: number | null = null;

  addExpense(): void {
    if (this.expenseName && this.expensePrice !== null) {
      this.expenses.push({ name: this.expenseName, price: this.expensePrice });
      this.expenseName = '';
      this.expensePrice = null;
    }
  }

  getTotalExpense(): number {
    return this.expenses.reduce((sum, expense) => sum + expense.price, 0);
  }
}