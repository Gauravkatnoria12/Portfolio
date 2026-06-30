from pydantic import BaseModel, EmailStr, Field
from datetime import datetime, timezone

class DataBaseM(BaseModel):
    name : str
    email : EmailStr
    Message : str

class DataCreate(DataBaseM):
    pass

class DataResponse(DataBaseM):
    p_id : int
    timestamp: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc)
    )
