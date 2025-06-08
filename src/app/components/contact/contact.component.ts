import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  isSubmitting = false;
  formMessage = '';
  formSuccess = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.animateParticles();
  }

  animateParticles(): void {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle: Element) => {
      const htmlElement = particle as HTMLElement;
      htmlElement.style.animationDelay = `${Math.random() * 5}s`;
    });
  }

  submitForm(event: Event) {
    event.preventDefault();
    
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    this.formMessage = '';
    
    // URL do backend Flask (ajuste conforme necessário)
    const backendUrl = 'http://localhost:5000/send-email';
    
    this.http.post(backendUrl, this.formData)
      .subscribe({
        next: (response: any) => {
          this.formSuccess = true;
          this.formMessage = 'Mensagem enviada com sucesso!';
          this.resetForm();
          this.isSubmitting = false;
        },
        error: (error) => {
          console.error('Erro ao enviar mensagem:', error);
          this.formSuccess = false;
          this.formMessage = 'Erro ao enviar mensagem. Por favor, tente novamente.';
          this.isSubmitting = false;
        }
      });
  }
  
  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
