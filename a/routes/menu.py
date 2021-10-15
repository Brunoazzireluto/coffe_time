from app import app
from app import db
from random import randint

@app.route('/novo-pedido', methods=['GET'])
def new__request():
    return {'Pedido': randint(1, 100000000)}