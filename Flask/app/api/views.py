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
        'id': 2,
        'name': "Sobremesa 1",
        'description': "alguma descrição",
        'price': 20.5,
        'categorie': 2
        },
        {
        'id': 3,
        'name': "sobremesa 2",
        'description': "alguma descrição",
        'price': 5.89,
        'categorie': 2
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
        },
        {
        'id': 6,
        'name': "Sobremesa 3",
        'description': "alguma descrição",
        'price': 10.90,
        'categorie': 2
        },
        {
        'id': 7,
        'name': "Bolo 1",
        'description': "alguma descrição",
        'price': 5.9,
        'categorie': 3
        },
        {
        'id': 8,
        'name': "Bolo 2",
        'description': "alguma descrição",
        'price': 10.90,
        'categorie': 3
        },
        {
            'id':9,
            'name':'Cafe 4',
            'description':'FUNCIONAAAA',
            'price':100,
            'categorie':1
        }
    ]
    return jsonify(items)


@api.route('/categorias')
@cross_origin()
def categories():
    categories_array = []
    categories = Categorie.query.all()
    for categorie in categories:
        categorie_obj ={}
        categorie_obj['id'] = categorie.id
        categorie_obj['name'] = categorie.name
        categorie_obj['photo'] = categorie.photo
        categories_array.append(categorie_obj)
    return jsonify(categories_array)



@api.route('/novo-pedido', methods=['GET'])
def new__request():
    return {'Pedido': randint(1, 100000000)}