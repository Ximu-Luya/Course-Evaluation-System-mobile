$(function(){
    $('#start_fill').click(function(){
        $('.explanation').hide();
        $('.details').show();
    })

    $('#save_fill').click(function(){
        alert('已保存问卷')
        window.location = 'mobile-questionnaire.html'
    })
    onption_select();
})

function onption_select() {
    $('.options').click(function(){
        $('.'+$(this).attr('class')[0]).removeClass('selected');
        $(this).toggleClass('selected');
    })
}