from eve import Eve
from json import loads, load
from flask_cors import CORS
from flask import request

from .jsonparser import jparse
from .data import filter_copynumber

app = Eve()
CORS(app)

@app.route('/cnvvis')
def base():
    return 'hello'

@app.route('/cnvvis/greet/<name>')
def greet(name):
    return "hi " + name

@app.route('/cnvvis/logratios')
def logs():
    start = request.args.get('start')
    stop = request.args.get('stop')
    data = filter_copynumber('../data/sim1.copynumber.called', int(start), int(stop))
    jpath = jparse(data)
    with open(jpath) as jfile:
        return jfile.read()

if __name__=="__main__":
    app.run()
