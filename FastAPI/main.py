import os

from fastapi import FastAPI, HTTPException, status, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

from DB.database import (
    fetch_one_todo,
    fetch_all_todos,
    create_todo,
    update_todo,
    remove_todo
)
from DB.model import Todo

origins = os.environ.get('CORS_ALLOWED_ORIGINS', 'http://localhost:3000').split()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get("/")
async def root(request: Request):
    return {"ToDo API": f"{request.url._url}api/v1/todo"}


@app.get("/api/v1/todo")
@app.post("/api/v1/todo", status_code=status.HTTP_201_CREATED, response_model=Todo)
async def get_todo(request: Request, todo: Todo = {}):
    if request.method == "GET":
        return await fetch_all_todos()
    response = await create_todo(todo)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.get("/api/v1/todo/{title}", response_model=Todo)
@app.put("/api/v1/todo/{title}", response_model=Todo)
@app.delete("/api/v1/todo/{title}")
async def todo_by_title(request: Request, title: str, todo: Todo | None = None):
    response = {
        "GET": await fetch_one_todo(title)
        if request.method == "GET" else "",
        "PUT": await update_todo(title, todo.description)
        if request.method == "PUT" and todo else '',
        "DELETE": {"status": "Successfully deleted todo item"}
        if request.method == "DELETE" and await remove_todo(title) else ''
    }
    if response[request.method]:
        return response[request.method]
    if request.method == "GET" or request.method == "DELETE":
        raise HTTPException(404, f'The TODO is not found with this title: "{title}"')
    else:
        raise HTTPException(400, f'The TODO with this title: "{title}" not found or you did not enter the data: {todo}')
