// DATOS ADICIONALES PARA LA APLICACIÓN ELECTORAL
// Centros de votación, servicios y información complementaria

export const POLLING_STATIONS_DATA = [
  { 
    id: 1, 
    name: 'I.E. Ricardo Palma', 
    address: 'Jr. Huancavelica 485, Cercado de Lima', 
    lat: -12.0464, 
    lng: -77.0428, 
    district:'Lima', 
    province:'Lima', 
    region:'Lima', 
    hours: '07:00-17:00', 
    accessibility: true, 
    contact: '01-315-0000', 
    mesas: ['Mesa 001A', 'Mesa 002A', 'Mesa 003A'], 
    capacity: 300 
  },
  { 
    id: 2, 
    name: 'Universidad Mayor de San Marcos', 
    address: 'Av. Venezuela s/n, Lima', 
    lat: -12.0580, 
    lng: -77.0814, 
    district:'Lima', 
    province:'Lima', 
    region:'Lima', 
    hours: '07:00-17:00', 
    accessibility: true, 
    contact: '01-619-7000', 
    mesas: ['Mesa 010A', 'Mesa 011A', 'Mesa 012A', 'Mesa 013A'], 
    capacity: 500 
  },
  { 
    id: 3, 
    name: 'I.E. Mercedes Cabello de Carbonera', 
    address: 'Jr. Ica 336, Lima', 
    lat: -12.0490, 
    lng: -77.0350, 
    district:'Lima', 
    province:'Lima', 
    region:'Lima', 
    hours: '07:00-17:00', 
    accessibility: false, 
    contact: '01-427-5500', 
    mesas: ['Mesa 025B', 'Mesa 026B'], 
    capacity: 200 
  },
  { 
    id: 4, 
    name: 'Colegio Salesiano San Juan Bosco', 
    address: 'Jr. Nazca 852, Breña', 
    lat: -12.0580, 
    lng: -77.0510, 
    district:'Breña', 
    province:'Lima', 
    region:'Lima', 
    hours: '07:00-17:00', 
    accessibility: true, 
    contact: '01-424-8989', 
    mesas: ['Mesa 040C', 'Mesa 041C', 'Mesa 042C'], 
    capacity: 350 
  },
  { 
    id: 5, 
    name: 'I.E. José Carlos Mariátegui', 
    address: 'Av. Colonial 1520, Callao', 
    lat: -12.0640, 
    lng: -77.1280, 
    district:'Callao', 
    province:'Callao', 
    region:'Callao', 
    hours: '07:00-17:00', 
    accessibility: true, 
    contact: '01-429-8750', 
    mesas: ['Mesa 055D', 'Mesa 056D'], 
    capacity: 250 
  },
  { 
    id: 6, 
    name: 'Universidad Nacional de Ingeniería', 
    address: 'Av. Túpac Amaru 210, Rímac', 
    lat: -12.0210, 
    lng: -77.0490, 
    district:'Rímac', 
    province:'Lima', 
    region:'Lima', 
    hours: '07:00-17:00', 
    accessibility: true, 
    contact: '01-481-1070', 
    mesas: ['Mesa 070E', 'Mesa 071E', 'Mesa 072E', 'Mesa 073E'], 
    capacity: 600 
  },
  { 
    id: 7, 
    name: 'I.E. Bartolomé Herrera', 
    address: 'Jr. Camaná 459, Lima', 
    lat: -12.0440, 
    lng: -77.0380, 
    district:'Lima', 
    province:'Lima', 
    region:'Lima', 
    hours: '07:00-17:00', 
    accessibility: false, 
    contact: '01-426-5720', 
    mesas: ['Mesa 085F', 'Mesa 086F'], 
    capacity: 180 
  },
  { 
    id: 8, 
    name: 'Universidad Nacional Federico Villarreal', 
    address: 'Jr. Carlos Gonzales 285, Lima', 
    lat: -12.0520, 
    lng: -77.0420, 
    district:'Lima', 
    province:'Lima', 
    region:'Lima', 
    hours: '07:00-17:00', 
    accessibility: true, 
    contact: '01-748-0888', 
    mesas: ['Mesa 100G', 'Mesa 101G', 'Mesa 102G'], 
    capacity: 400 
  }
]

// =============================================================================
// INFORMACIÓN OFICIAL DE CONTACTO
// =============================================================================
export const OFFICIAL_CONTACTS = {
  onpe: {
    name: 'Oficina Nacional de Procesos Electorales',
    phone: '(01) 417-0630',
    email: 'informes@onpe.gob.pe',
    whatsapp: '995 404 991',
    address: 'Jr. Washington 1894, Cercado de Lima',
    hours: 'Lunes a viernes de 8:30 a.m. a 5:00 p.m.',
    website: 'https://eg2026.onpe.gob.pe',
    social: {
      facebook: 'https://www.facebook.com/ONPEoficial',
      twitter: 'https://twitter.com/ONPE_oficial',
      instagram: 'https://www.instagram.com/ONPE_oficial/',
      youtube: 'https://www.youtube.com/@onpeprensa'
    }
  },
  jne: {
    name: 'Jurado Nacional de Elecciones',
    phone: '(511) 311-1717',
    email: 'consultas@jne.gob.pe',
    address: 'Jr. Cusco 653 – Cercado de Lima',
    hours: 'Lunes a Viernes de 8:00 a 16:00 horas',
    website: 'https://portal.jne.gob.pe/portal',
    social: {
      facebook: 'https://www.facebook.com/JNE.Peru',
      twitter: 'https://twitter.com/jne_peru'
    }
  }
}

// =============================================================================
// CONFIGURACIÓN DE LA APLICACIÓN
// =============================================================================
export const APP_CONFIG = {
  election_date: '2026-04-12',
  election_time: '07:00-17:00',
  total_voters: '27,000,000+',
  authorities_to_elect: [
    { role: 'Presidente y Vicepresidentes', quantity: '1 Presidente + 2 VP' },
    { role: 'Senadores', quantity: '60' },
    { role: 'Diputados', quantity: '130' },
    { role: 'Parlamento Andino', quantity: '5' }
  ],
  app_version: '1.0.0',
  last_updated: '2025-11-15',
  data_sources: [
    'ONPE - Oficina Nacional de Procesos Electorales',
    'JNE - Jurado Nacional de Elecciones',
    'InfoGob - Observatorio para la Gobernabilidad',
    'Plataforma Electoral JNE',
    'ROP - Registro de Organizaciones Políticas'
  ]
}