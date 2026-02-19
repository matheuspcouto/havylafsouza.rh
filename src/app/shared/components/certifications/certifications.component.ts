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
      title: 'RH Talks | Liderança & Cultura',
      icon: 'bi bi-people-fill',
      completionDate: 'Outubro - 2023',
    },
    {
      title: 'RH Summit 2023',
      icon: 'bi bi-people-fill',
      completionDate: 'Junho - 2023',
    },
    {
      title: 'RH Talks | Dados e IA',
      icon: 'bi bi-people-fill',
      completionDate: 'Março - 2023',
    },
    {
      title: 'RH Talks | Edição Especial: Gestão Global de Pessoas',
      icon: 'bi bi-people-fill',
      completionDate: 'Outubro - 2022',
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
