# Fundacion Apolo API POC

Este POC implementa la API de datos de Fundación Apolo utilizando los siguientes componentes:

- [Postgres](https://www.postgresql.org/)
- [PostgREST](https://github.com/begriffs/postgrest)
- [Swagger UI](https://github.com/swagger-api/swagger-ui) 
- Metabase, para acceso a datos y creación de dashboards.


## Arquitenctura


![Deployment Diagram](diagrams/deployment-diagram.png)

## Uso 

- **Start the containers**

`docker-compose up -d`

- **Tearing down the containers**

`docker-compose down --remove-orphans -v`

- **Demo Application**

Located at [http://localhost](http://localhost)

- **Postgrest**

Located at [http://localhost:3000](http://localhost:3000)

Prueba:

* [http://localhost:3000/transparencia](http://localhost:3000/transparencia)
* [Índice de transparencia año 2022](http://localhost:3000/transparencia?year=eq.2022)

Algunos ejemplos para filtro de datos:

* [http://localhost:3000/country](http://localhost:3000/country)
* [http://localhost:3000/countrylanguage](http://localhost:3000/countrylanguage)
* [http://localhost:3000/city?name=eq.Denver](http://localhost:3000/city?name=eq.Denver)
* [http://localhost:3000/city?population=gte.5000000](http://localhost:3000/city?population=gte.5000000)
* [http://localhost:3000/city?district=like.*Island](http://localhost:3000/city?district=like.*Island)
* [http://localhost:3000/city?district=like.*Island&population=lt.1000&select=id,name](http://localhost:3000/city?district=like.*Island&population=lt.1000&select=id,name)

- **Swagger UI**

La interfaz de Swagger permite visualizar las especificaciones de la API y realizar tests contra la misma. [http://localhost:8080](http://localhost:8080)
