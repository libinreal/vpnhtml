$(function(){
	//custom css file
	$("<link>")
	.attr({ rel: "stylesheet",
	type: "text/css",
	href: "resources/css/common.css"
	})
	.appendTo("head");

	//click contact button
	$('#btnContact').click(function(){

		$(this).parent().one('DOMNodeInserted', function(e){//DOMNodeInserted  DOMSubtreeModified
			// console.log(' parent tag ', e.target.tagName, e.target.width, e.target.height)
			var btn = $('#btnContact')
			var maxWidth = 300, maxHeight = 0
			var imgWidth, imgHeight
			let imgAdd = $(this).children('.hidden-contact');
			let imgPos = [];
			imgPos.push(btn.position().left - (300 - btn.width()) / 2)//offset()
			imgPos.push(btn.position().top + btn.height())//offset()
			console.log('btn.offset().left', btn.offset().left, 'btn.offset().top', btn.offset().top)
			// imgWidth = imgAdd.width(), imgHeight = imgAdd.height(); //触发inserted时 无法获取width height
			imgWidth = 674, imgHeight = 896;
			if(imgWidth > maxWidth )
			{
				maxHeight = (maxWidth * imgHeight) / imgWidth
			}
			imgAdd.css('left', imgPos[0]+'px')
			imgAdd.css('top', imgPos[1]+'px')

			console.log(maxWidth, maxHeight)
			imgAdd.css('width', maxWidth + 'px')
			imgAdd.css('height', maxHeight + 'px')

			imgAdd.one('click', function(){
				imgAdd.remove();
			});
		});

		let imgContact = $(this).parent().children('.hidden-contact');
		if(imgContact.length == 0)
		{
			$(this).after('<img class="hidden-contact" src="./resources/imgs/contact-weixin.jpg"/>')
		}
		else
		{
			imgContact.remove();
		}

	})
	
});