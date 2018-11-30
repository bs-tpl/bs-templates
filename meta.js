module.exports = {
  prompts: {
    type: {
      type: 'checkbox',
      label: 'type',
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
    template: {
      type: 'checkbox',
      label: 'template',
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
          name: 'bs-umi-dva-antd-mobile-template',
          value: 'bs-umi-dva-antd-mobile-template',
          short: 'bs-umi-dva-antd-mobile-template',
        },
        {
          name: 'bs-umi-dva-antd-pc-template',
          value: 'bs-umi-dva-antd-pc-template',
          short: 'bs-umi-dva-antd-pc-template',
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
    'react/**/*': 'type.react',
    'vue/**/*': 'type.vue',
    'angular/**/*': 'type.angular',
    'react/bs-umi-dva-antd-mobile-template/**/*': 'template.bs-umi-dva-antd-mobile-template',
    'react/bs-umi-dva-antd-pc-template/**/*': 'template.bs-umi-dva-antd-pc-template',
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev{{/inPlace}}'
}