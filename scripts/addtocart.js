

var d = document;

function AddEvent(elem, type, handler){
	if(elem.addEventListener){
		elem.addEventListener(type, handler, false);
	} else {
		elem.attachEvent('on'+type, function(){ handler.call( elem ); });
	}
	return false;
}

function getCartData(){
	return JSON.parse(localStorage.getItem('cart'));
}


function setCartData(o){
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}


function countCartData(object){
	var count = 0;
	for(var i in object){ count++; }

	return count;
}


function addToCart(e, counter){
	this.disabled	= true; 												
	var cartData	= getCartData() || {}, 									
		parentBox	= this.parentNode.parentNode, 							
		itemId		= this.getAttribute('data-id'),							
		itemAmount	= parseInt(parentBox.querySelector('.amount').value),	
		itemCost	= parseInt(parentBox.querySelector('.itemCost').innerHTML), 
		itemTitle	= parentBox.querySelector('.itemTitle').innerHTML;	

	itemCost += '';
	if(cartData.hasOwnProperty(itemId)){ 
	
		cartData[itemId][1] += itemAmount;
	} else { 
		
		cartData[itemId] = [itemTitle, itemAmount, itemCost];
	}

	if(!setCartData(cartData)){
		
		this.disabled = false; 
	}

	cartCount(counter);

	alert('Item "'+ itemTitle +'" added in cart with ' + itemAmount + '" amount.');

	return false;
}




function cartCount(e){
	var cartData = getCartData(), 
		totalItems = 0,
		countElement = d.getElementById('cartCounter');

	if(cartData !== null){
		for(var items in cartData){
			for (var i = 0; i < cartData[items].length; i++) {
				if(i==1){ totalItems = totalItems + cartData[items][1]; }
			}
		}
	}

	return countElement.innerHTML = totalItems;
}


function openCart(cart){

	var cartData = getCartData(), 
		totalItems = '',
		cartCont = cart;

	cartCont.innerHTML = '';

	if(cartData !== null){
		totalItems = '<table class="table table-bordered table-hover"><tr><th></th><th></th><th class="text-right"></th></tr>';
		for(var items in cartData){
			totalItems += '<tr>';
			for(var i = 0; i < cartData[items].length; i++){
				totalItems += '<td>' + cartData[items][i] + '</td>';
			}
			totalItems += '</tr>';
		}
		totalItems += '</table>';
		cartCont.innerHTML = totalItems;
	} else {
	
		cartCont.innerHTML = '<div class="alert alert-warning"></div>';
	}
	return false;
}




d.body.onload = function(){
	var itemBox		= d.querySelectorAll('.itemBox'),		
		formSend	= d.querySelectorAll('.orderHidden'),	
		cartCont	= d.getElementById('cartContent'), 		
		inputNumber = d.querySelectorAll('.input-number'),	
		clearCart 	= d.getElementById('clear_cart'),
		button		= d.getElementById('openCart');

	
	for(var i = 0; i < itemBox.length; i++){
		AddEvent(itemBox[i].querySelector('.addItem'), 'click', addToCart);
	}

	for (var i = 0; i < inputNumber.length; i++) {
		AddEvent(inputNumber[i], 'click', numberInput);
	}

	cartCount();


	if( cartCont ){ 
		openCart( cartCont );
	}
	if( button ){
		AddEvent( button , 'click', function(){
			openCart(cartCont);
		} );
	}


	if(clearCart){
		AddEvent(clearCart, 'click', function(e){
			localStorage.removeItem('cart');
			setTimeout(cartCount(), 10);
			openCart( cartCont );
		});
	}

}


function numberInput(element, type){
	var type	= parseInt(this.getAttribute('data-role')),
		parent	= this.parentNode,
		input	= parent.querySelector('input'),
		inpVal	= parseInt(input.value),
		inpMin	= input.getAttribute('min');
	if((type == -1) && (inpVal == inpMin)) { return false; }
	input.value = inpVal + type;
	return false;
}