export function buildFontsLoader() {
    return {
        test: /\.(woff2?|ttf|eot|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name][ext]', // положит в dist/fonts
        },
    };
}
