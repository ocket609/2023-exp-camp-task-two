//jQuery
$(document).ready(function(e) {
    //newtoold下拉選單-開啟選單
    $('.selectAd-Newold-btn').click(function(e) {
        e.preventDefault();
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
        e.preventDefault();
        $('.selectAd-itemsAll-list').toggleClass('show');
    });
    //切換按鈕
    $('.itemsAll-btn-other').click(function(e) {
        e.preventDefault();  //防止冒泡
        $('.selectAd-itemsAll-btn').toggleClass('show');
        $('.itemsAll-btn-title').text($(this).text());
    });

    //Back to top
    $('.back_to_top').click(function(e) { //按鈕點擊
        $('html').animate({scrollTop:0},2000); //改變狀態，回到最頂端
    });

    //常見問題摺疊選單
    $('.qa-list-box').click(function(e) { //a連結按鈕被點擊時
        e.preventDefault(); //取消事件的預設行為(這邊指a的預設連結效果)
        $(this).toggleClass('active'); //切換點擊後樣式
        $(this).find('.qa-icon-add').toggleClass('d-none'); //顯示的icon隱藏
        $(this).find('.qa-icon-remove').toggleClass('d-block'); //隱藏的icon顯示
        $(this).find('.qa-box-showme').toggleClass('show'); //隱藏的內容顯示
    });



});

//event.preventDefault(); = e.preventDefault();
//(↑)如果可以被取消，就取消事件預設行為。但不會影響事件的傳遞，事件仍會繼續傳遞。