from flask_wtf import FlaskForm 
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class MyForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()],
                       choices=[('income', 'income',
                           ('expense', 'expense'))
                        ])
    
    submit = SubmitField("Generate Report")