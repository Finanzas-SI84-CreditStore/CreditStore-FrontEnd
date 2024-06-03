import { Component } from '@angular/core';
import {LogoScreenComponent} from "../../../../public/components/logo-screen/logo-screen.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-recover-code-page',
  standalone: true,
  imports: [LogoScreenComponent, MatFormFieldModule, MatButtonModule, MatInputModule, RouterModule, MatIconModule],
  templateUrl: './recover-code-page.component.html',
  styleUrl: './recover-code-page.component.css'
})
export class RecoverCodePageComponent {

}
