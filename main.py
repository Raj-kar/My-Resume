from flask import Flask, render_template, request, redirect, url_for, flash
from flask_bootstrap import Bootstrap

from package import User
from package import form
from package import send_mail as mail

app = Flask(__name__)
app.config['SECRET_KEY'] = '8BYkEfBA6O6donzWlSihBXox7C0sKR6b'
Bootstrap(app)
    

@app.route("/")
def home():
    return render_template("index.html")


@app.route('/about-Raj')
def about_me():
    return render_template("about.html")


@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    send_msg = mail.SendEmail()
    try:
        send_msg.send_mail(name, email, message)
        flash("Your message send to Raj successfully.")
    except Exception:
        flash("Something went wrong. Please Check Your Internet connection.")
    return redirect(url_for('home'))


@app.route('/create-new-cv', methods=["POST", "GET"])
def create_cv():
    new_from = form.CreateCv()

    if request.method == "POST":
        name = request.form.get("name")
        age = request.form.get("age")
        email = request.form.get("email")
        phone_no = request.form.get("phone_no")
        address = request.form.get("address")
        title = request.form.get("title")
        about = request.form.get("about")
        skills = request.form.get("skills")

        new_user = User.User(name, age, email, phone_no, about, address, title, skills)
        return render_template("cv.html", user=new_user)

    return render_template("create_cv.html", form=new_from)


@app.route('/<route>')
def other_route(route):
    return render_template("error_404.html", title=route)


if __name__ == "__main__":
    # TODO - change debug to false before push
    app.run(debug=True)
    # app.run()
