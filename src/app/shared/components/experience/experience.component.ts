import { Component } from '@angular/core';
import { MpcCardEventoComponent, MpcTabsComponent, Tab } from 'mpc-lib-angular';

/**
 * Interface that represents a work experience.
 * @interface Job
 */
interface Job {
  title: string;
  period: string;
  company: string;
  activities: string[];
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
        title: 'Recepcionista',
        period: 'Dez 2016 - Jan 2018',
        company: 'Medimagem - Clínica de Radiologia e Ultrassonografia',
        activities: [
          'Atendimento ao público e recepção de pacientes',
          'Organização de agenda e controle de atendimentos',
          'Suporte administrativo às rotinas da clínica',
          'Atendimento telefônico e orientação aos pacientes',
          'Organização de documentos e registros de atendimento',
          'Apoio à equipe administrativa',
        ],
      },
      {
        title: 'Assistente Administrativo de RH',
        period: 'Nov 2020 - Mai 2023',
        company: 'Medcentro - Distribuidora de Produtos Farmacêuticos',
        activities: [
          'Suporte às rotinas administrativas do setor de Recursos Humanos',
          'Apoio em processos de Recrutamento e Seleção, incluindo triagem de currículos',
          'Organização e controle de documentação de colaboradores',
          'Apoio em processos admissionais e acompanhamento de integração de novos colaboradores',
          'Atendimento interno a colaboradores e suporte às demandas administrativas',
          'Controle e organização de arquivos físicos e digitais do setor',
          'Apoio na comunicação interna e divulgação de informações institucionais',
          'Suporte às rotinas administrativas gerais da empresa',
        ],
      },
      {
        title: 'Auxiliar de Gestão Pessoal (RH)',
        period: 'Jun 2023 - Atualmente',
        company: 'Destaque do Norte',
        activities: [
          'Apoio nas rotinas de Recursos Humanos',
          'Divulgação de vagas e apoio em processos de Recrutamento e Seleção',
          'Triagem de currículos e suporte no agendamento de entrevistas',
          'Condução de processos admissionais e desligamentos de colaboradores, acompanhamento de integração de novos colaboradores',
          'Atendimento e suporte aos colaboradores para esclarecimento de dúvidas internas',
          'Apoio em processos administrativos e organização de documentos de colaboradores',
          'Criação de cards de divulgação de vagas e comunicados internos',
          'Desenvolvimento de materiais de comunicação interna e endomarketing (datas comemorativas, avisos institucionais e campanhas internas)',
          'Criação de materiais visuais utilizando Canva',
          'Edição de vídeos institucionais e conteúdos para comunicação interna',
        ],
      },
    ];

  }
}
