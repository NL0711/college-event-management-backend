from decouple import config
import os

class Config:
  SECRET_KEY = config('SECRET_KEY')
  SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool)

class DevConfig(Config):
  SQLALCHEMY_DATABASE_URI=config("DATABASE_URL", default=f"postgresql://user:password@localhost:5432/mydatabase")
  DEBUG = True