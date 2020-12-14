<%@ page language="java" contentType="text/html;
 charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/ex04.jsp</title>
</head>
<body>
    <%
        String userId = request.getParameter("user_id");
    %>
    <h1> 아이디: <%=userId%></h1>
    <%
    String userBirth = request.getParameter("birth");
    %>
    <h1>생년월일: <%=userBirth%></h1>
    <%
    String userSex = request.getParameter("sex");
    %>
    <h1>성별: <%=userSex%></h1>
    <%
    String userEmail = request.getParameter("email_id");
    %>
    <h1>이메일: <%=userEmail%></h1>
    <%
    String userMail = request.getParameter("email_on");
    %>
    <h1>메일수신여부: <%=userMail%></h1>
   <%
    String userPhone1 = request.getParameter("phone_num");
    String userPhone2 = request.getParameter("phone2");
    String userPhone3 = request.getParameter("phone3");
    %>
    <h1>휴대폰: <%=userPhone1%> - <%=userPhone2%> - <%=userPhone3%></h1>
    <%
    String userJob = request.getParameter("job");
    %>
    <h1>직업: <%=userJob%></h1>
    <%
    String userHobby = request.getParameter("hobby");
    %>
    <h1>취미: <%=userHobby%></h1>
    <%
    String userShow = request.getParameter("show");
    %>
    <h1>자기소개: <%=userShow%></h1>

    
</body>
</html>