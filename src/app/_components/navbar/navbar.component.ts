import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { CommonModule, NgClass } from "@angular/common";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule, NgClass, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router){}

  ngOnInit(): void {
  }

  redirecionaCertificadoNovo() {
    this.router.navigate(["/certificados/novo"]);
  }

  redirecionaListaCertificados() {
    this.router.navigate(["/certificados"]);
  }

}
