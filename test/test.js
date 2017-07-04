
const assert = require('chai').assert;
import {shoppingcart} from '../src/main';
describe('Object Oriented Programming', ()=>{
    describe('Create an instance of a class', ()=>{
        it('Create an instance of the class shoppingcart when instanciated', ()=>{
            let basic5 = new shoppingcart;
            let isTypeOf = basic5 instanceof shoppingcart 
            assert.equal(isTypeOf,true);
        });//end of it block
        });//end of inner describe block
        });//end of outter describe block