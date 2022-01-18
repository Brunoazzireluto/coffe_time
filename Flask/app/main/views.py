from flask import render_template
from .  import main
from flask_login import login_required
from ..models.models import Categorie, Plate
from .forms import RequestForm


@main.route('/home')
@login_required
def index():
    return render_template('index.html')


@main.route('/novo_pedido')
@login_required
def new_request():
    form= RequestForm()
    categories = Categorie.query.all()
    return render_template('new_request.html', form=form)


"""
Paginas do app

Cadastrar pedido
Editar pedido

adicionar/editar/remover prato

adicionar logica para combos

pediddos anterioes

ver com renato pagamentos

paginas de pagamento ->
Paginas de Notas ->

desing

fazer pedido (pratos aparecem em cards)
categorias e pratos con forms e tabelas igual o erp 
pedidos anteriores com tabela e vizualizar os pratos
primaria  #ed9121
secundaria #696969
preto #111111
branco #f5f5f5

emissão de nota com Load bonitinho
"""