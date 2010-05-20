/*
---
description: List Columnator Class. Takes a single list and converts it into multiple columns

license: MIT-style

authors:
- Matthew Wells

requires:
- core/1.2.1:*

provides: [List_Columnator]

...
*/

/*
---
description: List Columnator Class. Takes a single list and converts it into multiple columns

license: MIT-style

authors:
- Matthew Wells

requires:
- core/1.2.1:*

provides: [List_Columnator]

...
*/

var List_Columnator = new Class({

	Implements: [Options],
	
	options: {
		columns: 3,
		style:'vertical'
	},
	
	initialize: function(list, options)
	{
		this.setOptions(options);
		this.list_orig = $(list);
		this.list = this.list_orig.clone();

		this.columns = $A([]);

		this.generate();
		this.list_orig.dispose();
	},
	
	generate: function()
	{
		var i = this.options.columns;
		for (i; i > 0; i--){
			var col = new Element("ul",{'class':'col-'+i})
			this.columns[i] = col;

			this.get_items(this.options.style, i).each(function(item){
				col.adopt(item)
			}, this)

			col.injectAfter(this.list_orig);
		}
	},

	get_items:function(style, i)
	{
		var style = style;
		var i = i;
		if (style == 'horizontal') {
			var c = 0;
			var filtered = this.list.getChildren().filter(function(item, index) {
				c++;
				if (c == i+1) c = 1;
				return c == i;
			},this)
		} else {
			var num = Math.ceil(this.list_orig.getChildren().length / this.options.columns);
			var filtered = this.list.getChildren().splice(num*(i-1),6);
		}
		return filtered;
	}
})