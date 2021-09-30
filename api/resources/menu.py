from flask_restful import Resource
from random import randint


class NewRequest(Resource):
    def get(self):
        return {'Pedido': randint(1, 100000000)}