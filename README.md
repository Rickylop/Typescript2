
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

```

# links

- [commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)
- [Javascript Standas Style](https://standardjs.com/)
- [Node Green](https://node.green/#ES2018)
- [Clase 2 Youtube](https://www.youtube.com/watch?v=xIJq9RNGsNQ&list=PLdrSYPg6-NI-fI-6bU0XlwBrkg90XMYKY&index=4)
- [Youtube - Configuracion de husky ](https://www.youtube.com/watch?v=cONX5b9MvKQ)
- [Husky](https://typicode.github.io/husky/#/)
- [Eslint](https://eslint.org/)
