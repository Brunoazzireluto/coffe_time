from os import name
from flask import render_template, flash,  redirect, url_for, request
from flask_babel import  format_decimal
from flask_login import login_required
from .forms import PlateForm
from app.models.models import Categorie, Plate
from app import db, photos
from . import items
from ..OCI.oci import UploadOci

@items.route('/novo_prato',methods=['GET', 'POST'])
@login_required
def new_plate():
    form = PlateForm()
    if form.validate_on_submit():
        arq = UploadOci(form.photo.data, form.name.data)
        photo = arq.upload_image()
        plate = Plate(name=form.name.data, description=form.description.data, price=form.price.data, photo=photo, categorie_id=form.categorie.data)
        db.session.add(plate)
        db.session.commit()
        flash('Prato adicionado com Sucesso')
        return redirect(url_for('items.new_plate'))
    return render_template('items/new_plate.html', form=form)

@items.route('/consultar_pratos')
@login_required
def consult_plates():
    plates = Plate.query.order_by(Plate.id_categorie).all()
    return render_template('items/consult_plates.html', plates=plates, Categorie=Categorie)


@items.route('/edit_plate/<int:id>', methods=['GET', 'POST'])
@login_required
def edit_plate(id):
    plate = Plate.query.filter_by(id=id).first()
    categorie = Categorie.query.filter_by(id=plate.id_categorie).first()
    data = {
        'categorie': categorie,
        'name':plate.name,
        'description':plate.description,
        'price':plate.price,
        'photo':plate.photo
    }
    form = PlateForm(data=data)
    if form.validate_on_submit():
        plate.id_categorie = form.categorie.data
        plate.name = form.name.data
        plate.description = form.description.data
        plate.price = form.price.data
    return render_template('items/edit_plate.html', form=form)



@items.route('/delete_plate/<int:id>')
@login_required
def delete_plate(id):
    plate = Plate.query.filter_by(id=id).first()
    db.session.delete(plate)
    db.session.commit()
    flash('Prato Excluido')
    return redirect(url_for('items.consult_plates'))