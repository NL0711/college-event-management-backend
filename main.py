from flask import Flask
from flask_restx import Api
from exts import db
from flask_jwt_extended import JWTManager
from models import Events, Users
from routes import events_ns, users_ns, CarouselResource
from auth import login_ns, Login
from flask_cors import CORS

def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)
    CORS(app)

    db.init_app(app)
    JWTManager(app)

    api = Api(app, doc='/docs')
    namespaces = [events_ns, users_ns, login_ns]
    for ns in namespaces:
        api.add_namespace(ns)
    api.add_resource(CarouselResource, '/carousel')

    @app.shell_context_processor
    def make_shell_context():
        return {"db": db, "Events": Events, "Users": Users, Login: "Login"}
        
    return app
