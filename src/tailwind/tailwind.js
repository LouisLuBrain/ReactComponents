module.exports = {
  theme: {
    outline: ['none'],
    extend: {
      colors: {
        cyan: '#4dc0b5',
      }
    },
    borderWidth:{
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
    },
    flexGrow: {
      '0': 0,
      default: 1,
      '2': 2,
    },
    inset: {
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-1': '-1rem'
    },
    screens: {
      'sm': {'max': '640px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'}
    }
  },
  variants: {
    backgroundColor: ['after','hover','focus','before'],
    position: ['after','hover','focus','before'],
    inset: ['after','hover','focus','before'],
    margin: ['after','hover','focus','before'],
    padding: ['after','hover','focus','before'],
    borderWidth: ['after','hover','focus','before'],
    borderColor: ['after','hover','focus','before'],
    width: ['after', 'before'],
    height: ['after', 'before']
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`
        })
      })
    },
    function({ addVariant, e }) {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`
        })
      })
    }
  ]
}
