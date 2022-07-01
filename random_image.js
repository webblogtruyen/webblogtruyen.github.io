var list_image =[

]
function random_img(){
	var select = Math.floor(Math.random()*list_image.length,2)
	return list_image[select];
}