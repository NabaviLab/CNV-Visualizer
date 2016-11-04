from eve import Eve
from json import loads, load
from flask_cors import CORS
from flask import request

from .jsonparser import jparse
from .galaxy import get_filtered

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
    get_filtered(int(start), int(stop))
    #add method call to get .txt file of section from galaxy (returns path)
    jpath = jparse('./data/filtered.called')
    with open(jpath) as jfile:
        return jfile.read()

if __name__=="__main__":
    app.run()
