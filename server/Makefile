init:
	virtualenv env -p python2.7
	env/bin/pip install -r requirements.txt

reload:
	kill -INT `cat wsgi.pid`
	uwsgi --plugin python2 --ini wsgi.ini

stop:
	kill -INT `cat wsgi.pid`
	echo "" > wsgi.pid

start:
	uwsgi --plugin python2 --ini wsgi.ini

clean:
	rm -rf env
	rm wsgi.{log,pid}
