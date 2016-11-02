from eve import Eve
from json import loads, load
from .jsonparser import jparse
from flask_cors import CORS

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
    #add method call to get .txt file of section from galaxy (returns path)
    jpath = jparse('./data/filtered.called')
    with open(jpath) as jfile:
        jobj = load(jfile)
        return jobj

if __name__=="__main__":
    app.run()
