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
