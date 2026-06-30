from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.routes.contact import router as contact_router

app = FastAPI(
    title="Portfolio",
    description="A Rest API for my Portfolio Contact Section",
    version="v1.0"
)

# Enable CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"Message" : "Hello Gaurav"}

# Include contact routes
app.include_router(contact_router)
