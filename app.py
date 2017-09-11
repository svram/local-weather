from flask import Flask, render_template, session

#UNCOMMENT IN PRODUCTION SERVER
from flask_heroku import Heroku


# create the application object
app = Flask(__name__)
app.config.from_object('_config')

#UNCOMMENT IN PRODUCTION SERVER
heroku = Heroku(app)

@app.route('/')
def index():
	return render_template('index.html')

if __name__ == '__main__':
	app.run(debug=True)