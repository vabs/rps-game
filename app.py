__author__ = 'vsomani'

from flask import Flask, jsonify, render_template

app = Flask(__name__)
app.debug = True

@app.route('/')
def home_page():
    return render_template('home.html')


@app.route('/start')
def start_game():
    return render_template('game.html')


if __name__ == '__main__':
	app.run()