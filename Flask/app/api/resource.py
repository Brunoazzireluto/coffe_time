from sqlite3 import Cursor
from flask_restful import Resource, reqparse
import mysql.connector





# connection = mysql.connector.connect( host='localhost', database='Coffe_time', user='Azzi', password='Bu.62991881')
# connection = mysql.connector.connect( host='localhost', database='coffe_api', user='maeda-st', password='Maeda123')
# cursor = mysql.get_db().cursor()
# def db_connect():
#     if connection.is_connected():
#         db_Info = connection.get_server_info()
#         print("Connected to MySQL Server version ", db_Info)
#         cursor = connection.cursor()
#         cursor.execute("select database();")
#         record = cursor.fetchone()
#         print("You're connected to database: ", record)

# def db_table():
#     cursor = connection.cursor()
#     cursor.execute('SELECT * FROM categories ORDER BY name')
#     categories = cursor.fetchall()
#     for cat in categories:
#         print(f'{cat[0]} {cat[1]}')

class Get_Request(Resource):
    def get(self, id_request):

        cursor = connection.cursor()
        query_plate = ('SELECT name FROM plates WHERE id = %s')
        query = ('SELECT * FROM Requests WHERE id_request = (%s)')
        data = (id_request,)
        cursor.execute(query, data)
        request = []
        requests = cursor.fetchall()
        for r in requests:
            plate = (r[2],)
            cursor.execute(query_plate, plate)
            name = cursor.fetchone()
            request.append({
                'id_': r[0],
                'plate_name': name[0],
                'observations': r[3],
                'quantity':r[4]
            })
        return request, 200

class Post_Request(Resource):
    def post(self, id_request, id_plate):
        args = reqparse.RequestParser()
        args.add_argument('observations') 
        args.add_argument('quantity') 
        data  = args.parse_args()
        cursor = connection.cursor()
        query = ("INSERT INTO Requests (id_request, id_plate, observations, quantity) VALUES (%s, %s, %s, %s)")
        data = (id_request, id_plate, data['observations'], data['quantity'])
        cursor.execute(query, data)
        connection.commit()
        return {'message': 'deu tudo certo'}, 201


class Delete_Request(Resource):
    def delete(self, id_request, id ):
        cursor = connection.cursor()
        query = ('DELETE FROM Requests WHERE id_request = (%s) AND id = (%s) ')
        data = (id_request, id,)
        cursor.execute(query, data)
        connection.commit()
        return {'message': 'Deletado'}, 200

class Categories(Resource):
    def get(self):
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM categories ORDER BY name')
        categorie = cursor.fetchall()
        categories = []
        for cat in categorie:
            categories.append({
                'id':cat[0],
                'name':cat [1],
                'photo': cat[2],
            })
        return categories,200

class Plates(Resource):
    def get(self):
        cursor = connection.cursor()
        cursor.execute('SELECT * FROM plates ORDER BY id_categorie')
        plate = cursor.fetchall()
        plates = []
        for pl in plate:
            plates.append({
                'id':pl[0],
                'name':pl [1],
                'description': pl[2],
                'price':pl[3],
                'photo':pl[4],
                'id_categorie':pl[5],
            })
        return plates,200, {'Access-Control-Allow-Origin': '*'} 