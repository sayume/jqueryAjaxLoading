# Jquery AjaxLoading

A jquery plugin to append loading indicator when ajax.

## Installation

<head>
<script type="text/javascript" src="jquery"></script>
<script type="text/javascript" src="jquery.ajaxLoading.js"></script>
</head>

##Quick Start

<div id='element1'></div>
<div id='element2'></div>

$.fn.ajaxLoading();
$.ajaxLoader.register([
	{
		element:'#element1',
		type:'image',
		src:'image path',
		url:'http://testUrl1'
	},
	{
        element:'#element2',
        type:'text',
        src:'loading...'
        url:'http://testUrl2'
    }
]);

## License

(The MIT License)

Copyright (c) 2011 Jared Hanson

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.