module.exports = {
  prompts: {
    templateType: {
      type: 'list',
      message: 'Project templateType',
      choices: ['vue','react','angular']
    },
    templates:{
      type: 'list',
      message: 'Project template',
      when:'templateType==="react"',
      choices: ['bs-umi-dva-antd-mobile-template','bs-umi-dva-antd-pc-template']
    },
    type:{
      type: 'list',
      message: 'Please select project type',
      choices: ['模板(scaffolds)','模块(modules)']
    },
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
    'react/**/*': 'templateType==="react"',
    'vue/**/*': 'templateType==="vue"',
    'angular/**/*': 'templateType==="angular"',
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{/inPlace}}'
}