install:
	npm install
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
publish:
	sudo npm publish --dry-run
lint: 
	npx eslint . --fix
	