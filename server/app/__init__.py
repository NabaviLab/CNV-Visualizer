import os

from eve import Eve
from flask import request, redirect, send_from_directory, url_for, Response
from flask.ext.cors import CORS
from werkzeug.utils import secure_filename

from .jsonparser import jparse
from .data import filter_copynumber

app = Eve()
app.config['UPLOAD_FOLDER'] = 'data/'
CORS(app)

cnvpath = None
bampath = None

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
    global cnvpath, bampath
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

        if 'bam' not in request.files and not bampath:
            return 'no reference file'

        if 'bam' in request.files:
            f = request.files['bam']
            if f.filename == '':
                print('no filename')
                return redirect(request.url)
            if not (f and allowed_file(f.filename, 'bam')):
                print('file nonexistant or not allowed')
                return redirect(request.url)
            filename = secure_filename(f.filename)
            refpath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            f.save(refpath)

        return 'success'

    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form action="" method=POST enctype=multipart/form-data>
    <p><input type=file name=cnv>
    <p><input type=file name=bam>
    <input type=submit value=Upload>
    </form>
    '''

@app.route('/cnvvis/uploads/<filename>')
def uploaded_file(filename):
    content_range = request.headers.get('Range', "-")
    data = None
    with open(os.path.join(app.config['UPLOAD_FOLDER'], filename)) as req_file:
        if 'bytes' in content_range:
            start, stop = content_range.split('=')[1].split('-')
        else:
            start, stop = None, None
        start = int(start) if start else 0
        stop = int(stop) if stop else os.path.getsize(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        req_file.seek(start)
        data = req_file.read(stop - start)
    rv = Response(data,
            206,
            direct_passthrough = True)
    rv.headers.add('Content-Range', 'bytes {0}-{1}/{2}'.format(start, stop, stop - start))

    return rv

if __name__=="__main__":
    app.run()
