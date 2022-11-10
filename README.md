
# Comandos

```bash
git init
npm init --yes
npm install git-commit-msg-linter --save-dev
echo "node_modules" > .gitignore
echo "dist" >> .gitignore
echo "node_modules" > .eslintignore
echo "dist" >> .eslintignore
npm i -D eslint-config-standard-with-typescript ts-node eslint
# Para generar archivo de configuracion typescript automaticamete
tsc --init 
# No permite realizar commit si hay algun mesaje de eslint
npx husky-init && npm install
npm i -D lint-staged
# Instalacion de JEST
npm i -D jest @types/jest ts-jest

npm i express
npm i -D supertest ts-node-dev
npm i -D @types/express @types/supertest 
npm i -D dotenv

```

# links

- [commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)
- [Javascript Standas Style](https://standardjs.com/)
- [Node Green](https://node.green/#ES2018)
- [Clase 2 Youtube](https://www.youtube.com/watch?v=xIJq9RNGsNQ&list=PLdrSYPg6-NI-fI-6bU0XlwBrkg90XMYKY&index=4)
- [Youtube - Configuracion de husky ](https://www.youtube.com/watch?v=cONX5b9MvKQ)
- [Husky](https://typicode.github.io/husky/#/)
- [Eslint](https://eslint.org/)




# Dyarlen Lber chrome-error://chromewebdata

- node --version
- npm init -y
- npm i -D typescript @types/node
- npx tsc --init
- npm i -D rimraf concurrently
- npm i module-alias
- npm i -D nodemon jest @types/jest ts-jest
- ./node_module/jest/bin/jest.js --init (y, n, node, n, v8, n)
- npm init @eslint/config
- npx husky-init && npm install
- npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
- npm husky add .husky/pre-commit "npm test"
- npm install --save-dev lint-staged
- npm install --save-dev @commitlint/{config-conventional, cli}
- npm i -D @shelf/jest-mongodb
- npm i mongodb
- npm install supertest @types/supertest --save-dev

tsconfig.json  
```json
"outDir": "./dist",
"baseUrl": "./src",
"phats": {
    "@domain/*": ["domain/*"],
    "@application/*": ["application/*"],
    "@infraestructure/*": ["infraestructure/*"],
    "@main/*": ["main/*"],
    "@test/*": ["../test/*"],
},
"rootDirs":[
    "src",
    "test"
],
"include": ["src", "test"],
"exclude": []
```
- min 11:50 -configuracion tsc y moduleNameMaper
- min 22:20 -Modificando archivo de jest para covertura
- min 34:20 -inicializando eslint
- min 44:40 -lint-stage 
- min 52:15 -congifuracionde color en husky
- min 57:00 -jest-mongodb
