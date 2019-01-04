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
                localIdentName:'[name]_[local]_[hash:base64]'
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
                localIdentName:'[name]_[local]_[hash:base64]'
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