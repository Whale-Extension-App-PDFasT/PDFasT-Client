function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function (){
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
                var allText = rawFile.responseText;
                // alert(allText);
            }
        }
    }
    rawFile.send(null);
    return rawFile.responseText;
}
// =========================================================webbutton
$(document).ready(function(){
 
    $('#webButton').click(function(){
        getCurrentTabUrl(function(url) {
             renderURL(url);
         });
    });

    $('#refresh').click(function(){
        getCurrentTabUrl(function(url) {
             renderURL(url);
         });
    });

    $('#favorite_refresh').click(function(){
        getCurrentTabUrl(function(url) {
             renderURL(url);
         });
    });
    // test code
    // $("li").delegate(".pop_body_li", "click", function() { 
    //     console.log(this);
    //     $('.pop_body_li').classList.toggle('.popbody_li_click', false);
    //     this.classList.toggle('.pop_body_li_click', true);
    // });

    // $("a.offsite").live("click", function(){ alert("Goodbye!"); }); 

    // $(".pop_body_li").live("click", function(){
    //     console.log(this);
    //     $('.pop_body_li').classList.toggle('.popbody_li_click', false);
    //     this.classList.toggle('.pop_body_li_click', true);
    // }); 

    $(document).on('click','.pop_body ul li',function(){
        // console.log( $('.pop_body ul li').hasClass('pop_body_li_click') );
        if($('.pop_body ul li').hasClass('pop_body_li_click') == false){
            // console.log(this);
            $('.pop_body ul li').toggleClass('pop_body_li_click', false);
            $('.pop_body ul li').toggleClass('pop_body_li', true);
            $(this).toggleClass('pop_body_li', false);
            $(this).toggleClass('pop_body_li_click', true);        
        }else{
            if($(this).hasClass('pop_body_li') == false){
                $('.pop_body ul li').toggleClass('pop_body_li_click', false);
                $('.pop_body ul li').toggleClass('pop_body_li', true);
            }else{
                $('.pop_body ul li').toggleClass('pop_body_li_click', false);
                $('.pop_body ul li').toggleClass('pop_body_li', true);
                $(this).toggleClass('pop_body_li', false);
                $(this).toggleClass('pop_body_li_click', true);
            }
        }
    });
 
    $(document).on('click','#popConvert',function(){
        // console.log($('.pop_body ul li'));
        if($('.pop_body ul li').hasClass('pop_body_li_click')){
            var form = document.createElement("form");
            form.setAttribute("method","post");
            form.setAttribute("target","_blank");
            form.setAttribute("action","https://pdfast.run.goorm.io/web.php");
            document.body.appendChild(form);
        
            var insert = document.createElement("input");
            insert.setAttribute("type","hidden");
            insert.setAttribute("name","test");
            // console.log($(".pop_body_li_click").attr("data-url"));
            insert.setAttribute("value", "https://cors-anywhere.herokuapp.com/" + $(".pop_body_li_click").attr("data-url"));
            form.appendChild(insert);
        
            form.submit();
            $('#file_title').text($('.pop_body_li_click').text());

            $('.popup_back').hide();
            $('.lamp').setAttribute("src", "img/lamp_on.png");
        }
    });
// ============================================================================favorite Move
    $(document).on('click','#favorite_ul li span a',function(){
        // console.log($(this).parent().attr("data-url"));
        var form = document.createElement("form");
        form.setAttribute("method","post");
        form.setAttribute("target","_blank");
        form.setAttribute("action","https://pdfast.run.goorm.io/web.php");
        document.body.appendChild(form);
    
        var insert = document.createElement("input");
        insert.setAttribute("type","hidden");
        insert.setAttribute("name","test");
        insert.setAttribute("value", "https://cors-anywhere.herokuapp.com/" + $(this).parent().parent().attr("data-url"));
        form.appendChild(insert);
    
        form.submit();
        $('#file_title').text($(this).text());
        document.getElementById("innerfileframe").classList.toggle('innerfileframe', false);
        document.getElementById("innerfileframe").classList.toggle('innerfileframe_folder', false);              
        document.getElementById("innerfileframe").classList.toggle('innerfileframe_web', true);
                                    
        document.getElementById("fileFrame").classList.toggle('fileframe_folder', false);   
        document.getElementById("fileFrame").classList.toggle('fileframe',false);              
        document.getElementById("fileFrame").classList.toggle('fileframe_web', true); 
    });

    $(document).on('click','#recent ul li span a',function(){
        var form = document.createElement("form");
        form.setAttribute("method","post");
        form.setAttribute("target","_blank");
        form.setAttribute("action","https://pdfast.run.goorm.io/web.php");
        document.body.appendChild(form);
    
        var insert = document.createElement("input");
        insert.setAttribute("type","hidden");
        insert.setAttribute("name","test");
        // var index = $("#recent_ul li").index($(this).parent().parent()[0]);
        var index = $(this).parent().parent().index();
        // console.log(index, $(this).parent().parent());
        if(localStorage){
            let st = localStorage;
            let recent = JSON.parse(st.getItem('1'));
            // console.log(recent[index]['url']);
            insert.setAttribute("value", "https://cors-anywhere.herokuapp.com/" + recent[index]['url'] );

            form.appendChild(insert);
            form.submit();
            $('#file_title').text(recent[index]['text']);
            document.getElementById("innerfileframe").classList.toggle('innerfileframe', false);
            document.getElementById("innerfileframe").classList.toggle('innerfileframe_folder', false);              
            document.getElementById("innerfileframe").classList.toggle('innerfileframe_web', true);
                                        
            document.getElementById("fileFrame").classList.toggle('fileframe_folder', false);   
            document.getElementById("fileFrame").classList.toggle('fileframe',false);              
            document.getElementById("fileFrame").classList.toggle('fileframe_web', true);   
        }                            
    });

// ============================================================================favorite
    $(document).on('click',"#favorite img[src='img/li_cancel.png']",function(){
        // console.log($(this).parent().parent());
        // $(this).parent().parent().remove();

        if(localStorage){
            let st = localStorage;
            let favorite_tab = JSON.parse(st.getItem('2'));

            // console.log(favorite_tab, $(this).parent().parent().attr("data-num"), favorite_tab.splice($(this).attr("data-num"), $(this).attr("data-num")));
            favorite_tab.splice($(this).parent().parent().attr("data-num"), 1);
            st.setItem('2', JSON.stringify(favorite_tab));
            render_favorite();
        }
    });

    $(document).on('click',"img[src='img/plus.png']",function(){
        document.getElementsByClassName("popup_favorite_back")[0].style.display = "block";

        $('.pop_favorite_body ul').empty();

        chrome.tabs.query({url: ["*://*/*.pdf"]}, function(tabs) {
            // console.log('tabs: ',tabs.length);
            if(tabs.length == 0){
                $('.pop_favorite_body ul').append('<span style="position:absolute;top:100px;text-align:center">현재 브라우저에 PDF가 없습니다.</span>');
            }

            for(i in tabs){
                // console.log(tabs[i]['title']);
                $('.pop_favorite_body ul').append(`<li class="pop_favorite_body_li" data-url="${tabs[i]['url']}">${tabs[i]['title']}</li>`);
            }
        });
         
    });
    $(document).on('click','.pop_favorite_body ul li',function(){
        if($('.pop_favorite_body ul li').hasClass('pop_favorite_body_li_click') == false){
            // console.log(this);
            $('.pop_favorite_body ul li').toggleClass('pop_favorite_body_li_click', false);
            $('.pop_favorite_body ul li').toggleClass('pop_favorite_body_li', true);
            $(this).toggleClass('pop_favorite_body_li', false);
            $(this).toggleClass('pop_favorite_body_li_click', true);        
        }else{
            if($(this).hasClass('pop_favorite_body_li') == false){
                $('.pop_favorite_body ul li').toggleClass('pop_favorite_body_li_click', false);
                $('.pop_favorite_body ul li').toggleClass('pop_favorite_body_li', true);
            }else{
                $('.pop_favorite_body ul li').toggleClass('pop_favorite_body_li_click', false);
                $('.pop_favorite_body ul li').toggleClass('pop_favorite_body_li', true);
                $(this).toggleClass('pop_favorite_body_li', false);
                $(this).toggleClass('pop_favorite_body_li_click', true);
            }
        }
    });

    $(document).on('click','#pop_favoriteConvert',function(){
        if($('.pop_favorite_body ul li').hasClass('pop_favorite_body_li_click')){
            if(localStorage){
                let st = localStorage;
                let favorite_tab = JSON.parse(st.getItem('2'));
                
                // console.log(favorite_tab);
                if(favorite_tab == null){
                    favorite_tab = [];
                }
                // {url:'', title:''}

                favorite_tab.push({title:`${$(".pop_favorite_body_li_click").text()}`, url:`${$(".pop_favorite_body_li_click").attr("data-url")}`});
                // $(".pop_body_li_click").attr("data-url")
                st.setItem('2', JSON.stringify(favorite_tab));

                render_favorite();
                $('.popup_favorite_back').hide();
            }
        }
    });

    render_favorite();
});
// ====================================================================favorite render
const render_favorite = () => {
    $('#favorite ul').empty();
    if(localStorage){
        let st = localStorage;
        let favorite_tab = JSON.parse(st.getItem('2'));
        for(i in favorite_tab){
            $('#favorite ul').append(`<li data-url="${favorite_tab[i]['url']}" data-num="${i}">
            <span>
                <img class="li_bulb" src="img/li_bulb_on.png">
                <a>${favorite_tab[i]['title']}</a>
                <img src="img/li_cancel.png">
            </span></li>`);
        }
    }
}

