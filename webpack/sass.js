module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.(scss|sass)$/,
                    include: paths,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    }
};
