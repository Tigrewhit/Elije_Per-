// INFORMACIÓN OFICIAL DE LAS ELECCIONES GENERALES 2026
// Cronograma Electoral Completo - Extraída de fuentes oficiales: ONPE, JNE, InfoGob
// Fecha de actualización: 16 de noviembre de 2025
// Este cronograma corresponde a las Elecciones Generales en Perú organizadas por etapa del proceso electoral

// =============================================================================
// CRONOGRAMA ELECTORAL OFICIAL POR FASES - ELECCIONES GENERALES 2026
// Fuente: JNE - ONPE - Decreto Supremo de Convocatoria
// =============================================================================

export const CALENDAR_DATA = [
  // =============================================================================
  // I. FASE PRE-ELECTORAL Y AFILIACIONES (2024 - 2025)
  // Esta fase se centra en la preparación de los partidos, el padrón y la convocatoria oficial
  // =============================================================================

  {
    id: 'afiliacion-primarias-2024',
    title: '📋 Fecha Límite para Participar en Elecciones Primarias',
    date: '2024-07-12',
    description: 'Todo ciudadano que desee postular a través de un partido debe estar debidamente afiliado antes de esta fecha.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'afiliacion',
    phase: 'I. Fase Pre-Electoral y Afiliaciones',
    priority: 'high',
    status: 'Completado',
    details: 'Fase preparatoria ya finalizada - Requisito fundamental para candidaturas'
  },

  {
    id: 'renuncia-afiliaciones-2024',
    title: '🚪 Fecha Límite para Renunciar a Afiliaciones',
    date: '2024-12-25',
    description: 'Último día para renunciar a otras afiliaciones políticas para poder ser considerado candidato designado por un partido.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'renuncia',
    phase: 'I. Fase Pre-Electoral y Afiliaciones',
    priority: 'medium',
    status: 'Completado',
    details: 'Proceso completado - Definición de elegibilidad de candidatos'
  },

  {
    id: 'convocatoria-elecciones-2025',
    title: '📢 Convocatoria a Elecciones',
    date: '2025-02-15',
    description: 'El Poder Ejecutivo publica el Decreto Supremo que convoca formalmente a las Elecciones Generales.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'convocatoria',
    phase: 'I. Fase Pre-Electoral y Afiliaciones',
    priority: 'critical',
    status: 'Completado',
    details: 'Convocatoria oficial publicada - Proceso electoral iniciado formalmente'
  },

  {
    id: 'renuncia-candidato-designado-2025',
    title: '⚠️ Fecha Límite para Renunciar como Candidato Designado',
    date: '2025-03-30',
    description: 'Fecha límite para renunciar como candidato designado en caso de conflicto o cambio de decisión.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'renuncia',
    phase: 'I. Fase Pre-Electoral y Afiliaciones',
    priority: 'medium',
    status: 'Completado',
    details: 'Última oportunidad para cambios en designaciones internas'
  },

  {
    id: 'comisiones-electorales-2025',
    title: '🏛️ Inscripción de Comisiones Electorales y Órganos Partidarios',
    date: '2025-05-31',
    description: 'Plazo límite para que las agrupaciones políticas tengan sus Comisiones Electorales y Órganos Partidarios Internos debidamente inscritos en el ROP, demostrando su vigencia institucional.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'organizacional',
    phase: 'I. Fase Pre-Electoral y Afiliaciones',
    priority: 'high',
    status: 'Completado',
    details: 'Requisito institucional cumplido - Partidos habilitados oficialmente'
  },

  {
    id: 'inscripcion-alianzas-2025',
    title: '🤝 Inscripción de Alianzas entre Partidos Políticos',
    date: '2025-06-02',
    description: 'Fecha límite para la inscripción de alianzas entre partidos políticos y para la fiscalización del padrón de afiliados.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'alianzas',
    phase: 'I. Fase Pre-Electoral y Afiliaciones',
    priority: 'high',
    status: 'Completado',
    details: 'Definición final de coaliciones y verificación de padrones'
  },

  {
    id: 'cierre-padron-electoral-2025',
    title: '📊 Cierre del Padrón Electoral',
    date: '2025-09-01',
    description: 'A partir de esta fecha, ya no se consideran cambios de domicilio ni otros datos del DNI para la elaboración del Padrón Electoral que se usará en la votación.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'padron',
    phase: 'I. Fase Pre-Electoral y Afiliaciones',
    priority: 'critical',
    status: 'Completado',
    details: 'Padrón definitivo establecido - 27+ millones de electores habilitados'
  },

  // =============================================================================
  // II. FASE DE CANDIDATURAS Y DEFINICIÓN (2025)
  // Esta fase se enfoca en la selección interna de candidatos y la presentación de sus propuestas
  // =============================================================================

  {
    id: 'revision-padrones-2025',
    title: '🔍 Revisión y Aprobación de Padrones Electorales',
    date: '2025-10-15',
    description: 'Plazos para la revisión y aprobación de padrones electorales por parte del JNE, asegurando que los partidos cumplan con la normativa.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'revision',
    phase: 'II. Fase de Candidaturas y Definición',
    priority: 'high',
    status: 'Completado',
    details: 'Verificación técnica y legal de padrones partidarios'
  },

  {
    id: 'elecciones-internas-2025',
    title: '🗳️ Día de Elecciones Internas',
    date: '2025-11-30',
    description: 'Fecha en la que los partidos definen a sus candidatos (Planchas Presidenciales, Congresistas, Parlamento Andino), siguiendo las modalidades establecidas por la Ley de Organizaciones Políticas (LOP).',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'elecciones-internas',
    phase: 'II. Fase de Candidaturas y Definición',
    priority: 'critical',
    status: 'En proceso',
    details: 'Proceso democrático interno - Definición de candidatos por partido'
  },

  {
    id: 'presentacion-candidaturas-2025',
    title: '📋 Presentación de Candidaturas y Planes de Gobierno',
    date: '2025-12-15',
    description: 'Los partidos deben inscribir formalmente a sus listas y entregar el documento que detalla sus propuestas al JNE.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'inscripcion',
    phase: 'II. Fase de Candidaturas y Definición',
    priority: 'critical',
    status: 'Programado',
    details: 'Inscripción formal de candidatos y propuestas gubernamentales'
  },

  {
    id: 'publicacion-listas-candidatos-2026',
    title: '📰 Publicación de Listas de Candidatos',
    date: '2026-01-01',
    description: 'El JNE publica las listas de candidatos para conocimiento público.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'publicacion',
    phase: 'II. Fase de Candidaturas y Definición',
    priority: 'high',
    status: 'Programado',
    details: 'Transparencia electoral - Listas oficiales disponibles para ciudadanos'
  },

  // =============================================================================
  // III. FASE DE ORGANIZACIÓN Y VOTACIÓN (2026)
  // Esta fase incluye la gestión operativa de la votación, el control de candidatos y el día de las elecciones
  // =============================================================================

  {
    id: 'sorteo-miembros-mesa-2026',
    title: '🎲 Sorteo de Miembros de Mesa (ONPE)',
    date: '2026-02-01',
    description: 'Plazo máximo para que la ONPE realice el sorteo de los ciudadanos que serán Miembros de Mesa y para la resolución de tachas a candidatos.',
    source_url: 'https://eg2026.onpe.gob.pe',
    type: 'organizacional',
    phase: 'III. Fase de Organización y Votación',
    priority: 'critical',
    status: 'Programado',
    details: 'Selección aleatoria de ciudadanos para funciones electorales'
  },

  {
    id: 'exclusion-tachas-2026',
    title: '⚖️ Plazos para Exclusión y Tachas',
    date: '2026-03-15',
    description: 'Se establecen las fechas para la presentación y resolución de tachas (impugnaciones) contra los candidatos y el plazo para el retiro voluntario de listas.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'juridico',
    phase: 'III. Fase de Organización y Votación',
    priority: 'high',
    status: 'Programado',
    details: 'Proceso legal para impugnaciones y verificación de candidaturas'
  },

  {
    id: 'lista-final-candidaturas-2026',
    title: '✅ Publicación de la Lista Final de Candidaturas',
    date: '2026-03-14',
    description: 'Una vez resueltas las tachas, se publica la lista definitiva de postulantes.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'publicacion',
    phase: 'III. Fase de Organización y Votación',
    priority: 'critical',
    status: 'Programado',
    details: 'Lista definitiva tras resolución de impugnaciones'
  },

  {
    id: 'exclusion-final-2026',
    title: '🚫 Fecha Límite para la Exclusión Final',
    date: '2026-04-10',
    description: 'Plazo máximo para la exclusión de un candidato por asuntos de afiliación jurídica u otros impedimentos legales graves.',
    source_url: 'https://portal.jne.gob.pe/portal',
    type: 'exclusion',
    phase: 'III. Fase de Organización y Votación',
    priority: 'high',
    status: 'Programado',
    details: 'Última instancia para exclusiones por impedimentos legales'
  },

  {
    id: 'elecciones-primera-vuelta-2026',
    title: '🗳️ DÍA DE ELECCIONES (Primera Vuelta)',
    date: '2026-04-11',
    description: 'Jornada de votación nacional. Horario: 7:00 AM - 5:00 PM en todo el territorio nacional.',
    source_url: 'https://eg2026.onpe.gob.pe',
    type: 'votacion',
    phase: 'III. Fase de Organización y Votación',
    priority: 'critical',
    status: 'Programado',
    details: '27+ millones de electores habilitados - Elección de Presidente, Congreso y Parlamento Andino'
  },

  {
    id: 'elecciones-segunda-vuelta-2026',
    title: '🗳️ DÍA DE ELECCIONES (Segunda Vuelta)',
    date: '2026-06-07',
    description: 'Se realiza si ningún candidato presidencial obtiene más del 50% de los votos válidos en la primera vuelta.',
    source_url: 'https://eg2026.onpe.gob.pe',
    type: 'votacion',
    phase: 'III. Fase de Organización y Votación',
    priority: 'critical',
    status: 'Programado',
    details: 'Ballotage entre los dos candidatos presidenciales más votados'
  }
]

