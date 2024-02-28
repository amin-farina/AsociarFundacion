from fastapi import FastAPI

from transparencia import transparencia_router

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

app = FastAPI()

@app.get("/")
async def welcome() -> dict:
    return {"message": "Fundación Apolo"}

app.include_router(transparencia_router)

# Press the green button in the gutter to run the script.
# if __name__ == '__main__':
#     print_hi('PyCharm')
