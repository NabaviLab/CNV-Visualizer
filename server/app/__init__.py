import os

from eve import Eve
from flask import request, redirect, send_from_directory, url_for
from flask.ext.cors import CORS
from werkzeug.utils import secure_filename

from .jsonparser import jparse
from .data import filter_copynumber

app = Eve()
app.config['UPLOAD_FOLDER'] = 'data/'
app.config['ALLOWED_EXTENSIONS'] = {'txt'}
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

@app.route('/cnvvis/upload', methods=['GET','POST'])
def upload():
    def allowed_file(filename):
        return '.' in f.filename \
                and f.filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS'] 

    if request.method == 'POST':
        if 'file' not in request.files:
            print('no file')
            return redirect(request.url)
        f = request.files['file']
        if f.filename == '':
            print('no filename')
            return redirect(request.url)
        if f and allowed_file(f.filename):
            filename = secure_filename(f.filename)
            f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('uploaded_file', filename=filename))

    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form action="" method=POST enctype=multipart/form-data>
    <p><input type=file name=file>
    <input type=submit value=Upload>
    </form>
    '''

@app.route('/cnvvis/uploads/<filename>')
def uploaded_file(filename):
    return open(os.path.join(app.config['UPLOAD_FOLDER'], filename)).read()

if __name__=="__main__":
    app.run()
