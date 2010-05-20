ListColumnator
===========

Small plugin to turn a single list into multiple columns. Supports configurable number of columns and horizontal or vertical layout.

See included demo for detailed usage instructions

![Screenshot](http://github.com/ninjapenguin/ClickableTableRows/raw/master/Images/lc.png)

How to use
----------

To use the plugin simply instantiate the class and give it the id of the target list.

	#JS
	window.addEvent('domready', function(){
		var ctr = new List_Columnator('list-id', {columns:3, style:'vertical'});
	})

Thats all!

Known Issues
-----------------
There are no knows issues at this time.

The plugin has been tested in Safari, Firefox, Chrome and IE.

Any feedback greatly appreciated!