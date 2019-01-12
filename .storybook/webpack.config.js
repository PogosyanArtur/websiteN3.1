module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName:'[folder]__[local]--[hash:base64:5]'
              },
            },
          ],
        },
        {
          test: /\.module\.scss$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName:'[folder]__[local]--[hash:base64:5]'
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ],
    },
  };