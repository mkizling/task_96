var list = document.getElementById('list')

var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	list_a = document.getElementsByTagName('li')
	length = list_a.length;
	var element = document.createElement('li');
	var t = document.createTextNode('item ' + length);
	element.appendChild(t);
	list.appendChild(element);
})