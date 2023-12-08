import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const buttonOptions = {
  'decrementar': {
    src: 'assets/icones/do_not_disturb_on.png',
    alt: 'Operador de subtração'
  },
  'incrementar': {
    src: 'assets/icones/add_circle.png',
    alt: 'Operador de adição'
  },
}

@Component({
  selector: 'app-botao-controle',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './botao-controle.component.html',
  styleUrl: './botao-controle.component.css'
})
export class BotaoControleComponent implements OnInit{
  @Input() operacao!: "decrementar" | "incrementar";
  src: string = '';
  alt: string = '';
  constructor() {

  }
  ngOnInit(): void {
    const buttonOption = buttonOptions[this.operacao];
    this.src = buttonOption.src;
    this.alt = buttonOption.alt;
  }
}
