import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.scss'
})
export class ProjetComponent {
@Input() image: string
@Input() text: string

constructor() {
  this.image =""
  this.text = ""
}

}
