$(function(){
    $('#start_evaluate').click(function(){
        $('.explanation').hide();
        $('.details').show();
    })

    content = ['教师课前备课充分（含实践教学准备），提供的教学进度计划有助我课前预习',
        '讲授内容充实、有价值，实践教学有助于知识的掌握和能力的提升', '讲课中文使用普通话（或外语发音标准)，表达清楚，声音洪亮，语速适中',
        '授课深入浅出、重难点突出，实践教学讲解清晰，能激发学习兴趣', '教师关注学生上课及实践教学效果，师生互动、实践教学指导好，课堂教学气氛活跃',
        '板书、课件工整规范，对提升教学效果有很大帮助', '反馈的作业（实践报告）批改信息有利于课程内容的学习',
        '课程考核包含实践教学成绩,评价方式（含平时成绩）能激励学生主动学习', '学习本课程后收获大,我能够达到课程设定的教学目标',
        '授课教师遵守教师职业操守、爱岗敬业，既教书又育人']
    for(let i=2; i<content.length; i++){
        $('.details tbody').append("<tr>"+
            "<th rowspan='6'>"+ i +"</th>" + 
            "<td colspan='2' class='details_content'>"+content[i-2]+"</td>"+
            "<tr><td colspan='2' class='"+i+" options'>A.非常赞成</td></tr>"+
            "<tr><td colspan='2' class='"+i+" options'>B.赞成</td></tr>"+
            "<tr><td colspan='2' class='"+i+" options'>C.基本赞成</td></tr>"+
            "<tr><td colspan='2' class='"+i+" options'>D.不赞成</td></tr>"+
            "<tr><td colspan='2' class='"+i+" options'>E.非常不赞成</td>"+
            "</tr></tr>")
    }
    $('.details tbody').append("<tr>"+
        "<td colspan='3' class='center'>"+
        "<button type='button' id='save_evaluate'>提交评教</button>"+
        "</td></tr>")
    $('#save_evaluate').click(function(){
        alert('已保存评教')
        window.location = 'mobile-index.html'
    })
    onption_select();
})

function onption_select() {
    $('.options').click(function(){
        $('.'+$(this).attr('class')[0]).removeClass('selected');
        $(this).toggleClass('selected');
    })
}