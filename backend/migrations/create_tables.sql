CREATE TABLE IF NOT EXISTS calendario (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  description TEXT,
  proveniencia_id INT
);

CREATE TABLE IF NOT EXISTS partidos (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  abbreviation VARCHAR(50),
  description TEXT
);

CREATE TABLE IF NOT EXISTS candidatos (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  party VARCHAR(255),
  bio TEXT
);

CREATE TABLE IF NOT EXISTS estaciones_votacion (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  address TEXT,
  latitude NUMERIC,
  longitude NUMERIC
);


CREATE TABLE IF NOT EXISTS propuestas_candidato (
  id SERIAL PRIMARY KEY,
  candidato_id INT REFERENCES candidatos(id) ON DELETE CASCADE,
  sector VARCHAR(100),
  titulo VARCHAR(255),
  descripcion TEXT
);


CREATE TABLE IF NOT EXISTS actividades_candidato (
  id SERIAL PRIMARY KEY,
  candidato_id INT REFERENCES candidatos(id) ON DELETE CASCADE,
  fecha TIMESTAMP,
  titulo VARCHAR(255),
  descripcion TEXT,
  ubicacion VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS noticias (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  cuerpo TEXT,
  fuente VARCHAR(255),
  url TEXT,
  publicado_en TIMESTAMP,
  candidato_relacionado INT REFERENCES candidatos(id)
);


CREATE TABLE IF NOT EXISTS fuentes (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  tipo VARCHAR(50), 
  endpoint TEXT,
  contacto TEXT,
  verificado BOOLEAN DEFAULT false,
  last_fetch TIMESTAMP
);


CREATE TABLE IF NOT EXISTS proveniencia (
  id SERIAL PRIMARY KEY,
  fuente_id INT REFERENCES fuentes(id) ON DELETE SET NULL,
  tipo_recurso VARCHAR(100), 
  recurso_id INT,
  fetched_at TIMESTAMP DEFAULT now(),
  raw_payload JSONB,
  parsed_hash TEXT,
  source_url TEXT,
  status VARCHAR(50)
);


CREATE TABLE IF NOT EXISTS auditoria (
  id SERIAL PRIMARY KEY,
  entidad VARCHAR(100),
  entidad_id INT,
  operacion VARCHAR(50), 
  usuario VARCHAR(100),
  timestamp TIMESTAMP DEFAULT now(),
  payload_hash TEXT,
  notas TEXT
);

-- Índices útiles
CREATE INDEX IF NOT EXISTS idx_proveniencia_fuente ON proveniencia(fuente_id);
CREATE INDEX IF NOT EXISTS idx_propuestas_candidato ON propuestas_candidato(candidato_id);
CREATE INDEX IF NOT EXISTS idx_actividades_candidato ON actividades_candidato(candidato_id);
CREATE INDEX IF NOT EXISTS idx_noticias_candidato ON noticias(candidato_relacionado);
CREATE INDEX IF NOT EXISTS idx_calendario_proveniencia ON calendario(proveniencia_id);

