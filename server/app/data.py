import csv

def filter_copynumber(path, start, stop):
    """Return Ratios in the [start,stop] range"""
    with open(path, 'rb') as tsvin:
        output = tsvin.readline() + '\r\n' #skip first line (header)
        tsvin = csv.reader(tsvin, delimiter='\t')
        for row in tsvin:
            row_start = int(row[1])
            row_stop  = int(row[2])
            if start < row_stop and row_start < stop:
                output += '\t'.join(row) + '\r\n'
        return output
