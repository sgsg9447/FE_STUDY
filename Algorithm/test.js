const foo = () => console.log('foo');
const bar = () => console.log('bar');

setTimeout(foo, 0);
bar();