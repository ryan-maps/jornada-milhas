import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'
import { BotaoControleComponent } from '../botao-controle/botao-controle.component';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    BotaoControleComponent,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

}
