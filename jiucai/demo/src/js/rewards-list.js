/**
 * Created by hehua on 2016/4/7.
 */
$(function(){
    var lenght=$('.rewards-list').children('li').length;
    $('.rewards-list').height(lenght*60);
    $('.established-invest-rewards').height(58+40+lenght*60+75);

    $('.established-invest').height(58+40+lenght*60+75+352+241);
});