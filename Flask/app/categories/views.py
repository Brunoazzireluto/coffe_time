from flask import render_template, flash, redirect, url_for
from . import categories
from .forms import CategorieForm
from app.models.models import Categorie
from .. import db

@categories.route('/nova_categoria',  methods=['GET', 'POST'])
def new_categorie():
    form = CategorieForm()
    if form.validate_on_submit():
        categorie = Categorie(name=form.name.data, photo=form.photo.data)
        db.session.add(categorie)
        db.session.commit()
        flash('Categoria Cadastrada')
        return redirect(url_for('categories.new_categorie'))
    return render_template('categories/new_categorie.html', form=form)

@categories.route('/consultar_categorias')
def consult_categories():
    categories = Categorie.query.all()
    return render_template('categories/consult_categories.html', categories=categories)

@categories.route('/editar_categoria/<int:id>',  methods=['GET', 'POST'])
def edit_categorie(id):
    categorie = Categorie.query.filter_by(id=id).first()
    data = {
        'name': categorie.name,
        'photo': categorie.photo
    }
    form = CategorieForm(data=data)
    if form.validate_on_submit():
        categorie.name = form.name.data
        categorie.photo = form.photo.data
        db.session.commit()
        flash('Categoria Atualizada')
        return redirect(url_for('categories.consult_categories'))
    return render_template('categories/edit_categorie.html', form=form)

@categories.route('/delete_categorie/<int:id>',  methods=['GET', 'POST'])
def delete_categorie(id):
    categorie = Categorie.query.filter_by(id=id).first()
    db.session.delete(categorie)
    db.session.commit()
    flash('Categoria Deletada')
    return redirect(url_for('categories.consult_categories'))