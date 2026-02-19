import { Component } from '@angular/core';
import { MpcCardEventoComponent, MpcTabsComponent, Tab } from 'mpc-lib-angular';

/**
 * Interface that represents a work experience.
 * @interface Job
 */
interface Job {
  titulo: string;
  periodo: string;
  empresa: string;
  atividades: string[];
}

@Component({
  selector: 'experience',
  imports: [MpcCardEventoComponent, MpcTabsComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  /**
   * List of jobs/professional experiences.
   * @type {Job[]}
   */
  protected jobs: Job[] = [];

  /**
   * Available tabs in the career section.
   * @type {Tab[]}
   */
  protected tabs: Tab[] = [
    { id: 'experiencia-profissional', titulo: 'Profissional' },
    { id: 'formacao-academica', titulo: 'Acadêmica' }
  ];

  /**
   * Currently selected tab.
   * @type {Tab | undefined}
   */
  protected selectedTab?: Tab;

  constructor() {
    this.selectedTab = this.tabs[0];

    this.jobs = [
      {
        titulo: 'Recepcionista',
        periodo: '2015 - 2016',
        empresa: 'Medimagem - Clínica de Diagnóstico por Imagem',
        atividades: [
          'Recepção de pacientes',
          'Atendimento ao cliente',
          'Relatórios',
        ],
      },
      {
        titulo: 'Assistente Administrativo (RH)',
        periodo: '2020 - 2023',
        empresa: 'Medcentro - Distribuidora de Produtos Farmacêuticos',
        atividades: [
          'Formalidades de admissão e demissão',
          'Documentação',
          'Controle de processos',
          'Planejamento de recursos humanos',
        ],
      },
      {
        titulo: 'Auxiliar de Gestão Pessoal (RH)',
        periodo: '2023 - Atualmente',
        empresa: 'Destaque do Norte',
        atividades: [
          'Formalidades de admissão e demissão',
          'Documentação',
          'Controle de processos',
          'Planejamento de recursos humanos',
          'Treinamentos',

        ],
      },
    ];

  }
}
