document.writeln("<header>");
document.writeln("    <div class=\'header-top min-width\'>");
document.writeln("        <div class=\'container fn-clear\'> <strong class=\'fn-left\'>咨询热线：400-668-6698<span class=\'s-time\'>服务时间：9:00 - 18:00</span></strong>");
document.writeln("            <ul class=\'header_contact\'>");
document.writeln("                <li class=\'c_1\'> <a class=\'ico_head_weixin\' id=\'wx\'></a>");
document.writeln("                    <div class=\'ceng\' id=\'weixin_xlgz\' style=\'display: none;\'>");
document.writeln("                        <div class=\'cnr\'> <img src=\'images/code.png\'> </div>");
document.writeln("                        <b class=\'ar_up ar_top\'></b> <b class=\'ar_up_in ar_top_in\'></b> </div>");
document.writeln("                </li>");
document.writeln("                <li class=\'c_2\'><a href=\'#\' target=\'_blank\' title=\'官方QQ\' alt=\'官方QQ\'><b class=\'ico_head_QQ\'></b></a></li>");
document.writeln("                <li class=\'c_4\'><a href=\'#\' target=\'_blank\' title=\'新浪微博\' alt=\'新浪微博\'><b class=\'ico_head_sina\'></b></a></li>");
document.writeln("            </ul>");
document.writeln("            <script type=\'application/javascript\'>");
document.writeln("               //获取Cookie\n" +
    "function getCK(name) {\n" +
    "    var cks1=document.cookie;\n" +
    "    console.log(cks1)\n" +
    "    var arrc1=cks1.split(\";\");\n" +
    "    for(i=0;i<arrc1.length;i++){\n" +
    "        var ck1=arrc1[i];\n" +
    "        var arrc2=ck1.split(\"=\");\n" +
    "        if(arrc2[0]==name){\n" +
    "            return arrc2[1];\n" +
    "        }\n" +
    "    }\n" +
    "    return \"\";\n" +
    "} function init() {");
document.writeln("                    var token = getCK(\'userauth\');");
document.writeln("                    $.ajax({");
document.writeln("                        url: \'http://localhost:8081/usercheck.do\',");
document.writeln("                        method: \'get\',");
document.writeln("                        xhrFields: {withCredentials: true},");
document.writeln("                        success: function (obj) {");
document.writeln("                            if (obj.code == 0) {");
document.writeln("                                $(\'.u1\').css(\'display\', \'block\');");
document.writeln("                                $(\'.u2\').css(\'display\', \'none\');");
document.writeln("                                $(\'#ainfo\').html(obj.data.username);");
document.writeln("                            } else {");
document.writeln("                                $(\'.u1\').css(\'display\', \'none\');");
document.writeln("                                $(\'.u2\').css(\'display\', \'block\');");
document.writeln("                            }");
document.writeln("                        }");
document.writeln("                    })");
document.writeln("                }");
document.writeln("               init();");
document.writeln("            </script>");
document.writeln("            <ul class=\'fn-right header-top-ul\'>");
document.writeln("                <li> <a href=\'index.html\' class=\'app\'>返回首页</a> </li>");
document.writeln("                    <li class=\'u1\'>");
document.writeln("                        <div class=\'\'><a href=\'javascript:account()\' class=\'c-orange\' title=\'我的账号\' id=\'ainfo\'>我的账号</a></div>");
document.writeln("                    </li>");
document.writeln("                    <li class=\'u1\'>");
document.writeln("                        <div ><a href=\'javascript:loginout();\' class=\'js-login\' title=\'注销\'>注销</a></div>");
document.writeln("                    </li>");
document.writeln("                    <li id=\'register\' class=\'u2\'>");
document.writeln("                        <div ><a href=\'register.html\' class=\'c-orange\' title=\'免费注册\'>免费注册</a></div>");
document.writeln("                    </li>");
document.writeln("                    <li id=\'login\' class=\'u2\'>");
document.writeln("                        <div class=\'\'><a href=\'login.html\' class=\'js-login\' title=\'登录\'>登录</a></div>");
document.writeln("                    </li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("    <div class=\'header min-width\'>");
document.writeln("        <div class=\'container\'>");
document.writeln("            <div class=\'fn-left logo\'> <a class=\'\' href=\'index.html\'> <img src=\'images/logo.png\'  title=\'\'> </a> </div>");
document.writeln("            <ul class=\'top-nav fn-clear\'>");
document.writeln("                <li class=\'on\'> <a href=\'index.html\'>首页</a> </li>");
document.writeln("                <li> <a href=\'list.html\' class=\'\'>我要投资</a> </li>");
document.writeln("                <li> <a href=\'borrow.html\' class=\'\'>我要借款</a> </li>");
document.writeln("                <li> <a href=\'msghelp.html\'>安全保障</a> </li>");
document.writeln("                <li  class=\'top-nav-safe u2\' > <a href=\'login.html\'>快速登录</a> </li>");
document.writeln("                <li class=\'top-nav-safe u1\'> <a href=\'account.html\'>我的账户</a> </li>");
document.writeln("                <li> <a href=\'company.html\'>关于我们</a> </li>");
document.writeln("            </ul>");
document.writeln("        </div>");
document.writeln("    </div>");
document.writeln("</header>");
document.writeln("");