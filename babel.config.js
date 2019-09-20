module.exports = {
  presets: [
    "@babel/preset-env", //cuida das funcionalidades do javascript que o navegador não entende
    "@babel/preset-react" // cuida das funcionalidades específicas do React (como JSX)
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};