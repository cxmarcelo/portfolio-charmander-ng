import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokeball',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokeball.component.html',
  styleUrl: './pokeball.component.scss'
})
export class PokeballComponent {

  @Input() portfolio: any;

  open = false;

  toggleDoors() {
    this.open = !this.open;
  }


}
