# Flattening an array

Write an algorithm to flatten an arbitrarily nested array of values.

```
[ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ]
```

If your language of choice includes a flattening function, please implement your own.

Asumptions
----------
If the input is not an array, it will return the input.
If the input contains some empty array in any depth of the main array, this won't be shown in the output.

Setup exercise
==============

To setup the project run the following commands: 
1. Clone the project from GitHub in your project folder type the following command

```$ git clone https://github.com/NEOLPAR/flattening-array.git```

2. Go to the directory and install dependencies 
```
$ cd flattening-array
$ npm install
```

3. Run `npm test` to run all tests

TESTS 
=====

I thought to use Jest or Mocha for testing, I wanted to group them and not just create a list of assets to make tests
easier to read and maintain.
I decided to use Jest rather than Mocha because for this exercise we don't need asynchronous test, and Jest is fair
enough. Jest will also run tests automatically after each change.