from flask_restx import Resource, Namespace, fields
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    get_jwt_identity,
    jwt_required,
)
from flask import request, jsonify
from models import Users

login_ns = Namespace("login") 
login_model = login_ns.model(
    "Login", {"username": fields.String(), "password": fields.Integer()}
)

@login_ns.route("/")
class Login(Resource):
    @login_ns.expect(login_model)
    def post(self):
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")

        db_user = Users.query.filter_by(username=username).first()
        if db_user and db_user.password == password:
            access_token = create_access_token(identity=db_user.username)
            refresh_token = create_refresh_token(identity=db_user.username)

            return jsonify(
                {"access_token": access_token, "refresh_token": refresh_token}
            )
        else:
            return jsonify({"message": "Invalid username or password"})

@login_ns.route("/refresh")
class RefreshResource(Resource):
    @jwt_required(refresh=True)
    def post(self):

        current_user = get_jwt_identity()
        new_access_token = create_access_token(identity=current_user)

        return jsonify({"access_token": new_access_token})