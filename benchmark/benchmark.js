import { Bench } from 'tinybench';
import facetxt from './../src/index.js';

const bench = new Bench({ time: 100 });

bench
  .add('random face', () => {
      facetxt.rand;
  })
  .add('get array with all the faces', () => {
      facetxt.all;
  })
  .add('get all the faces for pretty print', () => {
      facetxt.list;
  })
  .add('get one by name; more than one', () => {
      facetxt.like('troubled');
  })
  .add('get one by name; just one', () => {
      facetxt.like('cthulhu');
  })
  .add('get array of faces by name', () => {
      facetxt.likes('troubled');
  });

await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
await bench.run();

console.table(bench.table());

