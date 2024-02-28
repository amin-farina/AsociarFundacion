from pydantic import BaseModel


class Transparencia(BaseModel):
    indice: float
    codigo: str  # Código de Provincia
    presupuesto: int
    gastoDia: int
    gastoHora: int
    gastoHabitante: int
    gastoLegislador: int


class TransparenciaYear(BaseModel):
    year: int
    item: Transparencia
