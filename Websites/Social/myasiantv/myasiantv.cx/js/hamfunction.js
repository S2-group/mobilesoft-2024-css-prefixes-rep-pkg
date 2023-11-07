$(document).ready(function () {
  $(".report").click(function (e) {
    e.stopPropagation();
    $(".mask").fadeIn();
    $('.div-poup').fadeIn(); 
  });

  $('.mask').click(function () {
    $('.div-poup').fadeOut();
    $('.mask').fadeOut();
  });

  $('.navbar-toggle').click(function(e) {
    e.preventDefault();
    $(".menu_hoz").toggle();
  });

  $('.btn-comment').click(function () {
    $('.btn-comment').hide();
    $('.comment').show();
  });

  $('.anime_muti_link div').click(function (e) {e.preventDefault();var link = $(this).attr('data-video');if ($(this).hasClass("active")) {return false;}else{$(".play-video iframe").attr('src',link); };$('.anime_muti_link div').removeClass('active');$(this).addClass('active');});
});
function loadDing(str){
    document.getElementById(str).innerHTML = "<img src='" + base_url + "/img/load/loading2.gif' />";
}
function freload() {
    location.reload(true);
}
function drama_by_status(obj, page, a){
    var html = $("#list-"+a).html();
    if(html == ""){
       
    } 
     LoadFilmStatus(page, a);
}
$(document).on("click", ".pagination.ajax a", function(e){
        e.preventDefault();
		var str = (this).href;
		str = str.split("=");
		var page = str[1];
        var a = $(this).parent().parent().parent().find("#type").val();
        LoadFilmStatus(page, a);
        
});
function LoadFilmStatus(page, a){
    if(page > 0){
        $.ajax({url:base_url+"ajax/drama_by_status/"+a+".html?page="+page,type:"GET",dataType:"html",success:function(b){$("#list-"+a).html(b)}})
    }
}
function loadTopViews(obj,id){
    if(id>0){
        $("#sidebarlist-"+id).is(":empty")&&$.ajax({
            url:api_anclytic+'?id='+id,type:'GET',
            //dataType:'json',
            async:true,
            crossDomain:true,
            success:function(data){
                if(data!='0'){
                    var dataString=JSON.stringify(data);
                    $("#sidebarlist-"+id).html(data);
                }
            }
        })
    }
}
if (document.getElementById('sidebarlist-1')) {
    loadTopViews(this,1);
}
function showEpisodeMore(page, alias){
    if(alias != ''){
        $.ajax({url:base_url+"ajax/episode-list/"+alias+"/"+page+".html?page="+page,type:"GET",dataType:"html",success:function(b){
            if(b){$(".paging").remove();$(".list-episode").append(b);}else alert('Sorry, unexpected error. Please try again later.');
        }})
    }
}
function laodEpIntro(obj,id){
    $('.menu-mobis li a').removeClass('active');
    $(obj).addClass('active');
    $(".episode-new .loadep").hide();
    $(".loadep.intro"+id).show();
}
