import { Component, ViewChild } from '@angular/core';
import { SecondaryButtonComponent } from '../../_components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../../_components/primary-button/primary-button.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../Interfaces/certificado';
import { CertificadoService } from '../../_services/certificado.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-certificado-form',
  imports: [SecondaryButtonComponent, PrimaryButtonComponent, FormsModule, CommonModule],
  templateUrl: './certificado-form.component.html',
  styleUrl: './certificado-form.component.css'
})
export class CertificadoFormComponent {

  constructor(private certificadoService: CertificadoService) {}
  @ViewChild('form') form!: NgForm;

  certificado: Certificado = { id: '', nome: '', atividades: [], dataEmissao: '' };
  atividade: string = '';

  campoInvalido(control: NgModel) {
    return control?.touched && !control?.valid;
  }

  formValido() {
    let temAtividade = this.certificado.atividades.length > 0;
    let nomeValido = !!this.certificado.nome && this.certificado.nome.trim().length > 0;

    return temAtividade && nomeValido;
  }

  adicionarAtividade() {
    if (this.atividade.length === 0) {
      return;
    }
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  submit() {
    if (!this.formValido()) {
      return;
    }
    this.certificado.dataEmissao = this.dataAtual();
    this.certificado.id = uuidv4()
    this.certificadoService.adicionarCertificado(this.certificado);

    this.form.resetForm();
    this.certificado = this.estadoInicialCertificado();
    this.atividade = '';
  }

  dataAtual(): string {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada;
  }

  estadoInicialCertificado(): Certificado {
    return { id: '', nome: '', atividades: [], dataEmissao: '' };
  }
}
