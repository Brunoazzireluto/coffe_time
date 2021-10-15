from enum import unique
from sqlalchemy.orm import backref
from app import db

class Categorie(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), unique=True)
    plates = db.relationship('Plate', backref='categorie_id', lazy='dynamic')

class  Plate(db.Model):
    __tablename__ = 'plates'
    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), unique=True)
    description = db.Column(db.Text)
    price = db.Column(db.Float)
    photo = db.Column(db.String(100), unique=True)
    id_categorie = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    requests = db.relationship('Request', backref='plate_id', lazy='dynamic')


class Request(db.Model):
    __tablename__ = 'Requests'
    id = db.Column(db.Integer, primary_key=True, unique=True, autoincrement=False)
    id_plate = db.Column(db.Integer, db.ForeignKey('plates.id'), nullable=False)
