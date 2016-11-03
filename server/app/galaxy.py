from bioblend import galaxy

gi = galaxy.GalaxyInstance(url='http://127.0.0.1:8081', key="99a35067d39e1fd38eb7087bb13a59b8")
dsc = galaxy.datasets.DatasetClient(gi)
tlc = galaxy.tools.ToolClient(gi)
hsc = galaxy.histories.HistoryClient(gi)

library_id = gi.libraries.get_libraries(name="Test")[0]['id']
library = [l for l in gi.libraries.show_library(library_id, contents=True) if l['type']=='file']

tmp = hsc.create_history(name="CNV Vis")

copynumber_id = [l['id'] for l in library if 'copynumber' in l['name']]
hsc.upload_dataset_from_library(tmp['id'], copynumber_id[0])
base_id = hsc.show_history(tmp['id'], contents=True)[-1]['dataset_id']

def get_filtered(start, stop):
    global base_id, tlc, hsc, dsc
    tool_inputs = {
            'input': {
                'src': 'hda',
                'id': base_id
                },
            'header_lines': 1,
            'cond': 'c2<' + str(stop) + ' and c3>' + str(start)
            }
    tlc.run_tool(tmp['id'], 'Filter1', tool_inputs)
    filtered = hsc.show_history(tmp['id'], contents=True)[-1]
    dsc.download_dataset(filtered['id'], file_path='./data/filtered.called', use_default_filename=False, wait_for_completion=True)
    return './data/filtered.called'
