from fastapi import FastAPI

app = FastAPI(title="CodeX API")

@app.get("/")
def root():
    return {"message": "CodeX API running"}