// ===============================================================================chrome
function getCurrentTabUrl(callback) {
  var queryInfo = {
    // active: false,
    // currentWindow: false
    url: ["*://*/*.pdf"]
  };
 
  chrome.tabs.query(queryInfo, function(tabs) {
    $('.pop_body ul').empty();
    if(tabs.length == 0){
        $('.pop_body ul').append('<span style="position:absolute;top:100px;text-align:center">현재 브라우저에 PDF가 없습니다.</span>');
    }
    for(i in tabs){
        // console.log(tabs[i]['title']);
        $('.pop_body ul').append(`<li class="pop_body_li" data-url="${tabs[i]['url']}">${tabs[i]['title']}</li`);
    }    
    // console.log(tabs);
    var tab = tabs[0];
    var url = tab.url;
    callback(url);
  });
}
 
function renderURL(statusText) {
//   document.getElementById('urls').textContent = statusText;
}

// =========================================================새로고침
$(document).on('click', '#home', ()=>{
    location.reload();
});

$(function(){
    if(localStorage){
        let st = localStorage;
        let tutorial = JSON.parse(st.getItem('tutorial'));

        if(tutorial == null){
            $('#tutorial').css('display', 'block');
            $('#tutorial_back').css('display', 'block');

            st.setItem('tutorial', JSON.stringify([{bool: true}]));
        }else if(tutorial[0]['bool'] == true){
            $('#tutorial').css('display', 'none');
            $('#tutorial_back').css('display', 'none');
        }
    }
});
// ===============================pdf url 없을시 전구끄기
chrome.tabs.onRemoved.addListener( (e)=>{
    // console.log(e);
    chrome.tabs.query({url: ["https://pdfast.run.goorm.io/web.php", "https://pdfast.run.goorm.io/build/generic/web/local_viewer.html"]}, function(tabs) {       
        if(tabs.length == 0){                    
            $('#file_title').text('하단에 아이콘을 클릭해보세요!');
            document.getElementById("innerfileframe").classList.toggle('innerfileframe', true);
            document.getElementById("innerfileframe").classList.toggle('innerfileframe_folder', false);              
            document.getElementById("innerfileframe").classList.toggle('innerfileframe_web', false);
                                        
            document.getElementById("fileFrame").classList.toggle('fileframe_folder', false);   
            document.getElementById("fileFrame").classList.toggle('fileframe',true);              
            document.getElementById("fileFrame").classList.toggle('fileframe_web', false);   
        }else{      
            let localIn = null;      
            for(i in tabs){
                if(tabs[i]['url'] == 'https://pdfast.run.goorm.io/build/generic/web/local_viewer.html'){
                    localIn = true;
                }
            }
            if(localIn != true){    //현재탭중에 local.html이 없으면      
                $.each(tabs,(index,value)=>{
                    if(value.id == e){
                        if(tabs[index][url] == 'https://pdfast.run.goorm.io/build/generic/web/local_viewer.html'){
                            $('#file_title').text('하단에 아이콘을 클릭해보세요!');
                            document.getElementById("innerfileframe").classList.toggle('innerfileframe', true);
                            document.getElementById("innerfileframe").classList.toggle('innerfileframe_folder', false);              
                            document.getElementById("innerfileframe").classList.toggle('innerfileframe_web', false);
                                                        
                            document.getElementById("fileFrame").classList.toggle('fileframe_folder', false);   
                            document.getElementById("fileFrame").classList.toggle('fileframe',true);              
                            document.getElementById("fileFrame").classList.toggle('fileframe_web', false);
                        }
                    }
                })          
            }
        }
    });
});

