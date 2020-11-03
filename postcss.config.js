module.exports = {
  plugins: [
    //require('postcss-import'),
    require('precss'),
    require('tailwindcss'),
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
