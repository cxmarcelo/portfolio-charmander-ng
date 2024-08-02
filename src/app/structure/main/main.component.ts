import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  title = 'portfolio-charmander-ng';

  particles: any[] = [];

  ngOnInit(): void {
    this.createParticles(200); // Ajuste o número de partículas conforme necessário
  }

  createParticles(count: number): void {
    for (let i = 0; i < count; i++) {
      this.particles.push({});
    }
  }


}