// =============================================================================
// CANDIDATOS PRESIDENCIALES OFICIALES - ELECCIONES GENERALES 2026
// Información real basada en fuentes oficiales JNE/ONPE
// =============================================================================
export const CANDIDATES_DATA = [
  // Candidatos Presidenciales confirmados para Elecciones Generales 2026
  { 
    id: 1, 
    name: 'Keiko Fujimori', 
    party: 'Fuerza Popular', 
    role: 'Candidata Presidencial', 
    bio: 'Administradora de empresas. Fue Primera Dama del Perú (1994-2000). Ha sido excandidata presidencial en las elecciones de 2011, 2016 y 2021. Líder de Fuerza Popular.', 
    photo_url: '/assets/logos/Keiko-Fujimori.jpg', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-keiko-fp-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Líder histórica de Fuerza Popular con amplia trayectoria política.',
    cv_details: {
      education: ['Administradora de empresas'],
      experience: [
        'Fue Primera Dama del Perú (1994-2000)',
        'Ha sido excandidata presidencial en las elecciones de 2011, 2016 y 2021',
        'Líder de Fuerza Popular (anteriormente Fuerza 2011)',
        'Su carrera política ha estado marcada por la vindicación del legado fujimorista y controversias legales'
      ],
      achievements: [
        'Líder de Fuerza Popular',
        'Experiencia en múltiples campañas presidenciales',
        'Vindicación del legado fujimorista'
      ]
    },
    proposals: [
      {
        title: 'Seguridad Ciudadana y Orden Público',
        description: 'Se enfoca en 11 ejes temáticos que incluyen seguridad ciudadana y orden público.'
      },
      {
        title: 'Lucha contra la Corrupción y la Pobreza',
        description: 'Implementación de mecanismos efectivos para combatir la corrupción y reducir la pobreza.'
      },
      {
        title: 'Mejora de los Servicios Públicos',
        description: 'Modernización y eficiencia en la prestación de servicios públicos básicos.'
      }
    ]
  },
  { 
    id: 2, 
    name: 'Rafael López Aliaga', 
    party: 'Renovación Popular', 
    role: 'Candidato Presidencial', 
    bio: 'Empresario y político. Fue Regidor de la Municipalidad Metropolitana de Lima (2007-2010). Fundó el partido Renovación Popular. Actualmente es el Alcalde de Lima.', 
    photo_url: '/assets/logos/Rafael-Lopez-Aliaga.jpg', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-rafael-rp-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Alcalde de Lima con enfoque conservador y empresarial.',
    cv_details: {
      education: ['Empresario y político'],
      experience: [
        'Fue Regidor de la Municipalidad Metropolitana de Lima (2007-2010)',
        'Fundó el partido Renovación Popular (anteriormente Solidaridad Nacional), siendo su presidente',
        'Actualmente es el Alcalde de Lima'
      ],
      achievements: [
        'Fundación de Renovación Popular',
        'Gestión municipal en Lima Metropolitana',
        'Liderazgo empresarial'
      ]
    },
    proposals: [
      {
        title: 'Fuerte Enfoque en la Seguridad',
        description: 'Su enfoque suele ser de derecha conservadora con énfasis en la seguridad.'
      },
      {
        title: 'Principios de Solidaridad',
        description: 'Alineamiento con valores cristianos en las políticas públicas.'
      }
    ]
  },
  { 
    id: 3, 
    name: 'César Acuña', 
    party: 'Alianza para el Progreso (APP)', 
    role: 'Candidato Presidencial', 
    bio: 'Ingeniero Químico, con Maestrías y Doctorado en Educación. Fundador de varias universidades. Ha sido Congresista, Alcalde de Trujillo y Gobernador Regional de La Libertad.', 
    photo_url: '/assets/logos/cesar-acuña.png', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-cesar-app-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Educador y político con amplia experiencia en gestión regional.',
    cv_details: {
      education: [
        'Ingeniero Químico',
        'Maestrías en Educación',
        'Doctorado en Educación'
      ],
      experience: [
        'Fundador de varias universidades (Universidad César Vallejo, Universidad Señor de Sipán, etc.)',
        'Ha sido Congresista (2000-2006)',
        'Alcalde de Trujillo',
        'Gobernador Regional de La Libertad (actualmente)',
        'Fundador del partido Alianza para el Progreso (APP)'
      ],
      achievements: [
        'Creación de múltiples universidades',
        'Gestión regional exitosa',
        'Liderazgo en educación superior'
      ]
    },
    proposals: [
      {
        title: 'Énfasis en la Educación como Motor de Cambio',
        description: 'Su mensaje se centra en la acción y el poder de la educación como motor de cambio.'
      },
      {
        title: 'Empleo y Desarrollo para las Regiones',
        description: 'Generación de empleo y desarrollo equilibrado en todas las regiones del país.'
      },
      {
        title: 'Experiencia en Gestión de Obras y Proyectos',
        description: 'Experiencia comprobada en gestión de obras y proyectos a nivel regional.'
      }
    ]
  },
  { 
    id: 4, 
    name: 'Alfredo Barnechea', 
    party: 'Acción Popular', 
    role: 'Precandidato Presidencial', 
    bio: 'Escritor, periodista y político. Fue Diputado de la República por el APRA (1985-1990). Postuló a la Alcaldía de Lima en 1983. Fue candidato presidencial por Acción Popular en 2016.', 
    photo_url: '/assets/logos/Alfredo-Barnechea.jfif', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-alfredo-ap-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Escritor, periodista y político con amplia trayectoria.',
    cv_details: {
      education: ['Periodismo y Literatura'],
      experience: [
        'Fue Diputado de la República por el APRA (1985-1990)',
        'Postuló a la Alcaldía de Lima en 1983',
        'Fue candidato presidencial por Acción Popular en 2016',
        'Ha sido asesor de figuras políticas importantes como Mario Vargas Llosa y Javier Pérez de Cuéllar'
      ],
      achievements: [
        'Asesor de importantes figuras políticas',
        'Candidato presidencial 2016',
        'Amplia trayectoria en periodismo'
      ]
    },
    proposals: [
      {
        title: 'Desarrollo y Economía Nacional',
        description: 'Tradicionalmente se enfoca en temas de desarrollo y economía nacional, con una visión de centro.'
      }
    ]
  },
  { 
    id: 5, 
    name: 'Fernando Olivera', 
    party: 'Frente de la Esperanza', 
    role: 'Precandidato Presidencial', 
    bio: 'Nació en Lima. Ha sido Excongresista y excandidato presidencial en varias ocasiones. Su trayectoria política ha estado fuertemente asociada a la lucha contra la corrupción.', 
    photo_url: '/assets/logos/Fernando-Olivera.jfif', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-fernando-fe-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Político veterano con enfoque anticorrupción.',
    cv_details: {
      education: ['Nació en Lima'],
      experience: [
        'Ha sido Excongresista',
        'Excandidato presidencial en varias ocasiones'
      ],
      achievements: [
        'Trayectoria política fuertemente asociada a la lucha contra la corrupción'
      ]
    },
    proposals: [
      {
        title: 'Lucha contra la Corrupción',
        description: 'Su trayectoria política ha estado fuertemente asociada a la lucha contra la corrupción.'
      }
    ]
  },
  { 
    id: 6, 
    name: 'Jorge Forsyth', 
    party: 'Somos Perú', 
    role: 'Precandidato Presidencial', 
    bio: 'Exfutbolista. Fue Alcalde de La Victoria. Ha postulado previamente a la presidencia y a la alcaldía de Lima.', 
    photo_url: '/assets/logos/George-Forsyth.jpg', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-jorge-sp-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Ex deportista con experiencia en gestión municipal.',
    cv_details: {
      education: ['Exfutbolista'],
      experience: [
        'Fue Alcalde de La Victoria',
        'Ha postulado previamente a la presidencia',
        'Ha postulado previamente a la alcaldía de Lima'
      ],
      achievements: [
        'Gestión reconocida en La Victoria',
        'Experiencia deportiva profesional'
      ]
    },
    proposals: [
      {
        title: 'Seguridad Ciudadana',
        description: 'Suelen centrarse en temas de gestión local y seguridad: Seguridad Ciudadana ("agarrar choro y meterlo adentro").'
      },
      {
        title: 'Mejora de Servicios Urbanos',
        description: 'Mejora de servicios urbanos (ej. agua potable).'
      },
      {
        title: 'Lucha contra la Impunidad',
        description: 'Lucha contra la impunidad con módulos de justicia rápida.'
      }
    ]
  },
  { 
    id: 7, 
    name: 'Carlos Antonio Anderson', 
    party: 'Unidos por el Perú (ex Podemos Perú)', 
    role: 'Precandidato Presidencial', 
    bio: 'Economista, banquero y columnista. Congresista de la República (2021-2026). Fue presidente de CEPLAN. Estudios en la London School of Economics y diploma de Harvard.', 
    photo_url: '/assets/logos/Carlos-anderson.jfif', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-carlos-upp-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Economista con formación internacional y experiencia técnica.',
    cv_details: {
      education: [
        'Economista, banquero y columnista',
        'Estudios en la London School of Economics',
        'Diploma de Harvard'
      ],
      experience: [
        'Congresista de la República (2021-2026)',
        'Fue presidente de CEPLAN (Centro Nacional de Planeamiento Estratégico)'
      ],
      achievements: [
        'Formación académica internacional',
        'Experiencia en planificación estratégica',
        'Trayectoria en el sector financiero'
      ]
    },
    proposals: [
      {
        title: 'Énfasis en la Estabilidad Fiscal',
        description: 'Su mensaje es técnico y económico: énfasis en la estabilidad fiscal y contención de proyectos populistas.'
      },
      {
        title: 'Enfoque en el Futuro y Planificación Económica',
        description: 'Un enfoque en el futuro y la planificación económica.'
      }
    ]
  },
  { 
    id: 8, 
    name: 'Guido Bellido', 
    party: 'Perú Libre', 
    role: 'Precandidato Presidencial', 
    bio: 'Ingeniero. Congresista de la República (2021-2026). Fue Presidente del Consejo de Ministros (Premier) durante el gobierno de Pedro Castillo. Ha sido Secretario General Regional de Perú Libre en Cusco.', 
    photo_url: '/assets/logos/Guido-Bellido.jfif', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-guido-pl-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Ex Premier con experiencia en el Ejecutivo.',
    cv_details: {
      education: ['Ingeniero'],
      experience: [
        'Congresista de la República (2021-2026)',
        'Fue Presidente del Consejo de Ministros (Premier) durante el gobierno de Pedro Castillo',
        'Ha sido Secretario General Regional de Perú Libre en Cusco'
      ],
      achievements: [
        'Experiencia en el Poder Ejecutivo como Premier',
        'Liderazgo regional en Perú Libre',
        'Experiencia legislativa'
      ]
    },
    proposals: [
      {
        title: 'Énfasis en el Rol del Estado en la Economía',
        description: 'Al ser parte de Perú Libre, sus propuestas suelen alinearse con la ideología de izquierda y con énfasis en el rol del Estado en la economía.'
      },
      {
        title: 'Cambios Estructurales o Constitucionales',
        description: 'Cambios estructurales o constitucionales.'
      }
    ],
  },
  { 
    id: 9, 
    name: 'Rosario Fernández', 
    party: 'Por Un Camino Diferente', 
    role: 'Precandidato Presidencial', 
    bio: 'Abogada especializada en Derecho Civil, Procesal Civil y Derecho Administrativo. Exministra de Justicia. Ha sido procuradora Ad Hoc de la Municipalidad de Lima.', 
    photo_url: '/assets/logos/rosario-fernandez.jpg', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-rosario-pcd-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Especialista en derecho con experiencia ministerial.',
    cv_details: {
      education: ['Abogada especializada en Derecho Civil, Procesal Civil y Derecho Administrativo'],
      experience: [
        'Exministra de Justicia',
        'Ha sido procuradora Ad Hoc de la Municipalidad de Lima'
      ],
      achievements: [
        'Especializada en reforma judicial',
        'Experiencia en el sector público',
        'Conocimiento en administración pública'
      ]
    },
    proposals: [
      {
        title: 'Reforma de la Justicia',
        description: 'Por su trayectoria, se esperaría un enfoque en la Reforma de la Justicia.'
      },
      {
        title: 'Estado de Derecho',
        description: 'Fortalecimiento del Estado de Derecho.'
      },
      {
        title: 'Administración Pública',
        description: 'Mejora de la Administración Pública.'
      }
    ]
  },
  { 
    id: 10, 
    name: 'Rafael Belaúnde Llosa', 
    party: 'Libertad Popular', 
    role: 'Precandidato Presidencial', 
    bio: 'Economista, empresario y consultor. Exministro de Energía y Minas (julio - agosto 2020). Nieto del expresidente Fernando Belaúnde Terry. Fundador y presidente del partido Libertad Popular.', 
    photo_url: '/assets/logos/Rafael-Belaúnde-Llosa.jpg', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-rafael-lp-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Economista y empresario con legado familiar político.',
    cv_details: {
      education: ['Economista, empresario y consultor'],
      experience: [
        'Exministro de Energía y Minas (julio - agosto 2020)',
        'Fundador y presidente del partido Libertad Popular'
      ],
      achievements: [
        'Nieto del expresidente Fernando Belaúnde Terry',
        'Experiencia ministerial',
        'Fundación de nuevo partido político'
      ]
    },
    proposals: [
      {
        title: 'Políticas de Desarrollo Liberal',
        description: 'Al fundar un nuevo partido, su enfoque se orienta a políticas de desarrollo, posiblemente con una perspectiva liberal o de centro-derecha.'
      }
    ]
  },
  { 
    id: 11, 
    name: 'Alfonso López Chau', 
    party: 'Ahora Nación', 
    role: 'Precandidato Presidencial', 
    bio: 'Académico, ingeniero y economista. Fue Rector de la Universidad Nacional de Ingeniería (UNI). Fue director del Banco Central de Reserva del Perú (2006-2012). Líder del partido Ahora Nación.', 
    photo_url: '/assets/logos/Alfonso-López-Chau.jfif', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-alfonso-an-2026', 
    proposals_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar',
    notes: 'Académico y economista con amplia experiencia.',
    cv_details: {
      education: ['Académico, ingeniero y economista'],
      experience: [
        'Fue Rector de la Universidad Nacional de Ingeniería (UNI)',
        'Fue director del Banco Central de Reserva del Perú (2006-2012)',
        'Líder del partido Ahora Nación'
      ],
      achievements: [
        'Liderazgo académico en la UNI',
        'Experiencia en política monetaria',
        'Fundación de partido político'
      ]
    },
    proposals: [
      {
        title: 'Pacto Histórico entre Partidos Políticos',
        description: 'Su mensaje es de centro-izquierda, con gran énfasis en pacto histórico entre partidos políticos para enfrentar grandes problemas.'
      },
      {
        title: 'Inversión en Salud, Educación y Desarrollo Tecnológico',
        description: 'Inversión fuerte en Salud, Educación y desarrollo Tecnológico.'
      },
      {
        title: 'Nueva Constitución',
        description: 'Propone una nueva Constitución o una actualización de la de 1979, manteniendo la economía social de mercado.'
      }
    ]
  },
  // Candidatos al Senado - Muestra representativa
  { 
    id: 5, 
    name: 'Patricia Ramos', 
    party: 'Renovación Popular', 
    role: 'Senadora', 
    region: 'Lima', 
    bio: 'Abogada constitucionalista y ex presidenta del Colegio de Abogados de Lima. Es probable que sus propuestas se centren en reformas constitucionales y el sistema de justicia.', 
    photo_url: '/assets/logos/Patricia-Ramos.jpg', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-cand-sen-1',
    cv_details: {
      education: ['Abogada constitucionalista'],
      experience: [
        'Ex presidenta del Colegio de Abogados de Lima'
      ],
      achievements: [
        'Liderazgo en el Colegio de Abogados',
        'Especialista en derecho constitucional'
      ]
    },
    proposals: [ 
      {sector:'Justicia', title:'Reformas Constitucionales', description:'Sus propuestas se centren en reformas constitucionales y el sistema de justicia.'} 
    ], 
    activities: [ 
      {date:'2025-11-19', title:'Foro sobre reforma judicial'} 
    ] 
  },
  { 
    id: 6, 
    name: 'Jorge Huamán', 
    party: 'Perú Libre', 
    role: 'Senador', 
    region: 'Cusco', 
    bio: 'Profesor universitario, especialista en desarrollo rural y políticas agrarias. Es probable que sus propuestas se centren en el sector agrario, el desarrollo regional y la educación.', 
    photo_url: '/assets/logos/Jorge-Huamán.jpeg', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-cand-sen-2',
    cv_details: {
      education: ['Profesor universitario'],
      experience: [
        'Especialista en desarrollo rural y políticas agrarias'
      ],
      achievements: [
        'Especialización en desarrollo rural',
        'Experiencia académica'
      ]
    },
    proposals: [ 
      {sector:'Agricultura', title:'Desarrollo Rural y Políticas Agrarias', description:'Sus propuestas se centren en el sector agrario, el desarrollo regional y la educación.'} 
    ], 
    activities: [ 
      {date:'2025-11-17', title:'Asamblea de comunidades campesinas'} 
    ] 
  },
  // Candidatos a Diputados - Muestra representativa 
  { 
    id: 7, 
    name: 'Miguel Torres', 
    party: 'Alianza para el Progreso', 
    role: 'Diputado', 
    region: 'La Libertad', 
    bio: 'Médico cirujano, especialista en salud pública y ex director regional de salud. Sus propuestas seguramente se enfocarán en salud pública, gestión sanitaria y el sistema de salud.', 
    photo_url: '/assets/logos/Miguel-Torres.jfif', 
    cv_url: 'https://plataformaelectoral.jne.gob.pe/candidatos/plan-gobierno-trabajo/buscar', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-cand-dip-1',
    cv_details: {
      education: ['Médico cirujano, especialista en salud pública'],
      experience: [
        'Ex director regional de salud'
      ],
      achievements: [
        'Especialización en salud pública',
        'Experiencia en gestión sanitaria'
      ]
    },
    proposals: [ 
      {sector:'Salud', title:'Salud Pública y Gestión Sanitaria', description:'Sus propuestas se enfocarán en salud pública, gestión sanitaria y el sistema de salud.'} 
    ], 
    activities: [ 
      {date:'2025-11-21', title:'Campaña de salud preventiva'} 
    ] 
  },
  { 
    id: 8, 
    name: 'Carmen Solís', 
    party: 'Fuerza Popular', 
    role: 'Diputado', 
    region: 'Arequipa', 
    bio: 'Ingeniera industrial, especialista en gestión empresarial y desarrollo económico.', 
    photo_url: '/photos/carmen_solis.jpg', 
    cv_url: '/docs/carmen_solis_cv.pdf', 
    source_url: 'https://portal.jne.gob.pe/portal', 
    parsed_hash: 'hash-cand-dip-2', 
    proposals: [ 
      {sector:'Industria', title:'Parques Industriales Regionales', description:'Desarrollo de zonas industriales especializadas en cada región.'} 
    ], 
    activities: [ 
      {date:'2025-11-23', title:'Reunión con empresarios manufactureros'} 
    ] 
  }
]

