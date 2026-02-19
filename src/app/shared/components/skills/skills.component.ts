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
      icon: 'bi bi-megaphone-fill',
      items: ['Redes Sociais', 'Comunicação Interna e Externa', 'Campanhas Publicitárias', 'Canva'],
    },
    {
      title: 'Administração',
      icon: 'bi bi-briefcase-fill',
      items: ['Gestão de Projetos', 'Organização de Eventos', 'Controle Financeiro', 'Atendimento ao Cliente'],
    },
    {
      title: 'Gestão de pessoas',
      icon: 'bi bi-people-fill',
      items: ['Recrutamento e Seleção', 'Treinamento e Desenvolvimento', 'Avaliação de Desempenho'],
    },
    {
      title: 'Treinamentos',
      icon: 'bi bi-trophy-fill',
      items: ['Planejamento de Treinamentos', 'Execução de Treinamentos', 'Avaliação de Resultados'],
    },
    {
      title: 'Planejamento Estratégico',
      icon: 'bi bi-graph-up-arrow',
      items: ['Análise de Cenários', 'Definição de Metas', 'Monitoramento de Resultados'],
    },
  ];
}
