import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
    this.mensagem()
  }

  mensagem(){
    console.log('Meu componente navbar está inicializado (Estou dentro da função messagem)')
  }

}