// =============================================================================
// PARTIDOS POLÍTICOS OFICIALES (Con datos reales de ROP-JNE)
// =============================================================================
export const PARTIES_DATA = [
  { 
    id: 1, 
    name: 'Fuerza Popular', 
    abbreviation: 'FP', 
    description: 'Partido político inscrito para EG 2026. Realizó elecciones primarias confirmadas por ONPE (RG-13-2025-GOECOR). Modalidad: delegados', 
    logo_url: '/logos/fuerza_popular.png', 
    source_url: 'https://www.gob.pe/institucion/onpe/normas-legales/7169059-rg-13-2025-goecor', 
    parsed_hash: 'hash-party-fp', 
    primary_status: 'confirmada', 
    primary_mode: 'delegados' 
  },
  { 
    id: 2, 
    name: 'Perú Libre', 
    abbreviation: 'PL', 
    description: 'Partido Político Nacional Perú Libre inscrito para EG 2026. Elecciones primarias confirmadas por ONPE (RG-42-2025-GOECOR). Modalidad: delegados', 
    logo_url: '/logos/peru_libre.png', 
    source_url: 'https://www.gob.pe/institucion/onpe/normas-legales/7201382-rg-42-2025-goecor', 
    parsed_hash: 'hash-party-pl', 
    primary_status: 'confirmada', 
    primary_mode: 'delegados' 
  },
  { 
    id: 3, 
    name: 'Acción Popular', 
    abbreviation: 'AP', 
    description: 'Partido inscrito para EG 2026. Elecciones primarias confirmadas por ONPE (RG-4-2025-GOECOR). Modalidad: delegados', 
    logo_url: '/logos/accion_popular.png', 
    source_url: 'https://www.gob.pe/institucion/onpe/normas-legales/7169041-rg-4-2025-goecor', 
    parsed_hash: 'hash-party-ap', 
    primary_status: 'confirmada', 
    primary_mode: 'delegados' 
  },
  { 
    id: 4, 
    name: 'Partido Morado', 
    abbreviation: 'PM', 
    description: 'Partido inscrito para EG 2026. Elecciones primarias confirmadas por ONPE (RG-47-2025-GOECOR). Modalidad: delegados', 
    logo_url: '/logos/partido_morado.png', 
    source_url: 'https://www.gob.pe/institucion/onpe/normas-legales/7285885-rg-47-2025-goecor', 
    parsed_hash: 'hash-party-pm', 
    primary_status: 'confirmada', 
    primary_mode: 'delegados' 
  },
  { 
    id: 5, 
    name: 'Podemos Perú', 
    abbreviation: 'PP', 
    description: 'Partido inscrito para EG 2026. Elecciones primarias confirmadas por ONPE (RG-15-2025-GOECOR). Modalidad: delegados', 
    logo_url: '/logos/podemos_peru.png', 
    source_url: 'https://www.gob.pe/institucion/onpe/normas-legales/7169061-rg-15-2025-goecor', 
    parsed_hash: 'hash-party-pp', 
    primary_status: 'confirmada', 
    primary_mode: 'delegados' 
  },
  { 
    id: 6, 
    name: 'Partido Aprista Peruano', 
    abbreviation: 'PAP', 
    description: 'Partido Aprista Peruano inscrito para EG 2026. Elecciones primarias confirmadas por ONPE (RG-26-2025-GOECOR). Modalidad: afiliados', 
    logo_url: '/logos/partido_aprista.png', 
    source_url: 'https://www.gob.pe/institucion/onpe/normas-legales/7169079-rg-26-2025-goecor', 
    parsed_hash: 'hash-party-pap', 
    primary_status: 'confirmada', 
    primary_mode: 'afiliados' 
  },
  { 
    id: 7, 
    name: 'Alianza Unidad Nacional', 
    abbreviation: 'AUN', 
    description: 'Alianza electoral inscrita para EG 2026. Elecciones primarias confirmadas por ONPE (RG-34-2025-GOECOR). Modalidad: delegados', 
    logo_url: '/logos/alianza_unidad.png', 
    source_url: 'https://www.gob.pe/institucion/onpe/normas-legales/7169095-rg-34-2025-goecor', 
    parsed_hash: 'hash-party-aun', 
    primary_status: 'confirmada', 
    primary_mode: 'delegados' 
  },
  { 
    id: 8, 
    name: 'Ciudadanos por el Perú', 
    abbreviation: 'CPP', 
    description: 'Partido Ciudadanos por el Perú inscrito para EG 2026. Elecciones primarias confirmadas por ONPE (RG-37-2025-GOECOR). Modalidad: delegados', 
    logo_url: '/logos/ciudadanos_peru.png', 
    source_url: 'https://www.gob.pe/institucion/onpe/normas-legales/7188610-rg-37-2025-goecor', 
    parsed_hash: 'hash-party-cpp', 
    primary_status: 'confirmada', 
    primary_mode: 'delegados' 
  }
]