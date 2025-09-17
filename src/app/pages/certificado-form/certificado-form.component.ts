import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {
  nome: string = '';
  atividade: string = '';
  atividades: string[] = ['Angular', 'React'];

  campoInvalido(control: NgModel) {
    return control.touched && !control.valid;
  }

  formValido() {
    let temAtividade = this.atividade.length > 0;
    let nomeValido = this.nome.trim().length > 0;

    return temAtividade && nomeValido;
  }

  adicionarAtividade() {
    this.atividades.push(this.atividade);
  }

  excluirAtividade(index: number) {
    this.atividades.splice(index, 1);
  }
}
