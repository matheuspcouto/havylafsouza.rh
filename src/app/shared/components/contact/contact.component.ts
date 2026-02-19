import { Component } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MpcButtonComponent, MpcInputTextComponent, MpcInputEmailComponent, MpcInputTextAreaComponent } from 'mpc-lib-angular';

/**
 * Component representing the contact section.
 */
@Component({
  selector: 'contact',
  imports: [ReactiveFormsModule, MpcButtonComponent, MpcInputTextComponent, MpcInputEmailComponent, MpcInputTextAreaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  /**
   * Contact form
   */
  protected form = this.formBuilder.group({
    name: [''],
    email: [''],
    message: [''],
  });

  constructor(private formBuilder: NonNullableFormBuilder) {}

  /**
   * Submits the contact form and opens the email client.
   */
  protected submitForm(): void {
    const name = this.form.value.name;
    const email = this.form.value.email;
    const message = this.form.value.message;

    window.open(`mailto:havylaferreira13@gmail.com?subject=Contato de ${name} (${email})&body=${message}`, '_blank');
  }
}
