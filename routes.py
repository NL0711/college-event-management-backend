from flask_restx import Namespace, Resource, fields
from models import Events, Users
from flask_jwt_extended import jwt_required
from flask import request, jsonify
from scrape import get_carousel_imgs

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
    
@events_ns.route("/")
class RecipesResource(Resource):
  @events_ns.marshal_list_with(events_model)
  def get(self):
    events = Events.query.all()
    return events

users_ns = Namespace("users")
users_model = users_ns.model(
  'Users',
  {
    'id': fields.Integer(),
    'username': fields.String(),
    'password': fields.Integer(),
  }
)

#add resourcw to add/delete users for admin only

class CarouselResource(Resource):
  def get(self):
    carousel_img_url = get_carousel_imgs()
    return jsonify(carousel_img_url)
  
