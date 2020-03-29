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
npm install -g @vue/cli
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