$(document).on('click', '#popup_youtube', ()=>{
    window.open('https://youtu.be/mr2Llu8ZKeU', 'PDFasT 가이드 영상');
});
// ===================================================램프 애니메

// ==========================================================================
// $(function(){
//     document.getElementById("testBtn").addEventListener("click", test);

//     document.getElementById("webButton").addEventListener("click", ()=>{
//         chrome.tabs.query({currentWindow:true}, (tabs)=>{console.log(tabs)});
//     } );
// });
// function test() {
//     // console.log(readTextFile("./test.txt"));
// 	var form = document.createElement("form");
//     form.setAttribute("method","post");
//     form.setAttribute("target","_blank");
// 	form.setAttribute("action","https://pdfast.run.goorm.io/templates/index2.php");
// 	document.body.appendChild(form);

// 	var insert = document.createElement("input");
// 	insert.setAttribute("type","hidden");
// 	insert.setAttribute("name","test");
//     insert.setAttribute("value", "https://cors-anywhere.herokuapp.com/" + "http://www.pdf995.com/samples/pdf.pdf");
// 	form.appendChild(insert);

// 	form.submit();
// }
// ===========================================================================


// readTextFile("file:///C:/Users/내가_읽을_파일_경로/js/functions.js");

// var popup;
// function pop() {
// 	var settings = 'toolbar=0, status=0, menubar=0, scrollbars=yes, height=600, width=800';
// 	var target = './test.html';
// 	popup = window.open('about:blank', 'popup_name', settings);

