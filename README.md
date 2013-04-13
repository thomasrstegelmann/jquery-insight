jquery-insight
==============

## Synopsis

Determine whether any of the matched elements are located within the browser's viewport and visible. 

## Demo
http://thomasrstegelmann.github.com/jquery.insight.html

## To Do

* I'll add the ability to add to callbacks that will fire if the element is in sight or not.

## Installation

Download and add to your website. You can you check using the insight() method. You can modify the sensisitiy by passing a number.

## API Reference

Not yet

## Tests

Not yet

## Code Example

```html
<!DOCTYPE html>
<html>
<head>
<style>
  div { background: #F6D7F6; height:400px; }
	div.insight { background: #D6F4DE; }
</style>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="jquery.insight.js"></script>
</head>
<body>
	<div>First paragraph</div>
	<div>Second paragraph</div>
	<div>Third paragraph</div>
	<div>Fourth paragraph</div>
	<div>Fifth paragraph</div>
	<script>		
		$(window).on('load scroll resize' ,function () {
			$("div").each(function () {
				if($(this).inSight(100)) {
					$(this).addClass('insight');
				}
			});
		});
	</script>
</body>
</html>
```

## Contributors

Nobody

## License

It's free. Download it. Steal it. Modify it.
