module.exports = {
  plugins: [
    require('postcss-import')({
      plugins: [
      ],
      path: ['./node_modules'],
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('precss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    })
  ]
}
