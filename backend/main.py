from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Todo

#App object
app = FastAPI()

from database import (fetch_one_todo, fetch_all, create_todo, update_new_todo, remove_todo)

origins = ['http://localhost:11111']
app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],   
    allow_headers = ["*"]   
)


@app.get("/")
def read_root():
    return {"message": "Welcome to my first app"}

""" THE ROUTES """
@app.get("/api/todo")
async def get_todo():
    response  =  await fetch_all()
    return response

@app.get("/api/todo/{title}", response_model=Todo)
async def get_todo_one(title):
    response = await fetch_one_todo(title)
    if response:
        return response
    raise HTTPException(404, f'There is not TODO item with this {title}')

@app.post("/api/todo", response_model=Todo)
async def post_todo(todo: Todo):
    inserted_todo = await create_todo(todo.model_dump())
    if inserted_todo:
        return inserted_todo
    else:
        raise HTTPException(500, 'Internal Server Error')


@app.put("/api/todo/{title}", response_model=Todo)
async def update_todo_endpoint(title: str, todo_update: Todo):
    desc = todo_update.description
    
    response = await update_new_todo(title, desc)
    if response:
        return response
    raise HTTPException(404, f'There is not TODO item with this title {title}')


@app.delete("/api/todo/{title}")
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return 'Succesfully deleted todo item!'
    raise HTTPException(404, f'There is not TODO item with this title {title}')
    