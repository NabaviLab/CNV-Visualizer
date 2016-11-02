from json import dump

def jparse(path):
    outpath = path
    outpath = outpath + '.json'
    jtxt = open(path,'r')
    lines = jtxt.readlines()
    jtxt.close()
    chrome = { 'chr1': [] }
    for index, value in enumerate(lines):
        if index != 0:
            string = value.split()
            line = dict()
            line['chr_start'] = int(string[1])
            line['chr_stop'] = int(string[2])
            line['adjusted_log_ratio'] = float(string[6])
            line['region_call'] = string[8]
            chrome['chr1'].append(line)

    output = str(chrome)
    with open(outpath,'w') as outfile:
        dump(output, outfile)

    return outpath
