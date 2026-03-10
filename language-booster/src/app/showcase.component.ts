import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DatePickerModule } from 'primeng/datepicker';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    CardModule,
    TableModule,
    DatePickerModule,
    ToastModule
  ],
  templateUrl: './showcase.component.html',
  styles: [`
    .container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    .field {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: bold;
    }
    .w-full {
      width: 100%;
    }
  `]
})
export class ShowcaseComponent {
  textValue: string = '';
  dateValue: Date | null = null;
  
  products = [
    { code: 'f230fh203', name: 'Bamboo Watch', category: 'Accessories', quantity: 24 },
    { code: 'nvkl2430', name: 'Black Watch', category: 'Accessories', quantity: 61 },
    { code: 'zz21cz3c1', name: 'Blue Band', category: 'Fitness', quantity: 2 },
    { code: '244wxb733', name: 'Blue T-Shirt', category: 'Clothing', quantity: 25 },
    { code: 'j64643u82', name: 'Bracelet', category: 'Accessories', quantity: 73 }
  ];

  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'PrimeNG is working!', life: 3000 });
  }
}
