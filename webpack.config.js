const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');
const fs = require('fs');

let jsFilesToAdd = ['./js/image_uploader/imageUploadIntegrationArray.js',
'./js/image_uploader/imageuploader.js',
'./js/image_uploader/filepondIntegration.js'
];

// const jsFolderPath = path.resolve(__dirname, './js');
// const subfolders = fs.readdirSync(jsFolderPath);

// subfolders.forEach(function(subfolder) {
//   const subfolderPath = path.join(jsFolderPath, subfolder);

//   if (fs.statSync(subfolderPath).isDirectory()) {
//     const files = fs.readdirSync(subfolderPath);

//     files.forEach(function(file) {
//       const filePath = path.join(subfolderPath, file);

//       if (path.extname(filePath) === '.js') {
//         jsFilesToAdd.push(path.relative('./src', filePath));
//       }
//     });
//   }
// });

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    bundle: jsFilesToAdd
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
};
