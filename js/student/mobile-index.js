$(function(){
    course_info = [
        ['<a href="mobile-evaluate_details.html">创建评教</a>', '创新、发明与知识产权实务', '汤蓉', '计算机181', '讲授', '必修', '12', '0.5'],
        ['<a href="mobile-evaluate_details.html">创建评教</a>', '创新创业教育基础', '鄢田云', '计算机181', '讲授', '必修', '12', '0.5'],
        ['<a href="mobile-evaluate_details.html">创建评教</a>', '大学英语2', '郑琳', '计算机181', '讲授', '必修', '64', '4'],
        ['<a href="mobile-evaluate_details.html">更改评教</a>', '高等数学2C', '杜先云', '计算机181', '讲授', '必修', '72', '4.5'], 
        ['<a href="mobile-evaluate_details.html">创建评教</a>', '大学物理B', '陈敏', '计算机181', '讲授', '必修', '64', '4'],
        ['<a href="mobile-evaluate_details.html">更改评教</a>', '形势与政策1', '陈敏', '计算机181', '讲授', '必修', '8', '0.5'],
        ['<a href="mobile-evaluate_details.html">创建评教</a>', '中国近现代史纲要', '丁小珊', '计算机181', '讲授', '必修', '48', '3'],
        ['<a href="mobile-evaluate_details.html">创建评教</a>', '创新中国', '邱长燕', '通信181', '讲授', '选修', '20', '1.5'],
        ['<a href="mobile-evaluate_details.html">创建评教</a>', '透过性别看世界', '张晓亮', '数学181', '讲授', '选修', '28', '1.5']
    ];

    for(let i=0; i<course_info.length; i++){
        $('tbody').append('<tr>' + 
            '<td>' + course_info[i][0] +'</td>' +
            '<td>' + course_info[i][1] +'</td>' +
            '<td>' + course_info[i][2] +'</td>' +
            '<td>' + course_info[i][3] +'</td>' +
            '<td>' + course_info[i][4] +'</td>' +
            '<td>' + course_info[i][5] +'</td>' +
            '<td>' + course_info[i][6] +'</td>' +
            '<td>' + course_info[i][7] +'</td>' +
            + '<tr>'
        );
    }
})