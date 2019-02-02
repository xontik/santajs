// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  globals: {
    gql:true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'graphql'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // "graphql/template-strings": ['error', {
    //   // Import default settings for your GraphQL client. Supported values:
    //   // 'apollo', 'relay', 'lokka', 'fraql', 'literal'
    //   env: 'apollo',
    //
    //   // Import your schema JSON here
    //   // schemaJson: require('./schema.json'),
    //
    //   // OR provide absolute path to your schema JSON (but not if using `eslint --cache`!)
    //   // schemaJsonFilepath: path.resolve(__dirname, './schema.json'),
    //
    //   // OR provide the schema in the Schema Language format
    //   // schemaString: printSchema(schema),
    //
    //   tagName: 'gql',
    // }]

  }
}
