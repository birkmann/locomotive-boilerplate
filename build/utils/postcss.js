/**
 * @file If available, returns the PostCSS Processor creator and
 * any the Autoprefixer PostCSS plugin.
 */

let postcss, autoprefixer;

try {
    postcss = await import('postcss');
    postcss = postcss.default;

    autoprefixer = await import('autoprefixer');
    autoprefixer = autoprefixer.default;
} catch (err) {
    postcss      = null;
    autoprefixer = null;
}

export default postcss;
export const plugins = [
    autoprefixer,
];
export {
    autoprefixer
};
