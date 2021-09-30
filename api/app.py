from flask import Flask
from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy

from resources.menu import NewRequest

app =  Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://maeda-st:Maeda123@localhost/coffe_api'
db = SQLAlchemy(app)
api = Api(app)

api.add_resource(NewRequest, '/novo-pedido')


if __name__ == '__main__':
    app.run(debug=True)