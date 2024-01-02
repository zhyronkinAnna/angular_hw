import { Component } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {FormsModule} from '@angular/forms'; 
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  amount: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = 'UAH';
  convertedAmount: number | null = null;
  
  currencies = [
    {title: 'USD', rate: 38.13}, 
    {title: 'EUR', rate: 42.08},
    {title: 'CAD', rate: 28.78},
    {title: 'PLN', rate: 9.54}
  ];


  convert(): void {
     
    const currency = this.currencies.find(item => item.title === this.fromCurrency);
    if(currency){
      const conversionRate = currency.rate;
      this.convertedAmount = this.amount * conversionRate;
    }else{
      console.error('Currency not found');
    }
  }
}
