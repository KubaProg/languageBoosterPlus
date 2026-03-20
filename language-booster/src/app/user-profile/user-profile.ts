import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { CheckboxModule } from 'primeng/checkbox';

interface UserProfileForm {
  username: FormControl<string>;
  email: FormControl<string>;
  level: FormControl<string | null>;
  dailyGoal: FormControl<number>;
  studyTime: FormControl<any>;
  notifications: FormControl<boolean>;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    SelectModule,
    InputNumberModule,
    DatePickerModule,
    CheckboxModule,
    JsonPipe
  ],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  form: FormGroup<UserProfileForm>;

  levels = [
    { label: 'Beginner', value: 'beginner' },
    { label: 'Intermediate', value: 'intermediate' },
    { label: 'Advanced', value: 'advanced' }
  ];

  constructor(private fb: FormBuilder) {
    // Inicjalizujemy godzinę jako obiekt Date, co PrimeNG lubi najbardziej
    const defaultTime = new Date();
    defaultTime.setHours(10, 0, 0, 0);

    this.form = this.fb.nonNullable.group<UserProfileForm>({
      username: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
      level: this.fb.control<string | null>(null),
      dailyGoal: this.fb.nonNullable.control(30, [Validators.required, Validators.min(5), Validators.max(120)]),
      studyTime: this.fb.nonNullable.control(defaultTime, [Validators.required, studyTimeValidator()]),
      notifications: this.fb.nonNullable.control(false),
    });
  }
}

export function studyTimeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;

    let hour: number | null = null;

    if (value instanceof Date) {
      hour = value.getHours();
    } else if (typeof value === 'number') {
      hour = new Date(value).getHours();
    } else if (typeof value === 'string') {
      const parts = value.split(':');
      if (parts.length > 0) {
        hour = parseInt(parts[0], 10);
      }
    }

    if (hour === null || isNaN(hour)) return null;
    
    const isValid = hour >= 6 && hour <= 23;
    return !isValid ? { studyTimeInvalid: { actual: hour } } : null;
  };
}
