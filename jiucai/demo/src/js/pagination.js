/**
 * Created by hehua on 2016/4/7.
 */
$(function(){
    //����һ���ǳ��򵥵�demoʵ�������б�Ԫ�ط�ҳ��ʾ
    //�ص���������������ʾ��Ӧ��ҳ���б�������
    //�ص��������û�ÿ�ε����ҳ���ӵ�ʱ��ִ��
    //����page_index{int����}��ʾ��ǰ������ҳ
    var initPagination = function() {
        var num_entries = $("#hiddenresult div.result").length;
        // ������ҳ
        $("#Pagination").pagination(num_entries, {
            num_edge_entries: 1, //��Եҳ��
            num_display_entries: 4, //����ҳ��
            callback: pageselectCallback,
            items_per_page:1 //ÿҳ��ʾ1��
        });
    }();

    function pageselectCallback(page_index, jq){
        var new_content = $("#hiddenresult div.result:eq("+page_index+")").clone();
        $("#Searchresult").empty().append(new_content); //װ�ض�Ӧ��ҳ������
        return false;
    }
});
