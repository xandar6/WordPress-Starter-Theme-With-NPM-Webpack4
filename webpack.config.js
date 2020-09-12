const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "production",
    context: path.resolve(__dirname, "assets"),
    // entry — name of the top level file or set of files that we want to include in our build, can be a single file or an array of files. In our build, we only pass in our main file (app.js).
    // output — an object containing your output configuration. In our build, we only specify the filename key (bundle.js) for the name of the file we want Webpack to build.
    output: {
        //filename - configure custom file name. default is main.js
        filename: "main.bundle.js",
        //path - configure custom path. default is root dir
        path: path.resolve(__dirname, "assets/dist"),
    },
    /*
    With watchmode, Webpack will watch your files and when one of them changes, it will immediately rerun the build and recreate your output file.
    After watch is set to true, when you run the webpack command, webpack will rebuild your bundle when any of your files change.
    */
    //watch: true,

    module: {
        rules: [

            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "main.bundle.css"
        })
    ],

}