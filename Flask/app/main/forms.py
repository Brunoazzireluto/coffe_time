from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.fields.html5 import IntegerRangeField
from wtforms.validators import InputRequired, Optional


class RequestForm(FlaskForm):
    observations = TextAreaField('Informações Adicionais', validators=[Optional()])
    quantity = IntegerField(1, validators=[InputRequired()])