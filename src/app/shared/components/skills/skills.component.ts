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
      title: 'Recrutamento & Seleção',
      icon: 'bi bi-person-check-fill',
      items: ['Divulgação de Vagas', 'Triagem de Currículos', 'Agendamento de Entrevistas', 'Condução de Processos Seletivos', 'R&S Operacional'],
    },
    {
      title: 'Admissão & Desligamento',
      icon: 'bi bi-file-earmark-person-fill',
      items: ['Admissão de Colaboradores', 'Desligamento de Colaboradores', 'Onboarding & Integração', 'Organização de Documentação', 'Controle de Arquivos de RH'],
    },
    {
      title: 'Gestão de Pessoas',
      icon: 'bi bi-people-fill',
      items: ['Treinamento & Desenvolvimento', 'Avaliação de Resultados', 'Experiência do Colaborador', 'Engajamento de Equipes'],
    },
    {
      title: 'Marketing & Comunicação',
      icon: 'bi bi-megaphone-fill',
      items: ['Campanhas Internas', 'Comunicados Institucionais', 'Canva', 'CapCut', 'Criação de Cards, Banners e Vídeos', 'Endomarketing'],
    },
    {
      title: 'Rotinas Administrativas',
      icon: 'bi bi-briefcase-fill',
      items: ['Pacote Office', 'Secullum Ponto', 'Controle Financeiro', 'Organização de Eventos', 'Atendimento ao Colaborador', 'Controle de Documentos'],
    },
    {
      title: 'Gestão de Processos',
      icon: 'bi bi-graph-up-arrow',
      items: ['Análise de Cenários', 'Definição de Metas', 'Monitoramento de Resultados', 'Melhoria de Processos', 'Planejamento Estratégico'],
    },
  ];
}
