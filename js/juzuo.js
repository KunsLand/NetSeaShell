function showRecentList(data){
    var i,item,indicators="",listbox="";
    for(i=0;i<data.data.length;i++){
	item = data.data[i];
	if(i==0){
	    indicators+='<li data-target="#myCarousel" data-slide-to="0" class="active"></li>';
	    listbox+='<div class="item active">';
	}
	else {
	    indicators+='<li data-target="myCarousel" data-slide-to="'+i+'"></li>';
	    listbox+='<div class="item">';
	}
	var url = item.videos[1].url;
	listbox+='<a href="'+url+'" target="_blank"><img src="'+item.img+'" alt="'+item.title+'" width="100%" height="auto"></a>';
	listbox+='<div class="carousel-caption"><h3>'+item.title+'</h3></div></div>';
    }
    $('#indicators').append(indicators);
    $('#listbox').append(listbox);
}
$(document).ready(function(){
    var src = "http://jsonhub.sinaapp.com/?target=ifeng&host=juzuo&jsonp=showRecentList";
    $('#video-list-json').remove().attr('src',src).appendTo('body');
});
