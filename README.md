# vueridian: The Viridian Network's Frontend

This is a Progressive Web App (PWA) powered by Vue.js.

## Resources:

* https://vuejs.org/v2/guide/installation.html
* https://cli.vuejs.org/guide/installation.html
* https://cli.vuejs.org/guide/creating-a-project.html#vue-create
* https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
* https://blog.sicara.com/a-progressive-web-application-with-vue-js-webpack-material-design-part-1-c243e2e6e402

## First install

```
sudo npm install -g @vue/cli
vue create vueridian
```

Choose `Manually select features`, then pick: (in addition to Babel and Linter)

- PWA Support
- Router
- Unit Testing

Use history mode for router? yes (default).

Pick a linter: ESLint + Prettier.

Lint on save.

Pick a unit testing solution: Mocha + Chai.

Where do you prefer placing config? In dedicated config files.

Save this as a preset for future projects? No.

Pick the package manager to use when installing dependencies: NPM.

You may add a feature later, e.g. via:

```
vue add vuex
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

This writes the install into a directory `dist`.

#### Deployment

Just copy the `dist` directory to your web server.

If the app shall be deployed not directly at the root of your
domain, e.g. at `www.your-site.org`, but rather under
`www.your-site.org/app`, you must set the `publicPath` appropriately
in the `vue.config.js`: (default value is '/', see
https://cli.vuejs.org/config/#publicpath)

```
// vue.config.js
module.exports = {
  publicPath: '/app/',
  ...
}
```

When using the vue-router history mode for nice normal-looking URLs,
you must also configure your web server properly to avoid 404 errors
on page refresh (see https://router.vuejs.org/guide/essentials/history-mode.html):

nginx:
```
location /app/ { # or use 'location /' if your app is at the domain root
  try_files $uri $uri/ /app/index.html; # or use '/index.html' if your app is at the domain root
}
```

Apache:
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /app/ # or use 'RewriteBase /' if your app is at the domain root
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /app/index.html [L] # or use '/index.html' if your app is at the domain root
</IfModule>
```

### Run your tests
```
npm run test
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Practical command for devlopment
Use this e.g. in the terminal of VS Code to do both linting and compiling:
```
npm run lint; npm run serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Add more dependencies

For tour guide: (https://kamranahmed.info/driver.js/#)
```
npm install driver.js
```

For modal: (https://kouts.github.io/vue-modal/demo/installation/)
```
npm i @kouts/vue-modal --save
```
