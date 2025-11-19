-- Seeds for demo (Postgres)
INSERT INTO parties (id, name, abbreviation, description, logo_url) VALUES
  (1,'Partido Ejemplo','PE','Partido de ejemplo con enfoque social','/logos/pe.png'),
  (2,'Movimiento Demo','MD','Movimiento por el desarrollo regional','/logos/md.png');

INSERT INTO candidates (id, name, party_id, photo_url, bio, cv_url) VALUES
  (1,'María Pérez',1,'/photos/maria.jpg','Candidata con experiencia en políticas públicas.','/docs/maria_cv.pdf'),
  (2,'Juan Torres',2,'/photos/juan.jpg','Especialista en economía y desarrollo regional.','/docs/juan_cv.pdf');

INSERT INTO calendario (id, title, date, description) VALUES
  (1,'Jornada de votación','2026-04-12','Fecha de la jornada electoral nacional'),
  (2,'Inicio campaña','2025-12-01','Comienzo de campañas electorales');

-- Incidents table seed is empty by default
