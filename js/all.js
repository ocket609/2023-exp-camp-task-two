//jQuery
$(document).ready(function(e) {
    //newtoold下拉選單-開啟選單
    $('.selectAd-Newold-btn').click(function(e) {
        $('.selectAd-Newold-list').toggleClass('show');
    });
    //切換按鈕
    $('.newToold').click(function(e) {
        e.preventDefault();  //防止冒泡
        $('.selectAd-Newold-btn').toggleClass('show');
        $('.Newold-btn-title').text($(this).text());
    });
    $('.oldTonew').click(function(e) {
        e.preventDefault();  //防止冒泡
        $('.selectAd-Newold-btn').toggleClass('show');
        $('.Newold-btn-title').text($('.oldTonew').text());
    });
    //itemsAll下拉選單-開啟選單
    $('.selectAd-itemsAll-btn').click(function(e) {
        $('.selectAd-itemsAll-list').toggleClass('show');
    });
    //切換按鈕
    $('.itemsAll-btn-other').click(function(e) {
        e.preventDefault();  //防止冒泡
        $('.selectAd-itemsAll-btn').toggleClass('show');
        $('.itemsAll-btn-title').text($(this).text());
    });
    $('.back_to_top').click(function(e) { //按鈕點擊
        $('html').animate({scrollTop:0},2000); //改變狀態，回到最頂端
    });



});