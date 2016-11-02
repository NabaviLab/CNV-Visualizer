from json import dump
import re

def jparse(path):
    outpath = path
    outpath = outpath[:-4]
    outpath = outpath.join('.json')
    jtxt = open(path,'r')
    lines = jtxt.readlines()
    jtxt.close()
    linearray = []
    linearray.append('{"chr1":[')
    for index, value in enumerate(lines):
        if index != 0:
            string = value.split()
            linearray.append('{"chr_start":')
            linearray.append(string[1])
            linearray.append(',"chr_stop":')
            linearray.append(string[2])
            linearray.append(',"adjusted_log_ratio":')
            linearray.append(string[6])
            linearray.append(',"region_call":')
            linearray.append(string[8])
            linearray.append('"}')
            if (index+1) < len(lines):
                linearray.append(',')
            else:
                pass
        else:
            pass
        linearray.append(']}')
    output = ''.join(linearray)
    with open(outpath,'w') as outfile:
        dump(output, outfile)
    return outpath
