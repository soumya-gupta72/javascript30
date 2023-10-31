let name1 = {
    firstName: 'Aradhana',
    lastName: 'Kumari',
};

let name2 = {
    firstName: 'Anjali',
    lastName: 'Mishra',
};

let printDetails = function(hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}

//call method
printDetails.call(name1, 'Lucknow', 'Uttar Pradesh');
printDetails.call(name2, 'Bhopal', 'Madhya Pradesh');

//apply method
printDetails.apply(name1, ['Lucknow', 'Uttar Pradesh']);
printDetails.apply(name2, ['Bhopal', 'Madhya Pradesh']);

//bind method
let print = printDetails.bind(name2, 'Deharadun', 'Uttarakhand');
print();