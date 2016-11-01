from eve import Eve

app = Eve()

@app.route('/cnvvis')
def base():
	return 'hello'

if __name__=="__main__":
	app.run()
