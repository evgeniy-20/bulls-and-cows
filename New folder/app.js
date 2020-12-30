function setText(id, text) {
	let elem = document.getElementById(id);
	elem.innerHTML = text;
}
setText('elem1', 'text1');
setText('elem2', 'text2');