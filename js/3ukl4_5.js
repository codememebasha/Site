$=jQuery;
$(function(){
$(".nav_icon_list .nav_icon").click(function(event){
$(".nav_icon_list .nav_list").slideToggle();
$(".nav_icon_list .nav_bg").slideToggle();
$(".nav_icon_list .nav_icon").toggleClass('nav_icon_close');
});
$(".nav_icon_list .nav_bg").click(function(event){
$(".nav_icon_list .nav_list").slideToggle();
$(".nav_icon_list .nav_bg").slideToggle();
$(".nav_icon_list .nav_icon").toggleClass('nav_icon_close');
});
$(document).on("click",".nav_icon_list .nav_list ul li .plus_minus_arrow",function(event){
event.preventDefault();
$(this).parents("li").find(".sub-menu").slideToggle();
$(this).toggleClass('open_submenu');
});
$(".nav_icon_list .nav_list ul li ul li.current-menu-item").each(function(index, el){
$(this).parents("ul.sub-menu").show();
});
$(".currentopenings_list ul li .applynow_btn").click(function(event){
$(this).parents("li").find('.applynow_popupinfo').show();
});
$(".currentopenings_list ul li .applynow_popupinfo .applynow_form .applynow_close_btn, .currentopenings_list ul li .applynow_popupinfo .applynow_form_bg").click(function(event){
$(this).parents(".applynow_popupinfo").hide();
});
$('.currentopenings_list ul li .applynow_popupinfo .applynow_form .wpcf7-form-control-wrap.UploadResume .wpcf7-form-control').change(function(e){
var file=e.target.files[0].name;
$(this).parents(".file_val_info").find('.file_val').text(file);
});
});
$(window).load(function(){
$(".nav_icon_list .nav_list ul li.menu-item-has-children > a").each(function(index, el){
$(this).append('<span class="plus_minus_arrow"></span>');
});
$(".desk_nav_info .desk_nav_list ul li.menu-item-has-children > a").each(function(index, el){
$(this).append('<span class="plus_minus_arrow"></span>');
});
});