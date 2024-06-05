import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-the-credit-account-list-page',
  standalone: true,
  imports: [MatPaginator, MatTableModule, MatFormField, MatInputModule, MatButtonModule, MatIcon],
  templateUrl: './the-credit-account-list-page.component.html',
  styleUrl: './the-credit-account-list-page.component.css'
})
export class TheCreditAccountListPageComponent {
  displayedColumns: string[] = ['id', 'client', 'date', 'state', 'debt'];

  applyFilter(event: Event){
    const inputElement = event.target as HTMLInputElement;
    const filteredValue = inputElement.value.replace(/[^a-zA-Z ]/g, ''); //Remueve caractéres no deseados
      inputElement.value = filteredValue;

      this.dataSource.filter = filteredValue.trim().toLowerCase();

      //Regresar al inicio del paginator si se aplica un filtro
      if(this.dataSource.paginator){
        this.dataSource.paginator.firstPage();
      }
    }
}
