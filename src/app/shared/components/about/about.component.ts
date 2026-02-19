import { Component } from '@angular/core';
import { MpcButtonComponent } from 'mpc-lib-angular';

/**
 * Component representing the about section.
 */
@Component({
  selector: 'about',
  imports: [MpcButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  /**
   * Current age based on the birth date.
   */
  protected age: number;

  constructor() {
    // Birth date
    const birthDate: string = '1998-10-13';

    // Calculate the age
    this.age = this.calculateAge(birthDate);
  }

  /**
   * Opens the PDF resume in Portuguese in a new tab.
   */
  protected viewResumePT(): void {
    window.open(
      'https://www.canva.com/design/DAF7hN6Kh4s/RiDR0EZZX71Gq-8_J5YCEA/view?utm_content=DAF7hN6Kh4s&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      '_blank'
    );
  }

  /**
   * Calculates the age based on the birth date.
   * @param birthDate Birth date in the format 'YYYY-MM-DD'.
   * @returns Current age.
   */
  private calculateAge(birthDate: string): number {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }
}
