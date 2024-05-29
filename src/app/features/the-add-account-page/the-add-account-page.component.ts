import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

interface CapitalizationRate {
  value: string;
  viewValue: string;
}

interface CapitalizationTime {
  value: string;
  viewValue: string;
}

interface ShareNumber {
  value: string;
  viewValue: string;
}

interface GracePeriod {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-the-add-account-page',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule
  ],
  templateUrl: './the-add-account-page.component.html',
  styleUrl: './the-add-account-page.component.css'
})
export class TheAddAccountPageComponent {
  capitalizationRates: CapitalizationRate[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'}
  ];

  capitalizationTimes: CapitalizationTime[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'}
  ];

  sharesNumber: ShareNumber[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'}
  ];

  gracePeriods: GracePeriod[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'}
  ];
}
