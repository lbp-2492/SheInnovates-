from application import db 
from datetime import datetime 

class Income(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    yearly_income = db.Column(db.Integer())
    monthly_income = db.Column(db.Integer())
    gender = db.Column(db.String())
    age = db.Column(db.Integer())
    job = db.Column(db.String())

def __str__(self):
    return self.id