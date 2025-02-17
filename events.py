from flask_restx import Namespace, Resource, fields
from models import Events, User
from flask_jwt_extended import jwt_required
from flask import request

events_ns = Namespace("events")

events_model = events_ns.model(
  'Events',
  {
    'id': fields.Integer(),
    'title': fields.String(),
    'description': fields.String(),
    'start_date': fields.Date(),
    'end_date': fields.Date(),
    'location': fields.String(),
    'venue': fields.String(),
    'time_start': fields.String(),
    'time_end': fields.String(),
    'image_src': fields.String(),
  }
)

@events_ns.route("/hello")
class HelloResource(Resource):
  def get(self):
    return {"message": "Hello World"}
    
@events_ns.route("/")
class RecipesResource(Resource):
  @events_ns.marshal_list_with(events_model)
  def get(self):
    events = Events.query.all()
    return events

