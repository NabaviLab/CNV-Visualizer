import os

from eve import Eve
from flask import request, redirect, send_from_directory, url_for
from flask.ext.cors import CORS
from werkzeug.utils import secure_filename

from .jsonparser import jparse
from .data import filter_copynumber

app = Eve()
app.config['UPLOAD_FOLDER'] = 'data/'
CORS(app)

cnvpath = None
refpath = None
samplepath = None

@app.route('/cnvvis')
def base():
    return 'hello'

@app.route('/cnvvis/greet/<name>')
def greet(name):
    return "hi " + name

@app.route('/cnvvis/logratios')
def logs():
    global cnvpath
    if cnvpath:
        start = int(request.args.get('start', default=0))
        stop = int(request.args.get('stop', default=5000000000))
        data = filter_copynumber(cnvpath, int(start), int(stop))
        jresponse = jparse(data)
        return jresponse
    return 'no cnv file uploaded'

@app.route('/cnvvis/upload', methods=['GET','POST'])
def upload():
    global cnvpath, refpath, samplepath
    def allowed_file(filename, ext):
        return '.' in f.filename \
                and f.filename.rsplit('.', 1)[1] == ext

    if request.method == 'POST':
        if 'cnv' not in request.files and not cnvpath:
            return 'no cnv file'

        if 'cnv' in request.files:
            f = request.files['cnv']
            if f.filename == '':
                print('no filename')
                return redirect(request.url)
            if not (f and allowed_file(f.filename, 'called')):
                print('file nonexistant or not allowed')
                return redirect(request.url)
            filename = secure_filename(f.filename)
            cnvpath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            f.save(cnvpath)

        if 'reference' not in request.files and not refpath:
            return 'no reference file'

        if 'reference' in request.files:
            f = request.files['reference']
            if f.filename == '':
                print('no filename')
                return redirect(request.url)
            if not (f and allowed_file(f.filename, 'bam')):
                print('file nonexistant or not allowed')
                return redirect(request.url)
            filename = secure_filename(f.filename)
            refpath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            f.save(refpath)

        if 'sample' not in request.files and not samplepath:
            return 'no sample file'

        if 'sample' in request.files:
            f = request.files['sample']
            if f.filename == '':
                print('no filename')
                return redirect(request.url)
            if not (f and allowed_file(f.filename, 'bam')):
                print('file nonexistant or not allowed')
                return redirect(request.url)
            filename = secure_filename(f.filename)
            samplepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            f.save(samplepath)

        return 'success'

    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form action="" method=POST enctype=multipart/form-data>
    <p><input type=file name=cnv>
    <p><input type=file name=reference>
    <p><input type=file name=sample>
    <input type=submit value=Upload>
    </form>
    '''

@app.route('/cnvvis/uploads/<filename>')
def uploaded_file(filename):
    content_range = request.headers.get('Range', "-")
    with open(os.path.join(app.config['UPLOAD_FOLDER'], filename)) as req_file:
        start, stop = content_range.split('-')
        start = int(start) if start else 0
        stop = int(stop) if stop else os.path.getsize(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        req_file.seek(start)
        return req_file.read(stop - start)

if __name__=="__main__":
    app.run()
