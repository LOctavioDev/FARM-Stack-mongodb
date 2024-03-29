from model import Todo
from fastapi.responses import JSONResponse

# MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:22009')
database = client.TodoList
collection = database.todo

async def fetch_one_todo(title):
    document = await collection.find_one({"title": title})
    return document

async def fetch_all():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    
    return todos    

async def create_todo(todo):
    document = todo
    result = await collection.insert_one(document)    
    inserted_todo = await collection.find_one({"_id": result.inserted_id})

    return inserted_todo


async def update_new_todo(title, desc):
    await collection.update_one({"title": title}, {"$set": {
        "description": desc }})

    document = await collection.find_one({"title": title})
    return document
    
async def remove_todo(title):
    await collection.delete_one({"title": title})
    return True