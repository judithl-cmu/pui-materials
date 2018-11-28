$(document).ready(function () {
    var sInit = skrollr.init();

    // correspond animation with scroll position

    // var startPos = $("#timeline").offset();
    // var scrollPos = $("#timeline").scrollTop - startPos;
    // var svgLen = $("#timeline").height();
    //
    // $("#timeline-path").style.strokeDashoffset = svgLen - scrollPos + startPos;

    // hover to show info about other artists

    var artistName;
    var artistContent = "";
    var artistLink = "";

    $("span").on("click", function(){
        var spanPosTop = $(this).offset().top;
        var spanPosLeft = $(this).offset().left;

        artistName = $(this).text();
        $("#artist-name").text(artistName);
        //switch statement to determine which artist content and link to attach
        switch (artistName) {
            case "Gustave Courbet":
                artistContent = "Jean Désiré Gustave Courbet was a French painter who led the Realism movement in 19th-century French painting.";
                artistLink = "https://en.wikipedia.org/wiki/Gustave_Courbet";
                break;
            case "Edouard Manet":
                artistContent = "Édouard Manet was one of the first 19th-century artists to paint modern life, and a pivotal figure in the transition from Realism to Impressionism.";
                artistLink = "https://en.wikipedia.org/wiki/%C3%89douard_Manet";
                break;
            case "Charles Gleyre":
                artistContent = "Marc Gabriel Charles Gleyre was a Swiss artist who was a resident in France from an early age. He taught a number of younger artists who became prominent.";
                artistLink = "https://en.wikipedia.org/wiki/Charles_Gleyre";
                break;
            case "Pierre-Auguste Renoir":
                artistContent = "As a celebrator of beauty and especially feminine sensuality, it has been said that \"Renoir is the final representative of a tradition which runs directly from Rubens to Watteau.\"";
                artistLink = "https://en.wikipedia.org/wiki/Pierre-Auguste_Renoir";
                break;
            case "Frédéric Bazille":
                artistContent = "Frédéric Bazille was a French Impressionist painter. Many of Bazille's major works are examples of figure painting in which he placed the subject figure within a landscape painted en plein air.";
                artistLink = "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Bazille";
                break;
            case "Alfred Sisley":
                artistContent = "Alfred Sisley was the most consistent of the Impressionists in his dedication to painting landscape en plein air; he found that Impressionism fulfilled his artistic needs.";
                artistLink = "https://en.wikipedia.org/wiki/Alfred_Sisley";
                break;
            case "Sisley":
                artistContent = "Alfred Sisley was the most consistent of the Impressionists in his dedication to painting landscape en plein air; he found that Impressionism fulfilled his artistic needs.";
                artistLink = "https://en.wikipedia.org/wiki/Alfred_Sisley";
                break;
            case "Paul Cézanne":
                artistContent = " was a French artist and Post-Impressionist painter whose work laid the foundations of the transition from the 19th-century conception of artistic endeavor to a new and radically different world of art in the 20th century.";
                artistLink = "https://en.wikipedia.org/wiki/Paul_C%C3%A9zanne";
                break;
            case "Camille Pissarro":
                artistContent = "Camille Pissarro was a Danish-French Impressionist and Neo-Impressionist painter.";
                artistLink = "https://en.wikipedia.org/wiki/Camille_Pissarro";
                break;
            case "Edgar Degas":
                artistContent = "Edgar Degas is especially identified with the subject of dance; more than half of his works depict dancers. Regarded as one of the founders of Impressionism, he rejected the term, preferring to be called a realist.";
                artistLink = "https://en.wikipedia.org/wiki/Edgar_Degas";
                break;
        }
        $("#artist-intro").text(artistContent);
        $(".link").attr("href", artistLink);
        var divHeight = $("#other-artists").height();
        var divWidth = $("#other-artists").width();

        $("#other-artists").css({
            "top": spanPosTop - 15 - divHeight,
            "left": spanPosLeft - divWidth / 2,
            "display": "block"
        });

    });

    // manipulate position of 1874
    var impre1Pos = $("#impression-1").offset().top;
    var impre1Height = $("#impression-1").height();

    // i have this question
    $("#impression-2").css({
        "top": impre1Pos + impre1Height + 30
    });

    // monet's paintings as particles
    // editing background image of dots
    var dotsBgArr = ['url("source/giverny/bordighera.jpg")',
        'url("source/giverny/Claude_Monet_-_Monet\'s_garden_at_Vétheuil_(1880).jpg")',
        'url("source/giverny/sunlight-effect-under-the-poplars.Large.jpg")',
        'url("source/giverny/young-girl-in-the-garden-at-giverny.jpg")',
        'url("source/giverny/cliff-walk-at-pourville.jpg")',
        'url("source/giverny/poplar-2.jpg")',
        'url("source/giverny/grainstack.jpg")'
    ];

    $(".text-impressionism").css("background-image", dotsBgArr[randomIdx]);
    var randomIdx, randomPosX, randomPosY;
    var total = 300, px = true, fn = 'velocity', step = 20, test, ar = {},
        d = document, w = window, x, y, s, ww, wh, wwHalf, whHalf, ww22, wh22, a = {}, dotsArr = [], dot, m = Math, mr = function(n){return m.random()*(n||1)};

    function dotsInit() {
        $("#dots").empty();
        dotsArr.length = 0;
        for (var i=0; i < total; i++) {
            dotsArr.push($('<i/>').css(ar));
            randomIdx = Math.floor(Math.random() * dotsBgArr.length);
            randomPosX = Math.floor(Math.random() * 100);
            randomPosY = Math.floor(Math.random() * 100);
            (dotsArr[i]).css({
                "background-image": dotsBgArr[randomIdx],
                "background-position": randomPosX + "%" + " " + randomPosY + "%"
            });
        }
        $("#dots").html(dotsArr);
        for (i in dotsArr) {
            update(i);
        }
    }

    function update(n) {
        if (dotsArr[n]) {
            s = mr(120) + 8;
            o = mr(.8) + .2;
            a = {
                left: mr(ww22) - wwHalf,
                top: mr(wh22) - whHalf,
                width: s,
                height: s,
                opacity: o
            };
            //console.log('starting position: (' + a.left + ', ' + a.top)
            d = mr(1500) + 2500;
            dotsArr[n].animate(a, d, 'swing', function () {
                reset(n);
            });
        }
    }
    function reset(n) {
        if (dotsArr[n]) {
            dotsArr[n].stop().css(ar);
            update(n);
        }
    }

    function winsize() {
        ww = $(w).width();
        wh = $(w).height();
        ww22 = ww*1.6;
        wh22 = wh*1.6;
        wwHalf = ww/2;
        whHalf = wh/2;
        ar = {
            top:whHalf+'px',
            left:wwHalf+'px',
            opacity:0,
            width:0,
            height:0
        };
    }

    function log(e){try{console.log(e)}catch(e){}}


    $(w).on('resize',function(){
        winsize();
    });

    $(function(){
        $(w).on('load',function(){
            winsize();
            // temporarily disable
            // dotsInit();
        });

    });

    $(function() {
        $(".js-morphing").morphing({
            radius: 400
        });
    });

});