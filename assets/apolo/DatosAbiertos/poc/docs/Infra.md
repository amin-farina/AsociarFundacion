# Infraestructura

- [Con fargate](https://www.nedmcclain.com/postgrest-rest-api-on-aws-fargate/)
- [Usando RDS](https://subscription.packtpub.com/book/data/9781838648145/8/ch08lvl1sec81/creating-a-postgrest-api-schema-on-an-rds-aws)

## Takes

- Usar EC2 con Postgres + Postgrest local. Usar ECS (fargate) para Metabase. LB necesario? Route 53 apuntando desde datos.fundacionapolo.org.
- EC2 para Postgres. ECS para Postgrest y Metabase. LB para acceder a los containers.
- RDS? Configuración mínima, snapshots semanales o cada N días. ECS para el resto de los componentes.