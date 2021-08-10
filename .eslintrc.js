module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // "parser": "vue-eslint-parser", // Most eslint-plugin-vue rules require vue-eslint-parser to check <template> ASTs
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    /**
     * "规则名": [规则值, 规则配置]
     * 'off'或0 - 关闭规则
     * 'warn'或1 - 开启规则，使用警告级别的错误: warn(不会导致程序退出)
     * 'error'或2 - 开启规则，使用错误级别的错误: error(当被触发的时候，程序会退出)
     */
    "no-empty": ["error", {   // 不允许空块语句
      "allowEmptyCatch": true   // 允许空catch子句
    }],
    "no-irregular-whitespace": 1,  // 空格报错检查，默认是error
    "no-useless-escape": 0,         // 禁用不必要的转义符
    "vue/no-v-html": 0              // 禁止使用v-html（预防xss攻击）
  }
}
