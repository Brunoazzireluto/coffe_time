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