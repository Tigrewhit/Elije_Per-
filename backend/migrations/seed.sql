-- Seeds de ejemplo para ElijePeru

INSERT INTO partidos (name, abbreviation, description) VALUES
('Partido Ejemplar', 'PE', 'Partido ejemplo para demostración'),
('Movimiento Ciudadano', 'MC', 'Movimiento con propuestas ciudadanas');

INSERT INTO candidatos (name, party, bio) VALUES
('Ana Pérez', 'Partido Ejemplar', 'Candidata a la presidencia con experiencia en gestión pública.'),
('Luis Gómez', 'Movimiento Ciudadano', 'Candidato al congreso, enfoque en educación y salud.');

INSERT INTO calendario (title, date, description) VALUES
('Inicio de campaña', '2026-02-01', 'Inicio oficial de campañas electorales.'),
('Día de elecciones', '2026-06-20', 'Jornada de votación nacional.');

INSERT INTO estaciones_votacion (name, address, latitude, longitude) VALUES
('Centro Cultural Central', 'Av. Central 123, Ciudad', -12.046374, -77.042793),
('Colegio San Juan', 'Jr. Los Olivos 456, Ciudad', -12.050000, -77.030000);
