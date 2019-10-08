function drawTable() {
	var height = document.getElementById("height").value;
	var width = document.getElementById("width").value;
	var unfilledColor = "#565656";

	if(height === "") {
		height = 10;
	}

	if(width === "") {
		width = 10;
	}

	var gameSpace = document.getElementById("gameSpace");
	var table = document.createElement("table");
	table.setAttribute("id", "golTable");
	table.setAttribute("cellpadding", "10");

	gameSpace.innerHTML = "";
	gameSpace.appendChild(table);

	for(var i = 0; i < height; ++i) {
		var tr = document.createElement("tr");
		tr.setAttribute("id", "trgt" + i.toString());
		gameSpace.appendChild(tr);
		for(var j = 0; j < width; ++j) {
			$("#trgt" + i.toString()).append(document.createElement("td"));
		}
	}

	var table_datas = document.getElementsByTagName("td");
	var w = $(document).width() / width;
	var h = ($(document).height() - 110)/ height;

	for(var td = 0; td < table_datas.length; ++td) {
		table_datas[td].style.width = w;
		table_datas[td].style.height = h;
		table_datas[td].style.backgroundColor = unfilledColor;
	}

}