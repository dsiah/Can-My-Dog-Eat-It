// (TODO) Replace db with full index json "db.json"
var db = [{
  id: 0,
  food: 'Chocolate',
  info: 'Nope.'
},{
  id: 1,
  food: 'Avocado',
  info: 'Hell No!'
},{
  id: 2,
  food: 'Dog Food',
  info: 'duh...'
}, {
  id: 3,
  food: 'Coffee',
  info: 'No, but Starbucks probably has dog biscuits for sale.'
}];

var options = {
  keys: ['food'],   // keys to search in
}

var f = new Fuse(db, options);

function fuzzyFind() {
  // Search DB for terms that could match and create search result buttons
	var term         = document.getElementById('search').value;
	var result       = f.search(term);
	var target       = document.getElementById('result-box');

  target.innerHTML = ""; // Clear div text (todo find more efficient way)
  
  if (term.length > 0) {
    for (var res in result) {
      var bt = document.createElement('button');
      bt.setAttribute('foodid', result[res].id);
      bt.addEventListener('click', requestItem);
      bt.innerHTML = result[res].food;
      target.appendChild(bt);
    }
  }
}

function requestItem(event) {
  var target = document.getElementById('showcase');
  var data   = db[Number(this.getAttribute('foodid'))];

  target.innerHTML = "";

  var title = document.createElement('h3'),
      body  = document.createElement('h2'),
      btn   = document.createElement('button');

  btn.setAttribute('class', 'roundbtn');
  title.innerHTML = data.food;
  body.innerHTML  = data.info;
  btn.innerHTML   = "X";
  btn.addEventListener('click', clear);

  target.appendChild(btn);
  target.appendChild(title);
  target.appendChild(body);

}

function clear(event) {
  document.getElementById('showcase').innerHTML = "";
}