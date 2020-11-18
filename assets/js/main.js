$(document).ready(function () {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({
            opacity: 0
        }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    })

});


function showfield_ug() {
    document.getElementById('forUG').style.display = 'block';
    document.getElementById('forPG').style.display = 'none';
    document.getElementById('choose_stream').style.display = 'block';
}

function showfield_pg() {
    document.getElementById('forPG').style.display = 'block';
    document.getElementById('forUG').style.display = 'none';
    document.getElementById('choose_stream').style.display = 'block';
}

function ChangeDropdowns_1(value) {
    if (value == "ssec") {
        document.getElementById('l_ssec').style.display = 'block';
        document.getElementById('l_ug').style.display = 'none';
        document.getElementById('l_pg').style.display = 'none';
        document.getElementById('grade').style.display = 'block';
    } else if (value == "ug") {
        document.getElementById('l_ssec').style.display = 'none';
        document.getElementById('l_ug').style.display = 'block';
        document.getElementById('l_pg').style.display = 'none';
        document.getElementById('grade').style.display = 'block';
    } else if (value == "pg") {
        document.getElementById('l_ssec').style.display = 'none';
        document.getElementById('l_ug').style.display = 'none';
        document.getElementById('l_pg').style.display = 'block';
        document.getElementById('grade').style.display = 'block';
    } else if (value == "select") {
        document.getElementById('l_ssec').style.display = 'none';
        document.getElementById('l_ug').style.display = 'none';
        document.getElementById('l_pg').style.display = 'none';
        document.getElementById('grade').style.display = 'none';
    }
}


function myfunc_1() {
    var c1 = document.getElementById("check_a1");
    var list1 = document.getElementById("d_agri");
    if (c1.checked == true) {
        list1.style.display = "block";
    } else {
        list1.style.display = "none";
    }
}

function myfunc_2() {
    var c2 = document.getElementById("check_a2");
    var list2 = document.getElementById("d_eat");
    if (c2.checked == true) {
        list2.style.display = "block";
    } else {
        list2.style.display = "none";
    }
}

function myfunc_3() {
    var c3 = document.getElementById("check_a3");
    var list3 = document.getElementById("d_sci");
    if (c3.checked == true) {
        list3.style.display = "block";
    } else {
        list3.style.display = "none";
    }
}

function myfunc_4() {
    var c4 = document.getElementById("check_a4");
    var list4 = document.getElementById("d_arts");
    if (c4.checked == true) {
        list4.style.display = "block";
    } else {
        list4.style.display = "none";
    }
}

function myfunc_5() {
    var c5 = document.getElementById("check_a5");
    var list5 = document.getElementById("d_bfaa");
    if (c5.checked == true) {
        list5.style.display = "block";
    } else {
        list5.style.display = "none";
    }
}

function myfunc_6() {
    var c6 = document.getElementById("check_a6");
    var list6 = document.getElementById("d_csai");
    if (c6.checked == true) {
        list6.style.display = "block";
    } else {
        list6.style.display = "none";
    }
}

function myfunc_7() {
    var c7 = document.getElementById("check_a7");
    var list7 = document.getElementById("d_scsat");
    if (c7.checked == true) {
        list7.style.display = "block";
    } else {
        list7.style.display = "none";
    }
}

function myfunc_8() {
    var c8 = document.getElementById("check_a8");
    var list8 = document.getElementById("d_hfam");
    if (c8.checked == true) {
        list8.style.display = "block";
    } else {
        list8.style.display = "none";
    }
}

function myfunc_9() {
    var c9 = document.getElementById("check_a9");
    var list9 = document.getElementById("d_chtlas");
    if (c9.checked == true) {
        list9.style.display = "block";
    } else {
        list9.style.display = "none";
    }
}

function myfunc_a() {
    var c10 = document.getElementById("check_e1");
    var list10 = document.getElementById("for_ielts");
    if (c10.checked == true) {
        list10.style.display = "block";
    } else {
        list10.style.display = "none";
    }
}

function myfunc_b() {
    var c11 = document.getElementById("check_e2");
    var list11 = document.getElementById("for_pte");
    if (c11.checked == true) {
        list11.style.display = "block";
    } else {
        list11.style.display = "none";
    }
}

