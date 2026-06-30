from fastapi import APIRouter, HTTPException, status
from typing import List
from datetime import datetime

from src.database import collection
from src.models.contact import DataCreate, DataResponse

router = APIRouter(prefix="/contact", tags=["Contact"])

@router.get("", response_model=List[DataResponse], status_code=status.HTTP_200_OK)
async def get_contacts():
    """
    Fetches up to 100 blog posts from MongoDB.
    """
    cursor = collection.find()
    results = await cursor.to_list(length=100)
    if not results:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Data Not Found")
    return results


@router.get("/{p_id}", response_model=DataResponse)
async def get_single_contact(p_id: int):
    """
    Get Single data
    """
    single_data = await collection.find_one({"p_id": p_id})
    if single_data:
        return single_data
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Data not found")


@router.post("/Add", response_model=DataResponse, status_code=status.HTTP_201_CREATED)
async def add_contact(data : DataCreate):
    
    last_data = await collection.find_one(sort=[("p_id", -1)])
    new_id = (last_data["p_id"] + 1) if last_data else 1
    
    contact_data = data.model_dump()

    new_data = {
       "p_id" : new_id,
       "timestamp": datetime.now(),
       **contact_data
    }
    await collection.insert_one(new_data)
    return new_data
