import { Component } from '@angular/core';
import {LogoScreenComponent} from "../../../../public/components/logo-screen/logo-screen.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-create-new-password-page',
  standalone: true,
  imports: [LogoScreenComponent, MatFormFieldModule, MatButtonModule, MatInputModule, RouterModule, MatIconModule],
  templateUrl: './create-new-password-page.component.html',
  styleUrl: './create-new-password-page.component.css'
})
export class CreateNewPasswordPageComponent {

}
