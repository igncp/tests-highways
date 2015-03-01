all: gems-install reports

reports: plato
	@echo 'Reports generated.'

plato: plato-backend-without-sails plato-backend-sails plato-frontend

plato-backend-without-sails:
	@node_modules/plato/bin/plato -rq -d reports/plato/backend/without-sails -x node_modules -x sails  src/backend > /dev/null

plato-backend-sails:
	@node_modules/plato/bin/plato -rq -d reports/plato/backend/sails -x node_modules src/backend/sails > /dev/null

plato-frontend:
	@node_modules/plato/bin/plato -rq -d reports/plato/frontend src/frontend > /dev/null

rm-reports: rm-plato rm-istanbul
	@echo 'The reports were removed'

rm-plato:
	@rm -rf reports/plato

rm-istanbul:
	@rm -rf reports/istanbul

gems-install:
	@bundle install > /dev/null
	@echo 'Gems installed.'

set-tests-executable:
	chmod +x tests/bin/*

extjs-port=1841
server-extjs:
	@echo 'Port: $(extjs-port). Press Ctrl-C to stop the server...'
	@node_modules/http-server/bin/http-server src/frontend/sencha-extjs -p $(extjs-port) -s --cors

# CORS enabled to be able to serve vendors resources
root-port=3000
server-root:
	@echo "Port: $(root-port). Press Ctrl-C to stop the server..."
	@node_modules/http-server/bin/http-server . -p $(root-port) -s --cors

server-reports:
	@echo 'Server listening in port 8282'
	@node_modules/http-server/bin/http-server reports -p 8282 -s -c-1