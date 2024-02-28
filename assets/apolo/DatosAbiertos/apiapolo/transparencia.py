from fastapi import APIRouter, Path
from transparencia_model import Transparencia, TransparenciaYear
import json

data = json.load(open('transparencia.json'))

transparencia_router = APIRouter()

@transparencia_router.get("/transparencia")
async def get_indice_transparencia() -> dict:
    return data

# @transparencia_router.get("/transparencia/{codigo}")
# async def get_indice_transparencia_single(codigo: str = Path(..., title="Código provincia")) -> dict:


