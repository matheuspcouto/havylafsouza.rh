import { Component } from '@angular/core';

/**
 * Interface representing a skill with its title, icon, and list of items.
 */
export interface Skill {
  title: string;
  icon: string;
  items: string[];
}

/**
 * Component representing the skills section.
 */
@Component({
  selector: 'skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  /**
   * List of skills.
   */
  protected skills: Skill[] = [
    {
      title: 'Marketing',
      icon: 'fa-chart-line',
      items: [
        'Planejamento de Campanhas',
        'Endomarketing',
        'Análise de métricas',
        'Branding',
      ],
    },
    {
      title: 'Administração',
      icon: 'fa-briefcase',
      items: [
        'Gestão de Processos',
        'Planejamento Financeiro',
        'Análise de Dados',
        'Gestão de Projetos',
      ],
    },
    {
      title: 'Gestão de pessoas',
      icon: 'fa-users',
      items: [
        'Recrutamento e Seleção',
        'Treinamento e Desenvolvimento',
        'Avaliação de Desempenho',
        'Gestão de Conflitos',
      ],
    },
    {
      title: 'Treinamentos',
      icon: 'fa-chalkboard-teacher',
      items: [
        'Desenvolvimento de Líderes',
        'Capacitação Técnica',
        'Programas de Integração',
        'Coaching e Mentoria',
      ],
    },
    {
      title: 'Planejamento Estratégico',
      icon: 'fa-chess',
      items: [
        'Análise SWOT',
        'Definição de Metas',
        'Planejamento de Recursos',
        'Monitoramento de KPIs',
      ],
    },
  ];
}
