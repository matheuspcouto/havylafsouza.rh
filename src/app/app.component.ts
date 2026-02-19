import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { ExperienceComponent } from './shared/components/experience/experience.component';
import { CertificationsComponent } from './shared/components/certifications/certifications.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { SkillsComponent } from './shared/components/skills/skills.component';
import { PageHeaderComponent } from './shared/components/page-header/page-header.component';
import { AboutComponent } from './shared/components/about/about.component';
import { MpcBtnFloatComponent, MpcLoaderComponent, NavbarConfig, MpcNavbarComponent, MpcLoaderService } from 'mpc-lib-angular';
import AOS from 'aos';
import { Routes } from './shared/enums/routes-enum';
import { MpcFooterComponent } from './shared/components/mpc-footer/mpc-footer.component';

@Component({
  selector: 'app-root',
  imports: [
    PageHeaderComponent,
    AboutComponent,
    SkillsComponent,
    CertificationsComponent,
    ExperienceComponent,
    ContactComponent,
    MpcNavbarComponent,
    MpcFooterComponent,
    MpcLoaderComponent,
    MpcBtnFloatComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  /**
   * Initializes the platform identification component.
  */
  private readonly platformId: any = inject(PLATFORM_ID);

  /**
   * Defines the application routes.
   * @type {Router}
   */
  private readonly router: Router = inject(Router);

  /**
   * Controls the application loading state.
   * @type {boolean}
   */
  private readonly loaderService: MpcLoaderService = inject(MpcLoaderService);

  /**
   * Navigation tabs displayed in the navbar.
   * @type {NavbarConfig[]}
   */
  protected tabs: NavbarConfig[] = [
    { id: 'home', titulo: 'Home', rota: Routes.HOME, icone: 'bi bi-house-fill' },
    { id: 'sobre', titulo: 'Sobre', rota: Routes.SOBRE, icone: 'bi bi-person-fill' },
    { id: 'habilidades', titulo: 'Habilidades', rota: Routes.HABILIDADES, icone: 'bi bi-lightning-fill' },
    { id: 'certificacoes', titulo: 'Certificações', rota: Routes.CERTIFICACOES, icone: 'bi bi-award-fill' },
    { id: 'carreira', titulo: 'Carreira', rota: Routes.CARREIRA, icone: 'bi bi-briefcase-fill' },
    { id: 'contato', titulo: 'Contato', rota: Routes.CONTATO, icone: 'bi bi-envelope-fill' },
  ];

  /**
   * Initializes the component and adds listener to control scroll-to-top button visibility.
   * @returns {void}
   */
  ngOnInit(): void {

    this.loaderService.show();

    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    setTimeout(() => this.loaderService.hide(), 2000);
  }

  /**
   * Opens WhatsApp in a new tab for contact.
   * @returns {void}
   */
  protected openWhatsApp(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.open('https://wa.me/556392186293', '_blank');
    }
  }
}
