const array3 = [1,2,[3,4,[5,6]]]
const flatmap3 = array3.flatMap(creature => creature +  6)
console.log(flatmap3)