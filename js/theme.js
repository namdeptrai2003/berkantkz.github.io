// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {
    var sozler = [
		"Ne mutlu Türk’üm diyene!", 
		"Adalet gücü bağımsız olmayan bir milletin, devlet halinde varlığı kabul olunmaz.",
		"Yurtta sulh, cihanda sulh.",
		"Acizler için imkânsız, korkaklar için müthiş gözüken şeyler kahramanlar için idealdir.",
		"Hayatta en hakiki mürşid ilimdir, fendir.",
		"Vatanını en çok seven, görevini en iyi yapandır.",
		"Türk esirlik kabul etmeyen bir millettir.",
		"Muhtaç olduğun kudret, damarlarındaki asil kanda, mevcuttur.",
		"Türk milleti istiklalsiz yaşamamıştır, yaşayamaz ve yaşamayacaktır.",
		"Türk kuvvet ve zekâsının yenmediği ve yenemeyeceği güçlük yoktur.",
	    "Türk! Övün, çalış, güven.",
		"İstikbâl göklerdedir."
		],
        secilen_soz = sozler[Math.floor(Math.random() * sozler.length)];
		
	
		document.getElementById("soz").innerHTML = "''" + secilen_soz + "''";
		
});

$(function() {
	var arkaplan = [
			"ata.jpg",
			"ata2.jpg",
			"ata3.jpg",
			"ata4.jpg",
			"ata5.jpg",
			"ata6.jpg",
			//"ata7.jpg",
			"ata8.jpg",
			"ata9.png",
			"ata10.jpg",
			],
	secilen_arkaplan = arkaplan[Math.floor(Math.random() * arkaplan.length)];
	
	document.body.style.background = "radial-gradient(circle at 50% 50%,rgba(0,0,0,0.46),rgba(0,0,0,0.88)),url('img/" + secilen_arkaplan + "') no-repeat";
	//document.body.style.backgroundSize = "cover";
}); 
