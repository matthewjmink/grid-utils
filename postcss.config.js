const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

// Suppress the grid-gap warnings
const filteredWarnings = postcss.plugin('grid-utility-warning-cleaner', () => (css, result) => {
    result.messages = result.messages.filter(message => !(message.type === 'warning' && message.node.prop === 'grid-gap'));
});

module.exports = {
    plugins: [
        autoprefixer({
            grid: true,
            browsers: [
                '> 1%',
                'last 3 versions',
                'ie > 9'
            ]
        }),
        filteredWarnings
    ]
}
