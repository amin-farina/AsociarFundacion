

BEGIN;

SET client_encoding = 'UTF8';

CREATE TYPE provincia AS ENUM (
  'Santa Cruz',
  'Tierra del Fuego',
  'San Juan',
  'Chubut',
  'Mendoza',
  'Neuquen',
  'Buenos Aires',
  'La Pampa',
  'Rio Negro',
  'San Luis',
  'Cordoba',
  'Catamarca',
  'Jujuy',
  'La Rioja',
  'Salta',
  'Santiago del Estero',
  'Tucuman',
  'Chaco',
  'Formosa',
  'Corrientes',
  'Entre Rios',
  'Santa Fe',
  'Misiones',
  'Ciudad de Buenos Aires'
);

CREATE TABLE ciudades (
    id serial,
    codigo_provincia provincia,
    ciudad text,
    PRIMARY KEY (id)
);

CREATE TABLE transparencia (
    year smallint,
    codigo_provincia provincia,
    ciudad integer REFERENCES ciudades,
    indice decimal default NULL,
    presupuesto decimal,
    gastoDia integer GENERATED ALWAYS AS (presupuesto/365) STORED,
    gastoHora integer  GENERATED ALWAYS AS (presupuesto/8760) STORED,
    gastoMinuto integer  GENERATED ALWAYS AS (presupuesto/525600) STORED,
    gastoHabitante integer,
    gastoLegislador integer,
    PRIMARY KEY (year , codigo_provincia)
);


CREATE TABLE info_provincia (
    codigo_provincia provincia,
    year smallint,
    habitantes integer,
    legisladores smallint,
    presupuesto bigint,
    PRIMARY KEY (codigo_provincia, year)
);


COPY transparencia (year, codigo_provincia, indice, presupuesto, gastoHabitante, gastoLegislador) FROM stdin with NULL AS 'NULL';
2022	Santa Cruz	0.27	2083608894	5428	86817037
2022	Tierra del Fuego	0.62	2479542373.87	13625	165302824
2022	San Juan	NULL	2157725000.00	2705	59936805
2022	Chubut	NULL	3057162625.00	4782	109184379
2022	Mendoza	NULL	2589439794.52	1276	30109765
2022	Neuquen	NULL	5244750669.00	7705	149850019
2022	Buenos Aires	NULL	27900494102.00	1561	202177493
2022	La Pampa	0.52	1922679844.00	5277	64089328
2022	Rio Negro	NULL	3170000000.00	4136	68913043
2022	San Luis	NULL	971832059.00	1866	18689075
2022	Cordoba	NULL	3201777000.00	835	45739671
2022	Catamarca	NULL	5715712193.00	13529	100275652
2022	Jujuy	NULL	2400760186	3049	450015827
2022	La Rioja	NULL	NULL	NULL	NULL
2022	Salta	NULL	5265332767.00	3608	63437477
2022	Santiago del Estero	NULL	572220750.00	573	14305518
2022	Tucuman	NULL	NULL	NULL	NULL
2022	Chaco	NULL	6621165175.00	5393	206911411
2022	Formosa	NULL	2223758848.00	3618	74125294
2022	Corrientes	NULL	4512500946.00	3959	100277798
2022	Entre Rios	NULL	3503243000.00	2483	66691039
2022	Santa Fe	NULL	13609215000.00	3791	197235000
2022	Misiones	NULL	3071065000.00	2383	76776625
2022	Ciudad de Buenos Aires	0.8	12120446601.00	3933	202007443
\.

COMMIT;

ANALYZE transparencia;
ANALYZE info_provincia;
ANALYZE ciudades;