var addItem = function( newData ) {

	var localItems = JSON.parse(localStorage.getItem('items'));
	
	if( localItems !== null ) {

		localStorage.setItem( 'items', JSON.stringify( localItems.concat( newData ) ) );
	
	} else {

		localStorage.setItem( 'items', JSON.stringify( newData ) );

	}

},

deleteItem = function( id ) {
	
	var localItems = JSON.parse(localStorage.getItem('items'));
	console.log( 'Deleting...' + localItems[id] );
	delete localItems[id];
	localStorage.setItem('items',JSON.stringify(localItems));

},

logItems = function() {

	var items = JSON.parse( localStorage.getItem( 'items' ) );
	
	if( items !== null ) {

		for( var i = 0; i < items.length; i++ ) {
			
			if( items[i] !== null ) {

				console.log( items[ i ] );

			}

		}

	} else {

		console.log( 'There are no items in local storage' );

	}

},

showItems = function() {

	var localItems = JSON.parse(localStorage.getItem('items'));

	if( localItems !== null ) {

		for( var i = 0; i < localItems.length; i++ ) {

			$("#reel").append(buildItem(localItems[i]));

		}

	}

},

buildItem = function( item ) {

	return $("<article class='item thumb' data-width='384'><h2>" + item.title + "</h2><a href='" + item.url + "'><img src='images/thumbs/02.jpg' alt=''></a></article>");

},

test = function() {

	console.log("Clear localStorage");
	localStorage.removeItem('items');

	console.log('log items');
	logItems();

	console.log('add 2 items');
	addItem(
		[{
			'id' : '1',
			'title' : 'This is a title for 1',
			'url' : 'http://www.one.com'
		},{
			'id' : '2',
			'title' : 'This is a title for 2',
			'url' : 'http://www.two.com'
		}]
	);

	console.log('Show items in page');
	showItems();

};

showItems();




