module.exports = {
  prompts: {
    templateType: {
      type: list,
      message: 'Project templateType',
      choices: ['vue','react','angular']
    },
    templates:{
      type: list,
      message: 'Project template',
      choices: function(){
        console.log(1)
        console.log(templateType)
      }
    },
    type:{
      type: list,
      message: 'Please select project type',
      choices: ['模板(scaffolds)','模块(modules)']
    },
    mudules:{
      when:templateType==='react'&& type==='mudules',
      message: 'Please project modules',
      choices: ['aa','bb','cc']
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