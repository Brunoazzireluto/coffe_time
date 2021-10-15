from flask_restful import Resource
from random import randint


class NewCategories(Resource):
    def post(self):
        return {'response':'categorias cadastradas'}


class NewRequest(Resource):
    def get(self):
        