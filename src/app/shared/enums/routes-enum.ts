export enum RouteSegment {
  HOME = "",
  SOBRE = "sobre",
  HABILIDADES = "habilidades",
  CERTIFICACOES = "certificacoes",
  ARTIGOS = "artigos",
  CARREIRA = "carreira",
  CONTATO = "contato",
}

export enum Routes {
  HOME = `/${RouteSegment.HOME}`,
  SOBRE = `/${RouteSegment.SOBRE}`,
  HABILIDADES = `/${RouteSegment.HABILIDADES}`,
  CERTIFICACOES = `/${RouteSegment.CERTIFICACOES}`,
  CARREIRA = `/${RouteSegment.CARREIRA}`,
  CONTATO = `/${RouteSegment.CONTATO}`,
}
