init:
	virtualenv env
	env/bin/pip install -r requirements.txt

reload:
	kill -INT `cat wsgi.pid`
	uwsgi --plugin python --ini wsgi.ini

stop:
	kill -INT `cat wsgi.pid`
	echo "" > wsgi.pid

start:
	uwsgi --plugin python --ini wsgi.ini

clean:
	rm -rf env
	rm wsgi.{log,pid}
