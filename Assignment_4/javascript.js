function add(id){
  var item = id;
  console.log(item);
  var ul = document.getElementById("items");
  if(localStorage.arr === undefined){
    localStorage.arr = [item.value];
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
  }else if(localStorage.arr.indexOf(item.value) === -1){
    var array = localStorage.arr;
    console.log(item.value);
    array = array.concat([item.value]);
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item.value));
    ul.appendChild(li);
    localStorage.arr = array;
  }
}

function remove(id){
  var item = id;
  var array = localStorage.arr;
  var ul = document.getElementById("items");
  var li = document.createElement("li");
  li = document.getElementById(item.value);
  ul.removeChild(li);
  array.slice(array.indexOf("item.value"), 1);
  localStorage.arr = array;
}

function loadWishlist(){
  var ul = document.getElementById("items");
  var li = document.createElement("li");
  for(i = 0; i < localStorage.arr.length; i++){
    li.appendChild(document.createTextNode(localStorage.arr[i]));
    ul.appendChild(li);
  }
}
