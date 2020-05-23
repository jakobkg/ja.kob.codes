from flask import Flask, render_template, redirect

app = Flask(__name__)

app.config['SERVER_NAME'] = 'kob.codes'

@app.route('/', subdomain='ja')
def landing():
    return render_template('landingpage.html')

@app.route('/')
def send_to_landing():
    return redirect('http://ja.kob.codes/')

if __name__ == '__main__':
    app.run()
    