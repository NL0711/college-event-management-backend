from flask import Flask
from config import DevConfig
from flask_restx import Api
from exts import db
from models import Events, Users
from routes import events_ns, users_ns
from flask_cors import CORS

# def create_app()

app = Flask(__name__)
app.config.from_object(DevConfig)
db.init_app(app)

api = Api(app, doc='/docs')
api.add_namespace(events_ns)
api.add_namespace(users_ns)

CORS(app)
    
@app.shell_context_processor
def make_shell_context():
    return {"db": db, "Events": Events, "Users": Users}
    
if __name__ == '__main__':
    app.run()
