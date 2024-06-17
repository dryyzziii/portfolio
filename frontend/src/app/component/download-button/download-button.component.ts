import { NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-download-button',
  templateUrl: './download-button.component.html',
  standalone: true,
  imports: [LottieComponent, NgIf, NgStyle],
  styleUrls: ['./download-button.component.scss']
})
export class DownloadButtonComponent {
  @Input() text: string = "";
  @Input() link: string = "";
  @Input() linkName?: string = "";
  @Input() svgLink: string = "";
  @Input() width?: string = "250px"; // Ajout de la propriété width
  @Input() color?: string = ""; // Ajout de la propriété color
  constructor() { }

  downloadFile() {
    const link = document.createElement('a');
    link.href = this.link;
    if (this.linkName) {
      link.download = this.linkName;
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
