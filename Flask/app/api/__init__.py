from flask_restful import Api
from .resource import Post_Request, Categories, Plates, Get_Request,Delete_Request
from flaskext.mysql import MySQL

api = Api(prefix='/api/')
mysql = MySQL()


api.add_resource(Get_Request, '/pedido/<int:id_request>')
api.add_resource(Post_Request, '/pedido/<int:id_request>/<int:id_plate>')
api.add_resource(Delete_Request, '/pedido/<int:id_request>/<int:id>')
api.add_resource(Categories, '/categorias')
api.add_resource(Plates, '/menu')
