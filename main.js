var d;
var ta1;
var ta2;
var ta3;

window.onload = function () {
	d = document;
	ta1 = d.getElementById("textarea1");
	ta2 = d.getElementById("textarea2");
	ta3 = d.getElementById("textarea3");
}

function clearList () {
	ta1.value = "";
	ta2.value = "";
	ta3.value = "";
}

function merge (sort) {
	var ta1array = ta1.value.split("\n");
	var ta2array = ta2.value.split("\n");
	var ta3array = [];
	
	// Get data from textarea 1
	for (var i = 0; i < ta1array.length; i++) {
		if (ta1array[i].length > 0 && !ta3array.includes(ta1array[i])) {
			ta3array.push(ta1array[i]);
		}
	}
	
	// Get data from textarea 2
	for (var i = 0; i < ta2array.length; i++) {
		if (ta2array[i].length > 0 && !ta3array.includes(ta2array[i])) {
			ta3array.push(ta2array[i]);
		}
	}
	
	// Sort data
	if (sort) {
		for (var i = 0; i < ta3array.length - 1; i++) {
			for (var j = i + 1; j < ta3array.length; j++) {
				if (ta3array[j] < ta3array[i]) {
					var temp = ta3array[i];
					ta3array[i] = ta3array[j];
					ta3array[j] = temp;
				}
			}
		}
	}
	
	ta3.value = ta3array.join("\n");
}