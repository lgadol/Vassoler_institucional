# Site institucional para o Açougue e Mercado Vassoler

# Site hospedado com GitHub pages
Configurações feitas no package.json:
{
    ...
"homepage": "https://lgadol.github.io/Vassoler_institucional",
    ...

    "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }
    ...
    "devDependencies": {
    "gh-pages": "^6.3.0"
  }
}

# Adicionada arquivo ".github/workflows/deploy.yml" para subir atualizações automaticamente sem necessidade de refazer o deploy

# Comandos para rebuildar aplicação:
LIMPAR CACHE BUILD: npm -rf build
LIMPAR GH PAGES: npx gh-pages-clean
GERAR BUILD> npm run build
FAZER DEPLOY: npm run deploy

# Site usado para mudar o domínio "app.bitly.com".
https://bit.ly/acouguevassoler