function myfunc_c() {
    var c11 = document.getElementById("check_e3");
    var list11 = document.getElementById("for_pte");
    var list12 = document.getElementById("for_ielts");
    if (c11.checked == true) {
        list11.style.display = "none";
        list12.style.display = "none";
    }
}

//sub.html page
// show course name functions
function myfunc_ins1course() {
    document.getElementById('ins1courses').style.display = 'block';
    document.getElementById('ins2courses').style.display = 'none';
    document.getElementById('ins3courses').style.display = 'none';
    document.getElementById('ins4courses').style.display = 'none';
    document.getElementById('ins5courses').style.display = 'none';
}

function myfunc_ins2course() {
    document.getElementById('ins1courses').style.display = 'none';
    document.getElementById('ins2courses').style.display = 'block';
    document.getElementById('ins3courses').style.display = 'none';
    document.getElementById('ins4courses').style.display = 'none';
    document.getElementById('ins5courses').style.display = 'none';
}

function myfunc_ins3course() {
    document.getElementById('ins1courses').style.display = 'none';
    document.getElementById('ins2courses').style.display = 'none';
    document.getElementById('ins3courses').style.display = 'block';
    document.getElementById('ins4courses').style.display = 'none';
    document.getElementById('ins5courses').style.display = 'none';
}

function myfunc_ins4course() {
    document.getElementById('ins1courses').style.display = 'none';
    document.getElementById('ins2courses').style.display = 'none';
    document.getElementById('ins3courses').style.display = 'none';
    document.getElementById('ins4courses').style.display = 'block';
    document.getElementById('ins5courses').style.display = 'none';
}

function myfunc_ins5course() {
    document.getElementById('ins1courses').style.display = 'none';
    document.getElementById('ins2courses').style.display = 'none';
    document.getElementById('ins3courses').style.display = 'none';
    document.getElementById('ins4courses').style.display = 'none';
    document.getElementById('ins5courses').style.display = 'block';
}

// courses details show functions
function myfunc_i1course1() {
    document.getElementById('courses_details_i1course1').style.display = 'block';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i1course2() {
    document.getElementById('courses_details_i1course1').style.display = 'block';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i1course3() {
    document.getElementById('courses_details_i1course1').style.display = 'block';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i1course4() {
    document.getElementById('courses_details_i1course1').style.display = 'block';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i1course5() {
    document.getElementById('courses_details_i1course1').style.display = 'block';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}



function myfunc_i2course1() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'block';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i2course2() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'block';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i2course3() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'block';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i2course4() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'block';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i2course5() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'block';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}



function myfunc_i3course1() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'block';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i3course2() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'block';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i3course3() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'block';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i3course4() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'block';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i3course5() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'block';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}



function myfunc_i4course1() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'block';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i4course2() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'block';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i4course3() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'block';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i4course4() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'block';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}
function myfunc_i4course5() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'block';
    document.getElementById('courses_details_i5course1').style.display = 'none';
}



function myfunc_i5course1() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'block';
}
function myfunc_i5course2() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'block';
}
function myfunc_i5course3() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'block';
}
function myfunc_i5course4() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'block';
}
function myfunc_i5course5() {
    document.getElementById('courses_details_i1course1').style.display = 'none';
    document.getElementById('courses_details_i2course1').style.display = 'none';
    document.getElementById('courses_details_i3course1').style.display = 'none';
    document.getElementById('courses_details_i4course1').style.display = 'none';
    document.getElementById('courses_details_i5course1').style.display = 'block';
}



var options = [];

$('.filter .dropdown .dropdown-menu a').on('click', function (event) {

    var $target = $(event.currentTarget),
        val = $target.attr('data-value'),
        $inp = $target.find('input'),
        idx;

    if ((idx = options.indexOf(val)) > -1) {
        options.splice(idx, 1);
        setTimeout(function () { $inp.prop('checked', false) }, 0);
    } else {
        options.push(val);
        setTimeout(function () { $inp.prop('checked', true) }, 0);
    }

    $(event.target).blur();

    console.log(options);
    return false;
});




var header = document.getElementById("ins_name");
var btns = header.getElementsByClassName("clg-name");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}


var header = document.getElementById("ins_courses");
var btns = header.getElementsByClassName("course_name");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}
