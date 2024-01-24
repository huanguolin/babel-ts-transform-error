
const babel = require("@babel/core");

console.log('start');
babel.transformFile('src/test.ts', {
    presets: ["@babel/preset-typescript"],
    filename: 'src/test.ts',
}, function (err, result) {
    if (err) {
        console.error(err);
    } else {
        console.log(result.code);
    }
});
console.log('done');