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
    //itemsAll下拉選單-






});