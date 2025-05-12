import { Component, HostListener } from '@angular/core'
import {MatIconModule} from '@angular/material/icon'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-phishing',
  imports: [
    MatIconModule,
    CommonModule
  ],
  templateUrl: './phishing.component.html',
  styleUrl: './phishing.component.css'
})
export class PhishingComponent {

enlaceActivo: string = ''; //variable para almacenar ID de la Seccion Actual activa

  secciones = [
    '#por-que-section',
    '#que-es-section',
    '#como-se-ve',
    '#trampas',
    '#evitar-phishing'
  ];

  //Metodo que escucha el evento de desplazamiento scroll
  @HostListener('window:scroll', [])
  desplazamientoScroll() {
    let encontrado = false; //variable que controla si hay seccion visible

    for (let sectionId of this.secciones) {
      const elemento = document.querySelector(sectionId);
      if (elemento) {
        const seccionActiva = elemento.getBoundingClientRect();
        if (seccionActiva.top <= 100 && seccionActiva.bottom >= 100) {
          this.enlaceActivo = sectionId;
          encontrado = true;
          break;
        }
      }
    }

    // Si no se encontró ninguna sección visible, limpiar activeLink
    if (!encontrado) {
      this.enlaceActivo = '';
    }
  }
}
