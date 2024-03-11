import { Bench } from 'tinybench';
import facetxt from './../src/index.js';

const REPORT_FILE = './benchmark/benchmark.txt';

const bench = new Bench({ time: 100 });

bench
  .add('random face', () => {
      //console.log(facetxt.rand)
      facetxt.rand;
  })
  .add('print all the faces', () => {
      //console.log(facetxt.all);
      facetxt.all;
  })
  .add('get one by name; more than one', () => {
      facetxt.like('troubled');
  })
  .add('get one by name; just one', () => {
      facetxt.like('cthulhu');
  })
   
  
  .todo('unimplemented bench')

await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
await bench.run();

console.table(bench.table());

