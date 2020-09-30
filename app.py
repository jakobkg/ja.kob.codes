from flask import Flask, render_template, redirect

app = Flask(__name__)

app.config['SERVER_NAME'] = 'kob.codes'

real_url = 'http://ja.kob.codes'

@app.route('/', subdomain='ja')
def landing():
    return render_template('landingpage.html')

@app.route('/stagepicker', subdomain='ja')
def stagepicker():
    return render_template('stagepicker.html')

@app.route('/pausebot', subdomain='ja', methods=['POST'])
def bot_triggered():
    return 'ok'

@app.route('/')
def root():
    return redirect(real_url, code=302)

@app.route('/<path:page>')
def anypage(page):
    return redirect('{real_url}/{page}'.format(page=page, real_url=real_url), code=302)

if __name__ == '__main__':
    app.run()
    