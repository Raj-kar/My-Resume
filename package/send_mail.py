import os
import smtplib


class SendEmail:

    def __init__(self):
        self.email = os.environ.get("MY_EMAIL")
        self.password = os.environ.get("MY_EMAIL_PASSWORD")

    def send_mail(self, user_name, user_email, user_msg):
        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(user=self.email, password=self.password)
            connection.sendmail(from_addr=self.email, to_addrs="rajkar921@gmail.com",
                                msg=f"Subject:Contact\n\nName: {user_name}\nEmail: {user_email}\nmessage: {user_msg}")
