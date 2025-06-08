import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateParticles();
  }

  animateParticles(): void {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle: Element, index) => {
      const htmlElement = particle as HTMLElement;
      htmlElement.style.left = `${Math.random() * 100}%`;
      htmlElement.style.top = `${Math.random() * 100}%`;
      htmlElement.style.animationDelay = `${Math.random() * 5}s`;
    });
  }

  submitForm(event: Event): void {
    event.preventDefault();
    // Aqui seria implementada a lógica para enviar o formulário
    console.log('Formulário enviado');
    // Resetar o formulário ou mostrar mensagem de sucesso
  }
}
