from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, Email, Length, NumberRange


class CreateCv(FlaskForm):
    name = StringField("Your name", validators=[DataRequired()])
    age = IntegerField("Your age ?", validators=[DataRequired(), NumberRange(min=16)])
    email = StringField("Your email", validators=[DataRequired(), Email()])
    phone_no = IntegerField("Phone number", validators=[DataRequired(), Length(min=10, max=12)])
    address = StringField("Your Address", validators=[DataRequired()])
    title = StringField("specialist in ?", validators=[DataRequired()])
    about = StringField("Say something about you ?", validators=[DataRequired()])
    skills = StringField("Professional Skills [any 6]", validators=[DataRequired()])
    submit = SubmitField("Create CV")