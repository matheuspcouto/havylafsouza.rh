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
    window.open('https://www.canva.com/design/DAGNTsZF9ZA/SlHnN155fRL0kkNLUhE2Xw/view', '_blank');
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
