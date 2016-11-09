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
    start = int(request.args.get('start', default=0))
    stop = int(request.args.get('stop', default=5000000000))
    data = filter_copynumber('data/sim1.copynumber.called', int(start), int(stop))
    jresponse = jparse(data)
    return jresponse

if __name__=="__main__":
    app.run()
