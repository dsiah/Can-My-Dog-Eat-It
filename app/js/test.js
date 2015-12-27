// (TODO) Replace db with full index json "db.json"
var db = [{
  id: 1,
  food: 'Chocolate',
  info: 'Nope.'
},{
  id: 2,
  food: 'Avocado',
  info: 'Hell No!'
},{
  id: 3,
  food: 'Dog Food',
  info: 'Of course they can eat this you dummy!'
}];

var options = {
  keys: ['food'],   // keys to search in
}

var f = new Fuse(db, options);

function fuzzyFind() {
	var term         = document.getElementById('search').value;
	var result       = f.search(term);
	var target       = document.getElementById('result-box');

	target.innerHTML = JSON.stringify(result);
}