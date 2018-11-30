module.exports = {
  prompts: {
    templateType: {
      type: 'checkbox',
      label: 'templateType',
      message:
        'Please select libaries which you will use in this material source.',
      required: true,
      validate: (answer) => {
        if (answer.length < 1) {
          return 'It must be at least one';
        }
        return true;
      },
      choices: [
        {
          name: 'React (https://github.com/facebook/react)',
          value: 'react',
          short: 'React',
        },
        {
          name: 'Vue (https://github.com/vuejs/vue)',
          value: 'vue',
          short: 'Vue',
        },
      ],
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
    'react/**/*': 'templateType.react',
    'vue/**/*': 'templateType.vue',
    'angular/**/*': 'templateType.angular'
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{/inPlace}}'
}