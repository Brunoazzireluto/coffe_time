from flask_wtf import FlaskForm
from flask_wtf.recaptcha import validators
from wtforms import StringField
from wtforms.validators import InputRequired

class CategorieForm(FlaskForm):
    name = StringField('Nome da Categoria', validators=[InputRequired()])
    photo = StringField('Link do icone', validators=[InputRequired()])