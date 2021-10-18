from flask import jsonify
from app import db
from . import api
from random import randint

@api.route('/menu')
def menu():
    items = [
        {
            'id':1,
            'categorie': 'alguma categoria',
            'name': 'Algum nome',
            'description':'alguma descrição',
            'price' : 2.50
        },
        {
            'id':2,
            'categorie': 'alguma categoria',
            'name': 'Algum nome',
            'description':'alguma descrição',
            'price' : 20.50
        },
        {
            'id':3,
            'categorie': 'alguma categoria',
            'name': 'Algum nome',
            'description':'alguma descrição',
            'price' : 5.89
        }
    ]
    return jsonify(items)



@api.route('/novo-pedido', methods=['GET'])
def new__request():
    return {'Pedido': randint(1, 100000000)}