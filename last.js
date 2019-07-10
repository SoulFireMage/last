function last(list){
	var last = arguments[arguments.length - 1];
	return last[last.length - 1] || last;
}

//Alternate syntax = later version of Javascript
//let last = list => list.slice(list.length-1);
