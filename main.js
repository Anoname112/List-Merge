var d;
var textarea1;
var textarea2;
var textarea3;

window.onload = function () {
	d = document;
	textarea1 = d.getElementById("textarea1");
	textarea2 = d.getElementById("textarea2");
	textarea3 = d.getElementById("textarea3");
}

function clearList () {
	textarea1.value = "";
	textarea2.value = "";
	textarea3.value = "";
}

function merge (sort) {
	var textarea1array = textarea1.value.split("\n");
	var textarea2array = textarea2.value.split("\n");
	var textarea3array = [];
	
	// Get data from textarea 1
	for (var i = 0; i < textarea1array.length; i++) {
		if (textarea1array[i].length > 0 && !textarea3array.includes(textarea1array[i])) {
			textarea3array.push(textarea1array[i]);
		}
	}
	
	// Get data from textarea 2
	for (var i = 0; i < textarea2array.length; i++) {
		if (textarea2array[i].length > 0 && !textarea3array.includes(textarea2array[i])) {
			textarea3array.push(textarea2array[i]);
		}
	}
	
	// Sort data
	if (sort) {
		for (var i = 0; i < textarea3array.length - 1; i++) {
			for (var j = i + 1; j < textarea3array.length; j++) {
				if (textarea3array[j] < textarea3array[i]) {
					var temp = textarea3array[i];
					textarea3array[i] = textarea3array[j];
					textarea3array[j] = temp;
				}
			}
		}
	}
	
	textarea3.value = textarea3array.join("\n");
}
