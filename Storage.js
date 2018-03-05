// Saves the information the local storage.
function SaveItem() {
			
	
	var name = document.forms.OrderList.name.value;
	var amount = document.forms.OrderList.amount.value;
	localStorage.setItem(name, amount);
	ShowAll();
	
}

// Allows you to edit the selected item from the local storage.
function ModifyItem() {
	var name = document.forms.OrderList.name.value;
	document.forms.OrderList.amount.value = localStorage.getItem(name);
	ShowAll();
}

// Removes the selected Item from the local storage.

function RemoveItem() {
	var name = document.forms.OrderList.name.value;
	document.forms.OrderList.amount.value = localStorage.removeItem(name);
	ShowAll();
}

// clears all the information from the local storage.
function ClearAll() {
	localStorage.clear();
	ShowAll();
}

// Displays the information after being stored.

function ShowAll() {
	if (typeof(Storage) !== "undefined") {
		var key = "";
		var list = "<tr><th>Product Name</th><th>Amount</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>Product Name</th><th>Amount</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store shopping list as your browser do not support local storage');
	}
}


// JavaScript Events

function displayInfo() {
    document.getElementById("output").innerHTML = "Information Saved!"
     document.getElementById("output").style.color = "green";
}

function infoRemoved() {
    document.getElementById("output").innerHTML = "Information Removed!"
    document.getElementById("output").style.color = "red";
    
}

function modifyInfo() {
    document.getElementById("output").innerHTML = "Modifying information..."
    document.getElementById("output").style.color = "yellow";
    
}

function alertme() {
  alert("Everything has been cleared!")
  document.getElementById("output").innerHTML = "Information cleared!"
   document.getElementById("output").style.color = "red";
}
