// es10
//.flat()

const array  = [1,2,3,4,5]
array.flat() // this return the same thing

// now let repeat it with nested arrays
const array1 = [1,[2,3],[4,5]]
array1.flat() // this returns [1,2,3,4,5]

const array2 =[1,2,[3,4,[5,6]]]
array2.flat() // this return [1,2,3,4,5,6]

const array3 = [1,2,[3,4,[5,6]]]
array3.flat(2) // in the bracket include the steps e.g, 1 or 2 or 3

const entries =['bob','sam',,,,,,,,'hilmaka']
entries.flat()

// flatmap : 
const flatmap3 = array3.flatMap(creature => creature +  6)
console.log(flatmap3)
// flatmap allows us to use the basic flat to index a results to depth of one

