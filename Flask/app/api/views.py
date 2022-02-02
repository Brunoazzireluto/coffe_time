from flask import jsonify
from flask_cors.decorator import cross_origin
from random import randint








@appi.route('/menu')
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





@appi.route('/novo-pedido', methods=['GET'])
def new__request():
    return {'Pedido': randint(1, 100000000)}