module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(ttf|eot|woff|woff2)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/'
                        }
                    }]
                }
            ]
        }
    }
};
