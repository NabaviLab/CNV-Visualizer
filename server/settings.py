import os

X_DOMAINS = '*'

URL_PREFIX = 'cnvvis'

MONGO_HOST = os.environ.get('MONGO_HOST', 'localhost')
MONGO_PORT = os.environ.get('MONGO_PORT', 27017)
MONGO_USERNAME = os.environ.get('MONGO_USERNAME', 'user')
MONGO_PASSWORD = os.environ.get('MONGO_PASSWORD', 'user')
MONGO_DBNAME = os.environ.get('MONGO_DBNAME', 'evedemo')

RESOURCE_METHODS = ['GET', 'POST']

ITEM_METHODS = ['GET', 'PATCH']

CACHE_CONTROL = 'max-age=20'
CACHE_EXPIRES = 20

tests = {
        'item_title': 'test',
        'schema': {
            'firstname': {
                'type': 'string',
                'minlength': 1,
                'maxlength': 10,
                },
            'lastname': {
                'type': 'string',
                'minlength': 1,
                'maxlength': 15,
                'required': True,
                'unique': True,
                },
            'role': {
                'type': 'list',
                'allowed': ['author', 'contributor', 'copy'],
                },
            }
        }

DOMAIN = {'tests': tests}
