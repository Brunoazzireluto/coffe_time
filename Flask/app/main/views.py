from flask import render_template
from .  import main

@main.route('/')
def index():
    return render_template('index.html')



"""
Paginas do app

Cadastrar pedido
Editar pedido

adicionar/editar/remover categoria
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