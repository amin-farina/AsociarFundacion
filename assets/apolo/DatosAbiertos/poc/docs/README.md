# API datos.gob.ar

- [Documentación API gobierno.ar](https://datosgobar.github.io/series-tiempo-ar-api/)

```
apis.datos.gob.ar/series/api/series/?ids=101.1_I2NG_2016_M_22:percent_change_a_year_ago&format=json
```

- [Listado de Series de Tiempo](http://datos.gob.ar/dataset/modernizacion-base-series-tiempo-administracion-publica-nacional)
- [Explorador de Series de Tiempo](https://datos.gob.ar/series/api)
- [Github](https://github.com/datosgobar) y [Paquete de Apertura de Datos](https://github.com/datosgobar/paquete-apertura-datos)
- [pydatajson](https://github.com/datosgobar/pydatajson) y [documentación](https://pydatajson.readthedocs.io/es/stable/)
- [Usar API en Python](https://datosgobar.github.io/series-tiempo-ar-api/python-usage/)

## Series

- [SQLite](https://apis.datos.gob.ar/series/api/dump/series-tiempo-sqlite.zip)

```bash
curl -L https://apis.datos.gob.ar/series/api/dump/series-tiempo-sqlite.zip --output series_tiempo.zip
unziq series_tiempo.zip
sqlite3 series-tiempo.sqlite
```

```bash
sqlite> .tables
fuentes  metadatos  valores
```