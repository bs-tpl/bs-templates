module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      label: 'Project name',
      default: 'bs-umi-dva-antd-mobile-template'
    },
    description: {
      type: 'string',
      required: true,
      label: 'Project description',
      default: 'bs-umi-dva-antd-mobile-template'
    },
    author: {
      type: 'string',
      label: 'Author'
    },
    license: {
      type: 'string',
      label: 'License',
      default: 'MIT'
    }
  },
  filters: {

  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{/inPlace}}'
}