from eve import Eve
from json import loads, load
from .jsonparser import jparse

app = Eve()

@app.route('/cnvvis')
def base():
    return 'hello'

@app.route('/cnvvis/greet/<name>')
def greet(name):
    return "hi " + name

@app.route('/cnvvis/logratios/<start>-<stop>')
def logs(start, stop):
    #add method call to get .txt file of section from galaxy (returns path)
    jpath = jparse('./data/filtered.called')
    with open(jpath) as jfile:
        jstring = load(jfile)
        jobj = loads(jstring)
        return jobj

if __name__=="__main__":
    app.run()
