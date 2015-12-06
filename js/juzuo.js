function showRecentList(data){
    console.log(data);
}
$(document).ready(function(){
    var src = "http://jsonhub2.sinaapp.com/?target=ifeng&host=juzuo&jsonp=showRecentList";
    $('#video-list-json').remove().attr('src',src)appendTo('body');
});
