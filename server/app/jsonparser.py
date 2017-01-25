from flask import jsonify

def jparse(jstring):
    chrome = { 'chr1': [] }
    totalstring = jstring.split('\r\n')
    for index, value in enumerate(totalstring):
        if index != 0:
            string = value.split()
            line = dict()
            line['chr_start'] = int(string[1])
            line['chr_stop'] = int(string[2])
            line['adjusted_log_ratio'] = float(string[6])
            line['region_call'] = string[8]
            chrome['chr1'].append(line)

    return jsonify(chrome)
