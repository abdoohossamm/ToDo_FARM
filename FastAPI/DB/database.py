import os
from motor import motor_asyncio

from DB.model import Todo

mongo_data = {
    "USERNAME": os.environ.get("MONGO_ROOT_USERNAME", "rootuser"),
    "PASSWORD": os.environ.get("MONGO_ROOT_PASSWORD", "rootpassword"),
    "SERVER": os.environ.get("MONGO_SERVER", "localhost"),
    "PORT": os.environ.get("MONGO_PORT", "27017"),
}

mongo_url = f"mongodb://{mongo_data['USERNAME']}:{mongo_data['PASSWORD']}@{mongo_data['SERVER']}:{mongo_data['PORT']}"
client = motor_asyncio.AsyncIOMotorClient(mongo_url)

database = client.TodoList
collection = database.todo


async def fetch_one_todo(title):
    document = await collection.find_one({"title": title})
    return document


async def fetch_all_todos():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos


async def create_todo(todo):
    document = todo.dict()
    result = await collection.insert_one(document)
    return document


async def update_todo(title, desc):
    await collection.update_one({"title": title}, {"$set": {
        "description": desc
    }})
    return await collection.find_one({"title": title})


async def remove_todo(title):
    document = await collection.delete_one({"title": title})
    return document.raw_result['n']
