import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Technology {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  technologies: Technology[] = [
    {
      name: 'TypeScript',
      description: 'TypeScript é uma linguagem de programação fortemente tipada baseada em JavaScript. Utilizo TypeScript pela segurança de tipos que oferece durante o desenvolvimento, permitindo criar aplicações mais robustas e reduzir bugs antes mesmo da execução do código.',
      icon: 'assets/typescript-icon-svgrepo-com.svg'
    },
    {
      name: 'React / Next.js',
      description: 'React é uma biblioteca JavaScript para criar interfaces de usuário, enquanto Next.js é um framework React que oferece renderização do lado do servidor e geração de sites estáticos, melhorando o SEO e a performance.',
      icon: 'assets/react-svgrepo-com.svg'
    },
    {
      name: 'Angular',
      description: 'Angular é um framework de desenvolvimento de aplicações web mantido pelo Google. Utilizo Angular para construir aplicações de página única (SPAs) complexas e escaláveis com uma arquitetura bem definida.',
      icon: 'assets/angular-svgrepo-com.svg'
    },
    {
      name: 'Python / Flask',
      description: 'Python é uma linguagem de programação versátil e poderosa. Com Flask, um microframework para desenvolvimento web em Python, crio APIs RESTful e back-ends de forma rápida e eficiente.',
      icon: 'assets/python-svgrepo-com.svg'
    },
    {
      name: 'PostgreSQL',
      description: 'PostgreSQL é um sistema de gerenciamento de banco de dados objeto-relacional de código aberto com uma forte reputação de confiabilidade, robustez de recursos e desempenho.',
      icon: 'assets/pgsql-svgrepo-com.svg'
    },
    {
      name: 'Git',
      description: 'Git é um sistema de controle de versão distribuído, usado para rastrear alterações no código-fonte durante o desenvolvimento de software. É essencial para o trabalho em equipe e para manter um histórico de versões do projeto.',
      icon: 'assets/git-svgrepo-com.svg'
    }
  ];

  selectedTechnology: Technology = this.technologies[0];

  selectTechnology(technology: Technology) {
    this.selectedTechnology = technology;
  }
}
