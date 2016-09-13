var addItem = function( newData ) {

	var localItems = JSON.parse(localStorage.getItem('items'));
	
	if( localItems !== null ) {

		localStorage.setItem( 'items', JSON.stringify( localItems.concat( newData ) ) );
	
	} else {

		localStorage.setItem( 'items', JSON.stringify( newData ) );

	}

	showItems();
	parallelism.initDesktop();

},

deleteItem = function( index ) {
	
	var localItems = JSON.parse(localStorage.getItem('items'));
	localItems.splice(index,1);
	localStorage.setItem('items',JSON.stringify(localItems));
	parallelism.initDesktop();

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

	$(".link").remove();

	var localItems = JSON.parse(localStorage.getItem('items'));

	if( localItems !== null ) {

		for( var i = 0; i < localItems.length; i++ ) {

			$("#reel").append( buildItem(localItems[i],i) );

		}

	}

},

buildItem = function( item, id ) {

	var src = 'https://logo.clearbit.com/' + item.url + "?size=384";
	return $("<article class='item link thumb' data-width='384'><h2>" + item.title + " <a class='remove-item' data-item-id='" + id + "' href='#'>Remove</a></h2><a href='" + item.url + "'><img class='image' src='" + src + "' alt='' /></a></article>");

},

test = function() {

var dummyData = [{
		'title' : 'This is a title for 1',
		'url' : 'http://www.one.com'
	},{
		'title' : 'This is a title for 2',
		'url' : 'http://www.two.com'
	},{
		'title' : 'This is a title for 3',
		'url' : 'http://www.three.com'
	}
];
	console.log("Clear localStorage");
	localStorage.removeItem('items');

	console.log('log items (should be 0)');
	logItems();

	console.log('add 3 items');
	addItem(dummyData);

	console.log('log items (should be 3)');
	logItems();

	console.log("delete item 1 (array index 0)");
	deleteItem("0");

	console.log('log items (should be 2)');
	logItems();

	console.log("show items on page (shoudl show 2)");
	showItems();

};







