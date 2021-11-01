# This repo highlights jest performance compared to the mocha

Test file consist from basic `assert(someConst, number);` and the `someConst` is imported from file `src/root.js` which
consist of 5000 imports with this `someConst` definition.

To get time performance overview it will be enough sequentially run:
```
time npm run jest
time npm run mocha
time npm run jasmine 
```
This will exec 100 test and output time.