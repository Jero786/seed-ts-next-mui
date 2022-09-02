### Requirements:

```
node -v // `18.0.0`
npm -v  // `8.6.0`
```

An easy way to install Node & Npm in Mac environment is using [nvm](https://formulae.brew.sh/formula/nvm):

```
brew install nvm
nvm install 18.0.0
nvm use 18.0.0
```

### Setup project

```
npm install
npm run prepare
```

### Start dev

```
npm run dev
```

### Build

```
npm run build
```

### Unit Test

```
npm run test:unit
```

If you want to execute specific test

```
npm run test:unit -- [test name] // eg: `npm run test -- box`
```

### End-to-End test

```
npm run:e2e
```

### Know issues

> hint: The '.husky/pre-commit' hook was ignored because it's not set as executable.

```
chmod ug+x .husky/*
```
