from flask import jsonify
from flask_cors.decorator import cross_origin
from app import db
from . import api
from random import randint

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
    categories = [ 
        {
            'id': 1,
            'categorie':'Cafe',
            'image': 'https://cdn-icons-png.flaticon.com/512/1046/1046887.png'
        },
        {
            'id': 2,
            'categorie':'Sobremesa',
            'image': 'https://cdn-icons-png.flaticon.com/512/1047/1047813.png'
        },
        {
            'id':3,
            'categorie':'Bolos',
            'image':'https://cdn-icons-png.flaticon.com/512/540/540304.png'
        }
    ]
    return jsonify(categories)



@api.route('/novo-pedido', methods=['GET'])
def new__request():
    return {'Pedido': randint(1, 100000000)}