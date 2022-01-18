from flask import render_template, redirect, request, url_for, flash, session
from flask_login import login_user, logout_user, login_required, current_user
from . import auth
from ..models.models import Users
from .forms import LoginForm, ChangerPassword
from .. import db

#rotas de login e logout
@auth.route('/login', methods=['GET', 'POST'])
@auth.route('/', methods=['GET', 'POST'])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        user = Users.query.filter_by(username=form.username.data).first()
        if user is not None and user.verify_password(form.password.data):
            login_user(user)
            next = request.args.get('next')
            if next is None or not next.startswith('/'):
                next = url_for('main.index')
            return redirect(next)
        flash('Usuario ou Senha Inválida')
    return render_template('auth/login.html', form=form)   

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    flash('Você foi desconectado')
    session.clear()
    return redirect(url_for('auth.login'))

@auth.route('/changer_password', methods=['GET', 'POST'])
@login_required
def change_password():
    form = ChangerPassword()
    if form.is_submitted():
        if form.validate_on_submit():
            if current_user.verify_password(form.old_password.data):
                current_user.password = form.password.data
                db.session.add(current_user)
                db.session.commit()
                flash('Sua senha foi Atualizada')
                return redirect(url_for('main.index'))
            else:
                flash('Senha antiga Inválida.')
        else:
            flash('As senhas precisam ser iguais')
    return render_template("auth/change_password.html", form=form)

@auth.route('/novo_usuario', methods=['GET', 'POST'])
@login_required
def new_user():
    form = LoginForm()
    if form.validate_on_submit():
        user = Users(username=form.username.data, password=form.password.data)
        db.session.add(user)
        db.session.commit()
        flash('Usuario Criado com o login {} e senha {}'.format(form.username.data, form.password.data))
        redirect(url_for('main.index'))
    return render_template("auth/new_user.html", form=form)

@auth.route('/usuarios')
@login_required
def users():
    users = Users.query.all()
    return render_template('auth/consult_users.html', users=users)

@auth.route('/delete_user/<int:id>')
@login_required
def delete_user(id):
    user = Users.query.filter_by(id=id).first()
    if user.id == 1:
        flash('Usuário {} não pode ser deletado'.format(user.username))
        return redirect(url_for('auth.users'))
    else:
        db.session.delete(user)
        db.session.commit()
        flash('Usuário Deletado')
        return redirect(url_for('auth.users'))