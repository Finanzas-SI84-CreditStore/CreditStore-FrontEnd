import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from "../../../../public/components/navbar/navbar.component";

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    standalone: true,
    styleUrls: ['./add-customer.component.css'],
    imports: [
        FormsModule,
        NavbarComponent
    ]
})
export class AddCustomerComponent {
  client: Client = {
    name: '',
    lastName: '',
    dni: '',
    birthDate: new Date(),
    address: '',
    paymentDay: 0,
    creditLine: 0
  };

  constructor(private clientService: ClientService) { }

  onSubmit() {
    const userId = '1f39b2df-b4e3-446e-ad1a-6922d4b7a235'; // Utiliza el userId proporcionado
    this.clientService.createClient(userId, this.client).subscribe(
      response => {
        console.log('Cliente creado exitosamente:', response);
        // Realiza acciones adicionales después de crear el cliente, como mostrar un mensaje de éxito o redirigir a otra página
        alert('Cliente creado exitosamente');
      },
      error => {
        console.error('Error al crear el cliente:', error);
        // Maneja el error de forma adecuada, como mostrar un mensaje de error al usuario
        alert('Error al crear el cliente');
      }
    );
  }
}
