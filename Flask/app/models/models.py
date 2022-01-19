from enum import unique
from sqlalchemy.orm import backref
from app import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .. import login_manager

class Categorie(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), unique=True)
    photo = db.Column(db.String(200))
    plates = db.relationship('Plate', backref='categorie_id', lazy='dynamic')

    def __init__(self, id, name, photo ):
        self.id = id
        self.name = name
        self.photo = photo

    @property
    def serialize(self):
        """Return object data in easily serializable format"""
        return {
            'id' : self.id,
            'name':self.name,
            'photo': self.photo
        }

class  Plate(db.Model):
    __tablename__ = 'plates'
    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), unique=True)
    description = db.Column(db.Text)
    price = db.Column(db.Float)
    photo = db.Column(db.String(200), unique=True)
    id_categorie = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    requests = db.relationship('Request', backref='plate_id', lazy='dynamic')


class Request(db.Model):
    __tablename__ = 'Requests'
    id = db.Column(db.Integer, primary_key=True, unique=True)
    id_request = db.Column(db.Integer, unique=False)
    id_plate = db.Column(db.Integer, db.ForeignKey('plates.id'), nullable=False)
    observations = db.Column(db.Text, nullable=True)
    quantity =  db.Column(db.Integer, nullable=False)


class Users(UserMixin, db.Model):
    __tableame__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password_hash = db.Column(db.String(128))

    @staticmethod
    def insert_adm():
        user = Users(username='ADM', password='123')
        db.session.add(user)
        db.session.commit()

    @property
    def password(self):
        raise AttributeError('Senha não pode ser lida')

    @password.setter
    def password(self, password):
        self.password_hash  = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    @login_manager.user_loader
    def load_user(id):
        return Users.query.get(int(id))

    def get_id(self):
        return (self.id)