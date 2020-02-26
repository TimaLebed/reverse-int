module.exports = n => +String(n < 0 ? n * -1 : n).split('').reverse().join('');
