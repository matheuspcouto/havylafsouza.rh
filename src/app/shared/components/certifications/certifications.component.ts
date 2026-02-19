import { Component } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { MpcButtonComponent, MpcCardMenuComponent } from 'mpc-lib-angular';

/**
 * Interface representing a certification with its title, icon, completion date, and URL.
 */
export interface Certification {
  title: string;
  icon: string;
  completionDate: string;
  url?: string;
}

/**
 * Component representing the certifications section.
 */
@Component({
  selector: 'certifications',
  imports: [MpcButtonComponent, MpcCardMenuComponent, SlicePipe],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {

  /**
   * List of certifications.
   */
  protected certifications: Certification[] = [
    {
      title: 'Recursos Humanos - Gestão de Pessoas',
      icon: 'fa-users',
      completionDate: '2024',
      url: 'https://drive.google.com/file/d/1VIqOr6c6BV9s2fpMxW5hP2DtTWoR5y0N/view?usp=sharing'
    },
    {
      title: 'Recursos Humanos - Green Belt',
      icon: 'fa-certificate',
      completionDate: '2024',
      url: 'https://drive.google.com/file/d/1tNOWTuZp9H-oVDV9-X0bEvyMpDFkI68p/view?usp=sharing'
    },
    {
      title: 'Processos de Recrutamento e Seleção',
      icon: 'fa-user-check',
      completionDate: '2024',
      url: 'https://drive.google.com/file/d/19wqI7qO8i1_HKZBJn5owXCyBXy_y2SyB/view?usp=sharing'
    },
    {
      title: 'Liderança e Gestão de Equipe',
      icon: 'fa-user-tie',
      completionDate: '2024',
      url: 'https://drive.google.com/file/d/1SJbPz6yF4I2y0Pox5KIYSMlN5dQcyJGD/view?usp=sharing'
    },
  ];

  /**
   * Current index of the certifications being displayed.
   */
  protected certificateIndex: number = 3;

  /**
   * Increases the index to show more certifications.
   */
  protected increaseCertificateIndex(): void {
    this.certificateIndex += 3;
  }

  /**
   * Navigates to the certification URL.
   * @param url The URL to navigate to.
   */
  protected goToCertificate(url: string | undefined): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
