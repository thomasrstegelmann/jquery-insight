jquery-insight
==============

## Synopsis

Determine whether any of the matched elements are located within the browser's viewport.

## Demo
http://thomasrstegelmann.github.com/jquery.insight.html

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

## Motivation

I required a simple method 

## Installation

Download and add to your website. You can you check using the insight() method. You can modify the sensisitiy by passing a number.

## API Reference

Not yet.

## Tests

Not tested

## Contributors

Notbody

## License

It's free. Download it. Steal it. Modify it.
