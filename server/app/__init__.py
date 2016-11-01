from eve import Eve

app = Eve()

@app.route('/cnvvis')
def base():
	return 'hello'

@app.route('/cnvvis/<name>')
def greet(name):
	return "hi " + name

if __name__=="__main__":
	app.run()
