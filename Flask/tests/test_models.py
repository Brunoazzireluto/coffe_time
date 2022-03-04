from datetime import datetime
import unittest
from flask import current_app
from app import create_app, db
from app.models.models import *

class ModelTestCase(unittest.TestCase):
    categorie = Categorie(name='algum nome', photo='www.google.com.br')
    plate = Plate(name='Algum prato', description='alguma descrição',
        price=5.69, photo='dfdsjhdsf', categorie_id=categorie)
    user = Users(username='azzi', password='cat123')
    #Instanciando o app e criando banco de dados de teste
    @classmethod
    def setUpClass(cls):
        cls.app = create_app('testing')
        cls.app_context = cls.app.app_context()
        cls.app_context.push()
        
        db.create_all()

    #removenos dados, excluindo tabelas e fechando app
    @classmethod
    def tearDownClass(cls):
        db.session.remove()
        db.drop_all()
        cls.app_context.pop()

    def test_app_exist(self):
        self.assertFalse(current_app is None)

    def test_app_is_testing(self):
        self.assertTrue(current_app.config['TESTING'])

    def test_categorie_plate(self):
        db.session.add_all([self.categorie, self.plate])
        db.session.commit()

    def test_requests(self):
        request = Request(id_request=4556,id_plate=self.plate.id, observations='',quantity=3, value=3*5.69 )
        request_info = RequestInfo(id_request=request.id_request, date=datetime.today().astimezone(), status='Preparando')
        db.session.add_all([request, request_info])
        db.session.commit()

    def test_users(self):
        db.session.add(self.user)
        db.session.commit()


    def test_password_setter(self):
        u = Users(password='cat')
        self.assertTrue(u.password_hash is not None)

    def test_no_password_getter(self):
        u = Users(password='cat')
        with self.assertRaises(AttributeError):
            u.password

    def test_password_verification(self):
        u = Users(password='cat')
        self.assertTrue(u.verify_password('cat'))
        self.assertFalse(u.verify_password('dog'))

    def test_password_salts_are_random(self):
        u = Users(password='cat')
        u2 = Users(password='cat')
        self.assertTrue(u.password_hash != u2.password_hash)

    def test_company(self):
        company = Company(cnpj=33152305000178,company_name='Cafeteria cafe com cookies ltda',name_fantasy="Cookies N' Coffe",adress='Av Leonardo da Vinci, 1075, loja 11,  São Paulo-SP')
        db.session.add(company)
        db.session.commit()