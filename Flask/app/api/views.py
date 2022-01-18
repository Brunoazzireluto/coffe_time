from flask import jsonify
from flask_cors.decorator import cross_origin
from app import db
from . import api
from random import randint
from app.models.models import Categorie

@api.route('/menu')
@cross_origin()
def menu():
    items = [
        {
        'id': 1,
        'name': "café 1",
        'description': "alguma descrição",
        'price': 2.5,
        'categorie': 1
        },
        {
        'id': 4,
        'name': "Café 2",
        'description': "alguma descrição",
        'price': 5.9,
        'categorie': 1
        },
        {
        'id': 5,
        'name': "Café 3",
        'description': "alguma descrição",
        'price': 10.90,
        'categorie': 1
        }
    ]
    return jsonify(items)


@api.route('/categorias_api')
@cross_origin()
def categories_api():
    categories = Categorie.query.all()
    json_list = [i.serialize for i in categories]
    return jsonify(json_list)



@api.route('/novo-pedido', methods=['GET'])
def new__request():
    return {'Pedido': randint(1, 100000000)}