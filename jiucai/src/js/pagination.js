/**
 * Created by hehua on 2016/4/7.
 */
$(function(){

    var initPagination = function() {
        var num_entries = $("#hiddenresult div.result").length;
        
        $("#Pagination").pagination(num_entries, {
            num_edge_entries: 1, 
            num_display_entries: 9, 
            callback: pageselectCallback,
            items_per_page:1
        });
    }();

    function pageselectCallback(page_index, jq){
        var new_content = $("#hiddenresult div.result:eq("+page_index+")").clone();
        $("#Searchresult").empty().append(new_content);
        return false;
    }


    var initPagination_one = function() {
        var num_entries_one = $("#hiddenresult-one div.result").length;
        // 创建分页
        $("#Pagination-one").pagination(num_entries_one, {
              num_edge_entries: 1, 
            num_display_entries: 9, 
            callback: pageselectCallback,
            items_per_page:1
        });
    }();

    function pageselectCallback_one(page_index, jq){
        var new_content = $("#hiddenresult-one div.result:eq("+page_index+")").clone();
        $("#Searchresult-one").empty().append(new_content); //装载对应分页的内容
        return false;
    }





    var initPagination_two = function() {
        var num_entries_two = $("#hiddenresult-two div.result").length;
        // 创建分页
        $("#Pagination-two").pagination(num_entries_two, {
            num_edge_entries: 1, 
            num_display_entries: 9, 
            callback: pageselectCallback,
            items_per_page:1
        });
    }();

    function pageselectCallback_two(page_index, jq){
        var new_content = $("#hiddenresult-two div.result:eq("+page_index+")").clone();
        $("#Searchresult-two").empty().append(new_content); //装载对应分页的内容
        return false;
    }
});
