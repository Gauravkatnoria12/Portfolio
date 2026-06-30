from motor.motor_asyncio import AsyncIOMotorClient
from src.config import settings

# Establish MongoDB Connection
conn = AsyncIOMotorClient(settings.mongo_uri)
db = conn["PortfolioContact"]
collection = db["Contact"]
