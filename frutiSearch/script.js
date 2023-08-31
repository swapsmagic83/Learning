const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

input.addEventListener('keyup', searchHandler);
function search(str) {
	let results = [];
	if(str){
		results= fruit.filter((fruitName)=>{
			return fruitName.toLowerCase().includes(str.toLowerCase())
		})
	}
	// TODO

	showSuggestions(results);
}

function searchHandler(e) {
	e.target.value=input.value
	str= e.target.value
	search(str)
	// TODO
}

function showSuggestions(results,inputVal) {
	suggestions.innerHTML=''
	inputVal=input.value

	results.forEach((fruitName)=>{
	if(fruitName.toLowerCase().includes(inputVal)){
			let li=document.createElement('li')
			li.innerHTML=fruitName
			suggestions.appendChild(li)
	
	}
	})
	
 	// TODO
}
suggestions.addEventListener('click', useSuggestion);
function useSuggestion(e) {
	search(str)
	parentElement=e.target
	input.value=parentElement.innerHTML
	suggestions.innerHTML=''
		// TODO
}