// 	$.load("https://kkang.run.goorm.io/test777.php", function() {
// 		popup.location = target;
// 	});
// }
// pop();

// $('#btn').click(function(){
//     console.log('click');
//     var allText = readTextFile("./test.html");
//     var w = window.open('about:blank', '_blank');    
//     $.ajax({
//         type: "POST",
//         url:"https://kkang.run.goorm.io/test777.php",
//         data: {test: allText},
//         success:function(data){
//             console.log('success');            
//             w.location.href = "https://kkang.run.goorm.io/test777.php";
//         },
//         complete:function(){

//         }
//     });
// });


// var tw = window.open( "https://kkang.run.goorm.io/test777.php", "test", "width=600,height=400" );
// $(tw.document.body).html("<input type=text value='"+"asdfasdfasdfasf"+"'>");

// var testText = readTextFile("./test.txt");
// alert(testText);


// $(function(){
//     document.getElementById("testBtn").addEventListener("click", test);
// });
// function test() {
//     // console.log(readTextFile("./test.txt"));
// 	var form = document.createElement("form");
//     form.setAttribute("method","post");
//     form.setAttribute("target","_blank");
// 	form.setAttribute("action","https://kkang.run.goorm.io/test777.php");
// 	document.body.appendChild(form);

// 	var insert = document.createElement("input");
// 	insert.setAttribute("type","hidden");
// 	insert.setAttribute("name","test");
//     insert.setAttribute("value",readTextFile("./pdfjs/templates/index.html"));
//     // insert.setAttribute("value",readTextFile("test.html"));
// 	form.appendChild(insert);

// 	form.submit();
// }