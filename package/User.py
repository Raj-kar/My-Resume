class User:
    def __init__(self, name, age, email, phone_no, about, address, title, skills):
        self.name = name
        self.age = age
        self.email = email
        self.phone_no = phone_no
        self.about = about
        self.address = address
        self.title = title
        self.skills = skills.split(" ")
