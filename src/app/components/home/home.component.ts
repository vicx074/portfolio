import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.animateParticles();
  }

  animateParticles(): void {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle: Element) => {
      const htmlElement = particle as HTMLElement;
      // Posições aleatórias para cada partícula
      htmlElement.style.left = `${Math.random() * 100}%`;
      htmlElement.style.top = `${Math.random() * 100}%`;
      // Atraso aleatório nas animações
      htmlElement.style.animationDelay = `${Math.random() * 5}s`;
    });
  }
} 