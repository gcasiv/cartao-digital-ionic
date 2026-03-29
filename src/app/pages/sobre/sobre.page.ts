import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
} from '@ionic/angular/standalone';
import { AppNavFooterComponent } from '../../components/app-nav-footer/app-nav-footer.component';

/**
 * Tela “Sobre mim” — frame Figma **6:149** (“MOBILE - Tela Secundária 'Sobre mim' - 2”).
 * Hierarquia: avatar + ID → cartão biografia → cartão projeto → rodapé (sem app bar no design).
 */
@Component({
  selector: 'app-sobre',
  templateUrl: 'sobre.page.html',
  styleUrls: ['sobre.page.scss'],
  standalone: true,
  imports: [RouterLink, NgFor, IonContent, IonCard, IonCardContent, IonAvatar, IonButton, IonIcon, AppNavFooterComponent],
})
export class SobrePage {
  readonly fotoUrl = 'assets/minha-foto.jpg';

  readonly idAcademico = '25103371';

  /**
   * Texto do segundo cartão (“Cartão sobre o Projeto”) — copiado do conteúdo do Figma.
   * Dividido em parágrafos para leitura e espaçamento semelhantes ao layout.
   */
  readonly textoProjeto: readonly string[] = [
    'Este trabalho tem como objetivo desenvolver uma aplicação mobile simples utilizando o framework Ionic, com foco na criação de um Cartão Digital de Identificação.',
    'A proposta consiste em apresentar, em uma tela inicial, informações básicas do aluno, como nome, turma e foto, além de permitir a navegação para uma segunda tela contendo uma breve descrição pessoal.',
    'A aplicação deve ser executada no navegador por meio do comando "ionic serve", demonstrando o funcionamento das telas e da navegação entre elas.',
    'Além do desenvolvimento do aplicativo, também é necessário publicar o código no GitHub e elaborar um documento em PDF contendo as informações do aluno, o link do repositório e capturas de tela da aplicação em funcionamento.',
  ];
}
