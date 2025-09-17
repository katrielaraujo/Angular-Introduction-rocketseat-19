import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit(): void {
    this.mensagem()
  }

  mensagem(){
    console.log('Meu componente navbar está inicializado (Estou dentro da função messagem)')
  }

  redirecionaCertificadoNovo() {
    this.router.navigate(["/certificados/novo"]);
  }

  redirecionaListaCertificados() {
    this.router.navigate(["/certificados"]);
  }

}
