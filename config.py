from decouple import config

class Config:
  SECRET_KEY = config('SECRET_KEY')
  SQLALCHEMY_TRACK_MODIFICATIONS = config('SQLALCHEMY_TRACK_MODIFICATIONS', cast=bool)
  JWT_SECRET_KEY = config('JWT_SECRET_KEY')

class DevConfig(Config):
  SQLALCHEMY_DATABASE_URI=config("DATABASE_URL")
  SQLALCHEMY_ECHO=True
  DEBUG = True
