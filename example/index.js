const Splitter = require('../src');

(() => {
    const input = 'ซ.9 แม่สา แม่ริม เชียงใหม่ 50180';
    console.time('execution time')
    const result = Splitter.split(input);
    console.log('result :', { input, result });
    console.timeEnd('execution time')
})();