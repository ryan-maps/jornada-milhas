import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';
import { CardBuscaComponent } from './card-busca/card-busca.component';
import { CardDepoimentoComponent } from './card-depoimento/card-depoimento.component';
import { FormBuscaComponent } from './form-busca/form-busca.component';
import { ModalComponent } from './modal/modal.component';
import { BotaoControleComponent } from './botao-controle/botao-controle.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HeaderComponent,
    FooterComponent,
    CardComponent,
    BannerComponent,
    ContainerComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    BannerComponent,
    ContainerComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    ModalComponent,
    BotaoControleComponent
  ]
})
export class SharedModule { }
