import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.css'
})
export class CardBuscaComponent {
  @Input() preco!: number;
  @Input() local!: string;
}
