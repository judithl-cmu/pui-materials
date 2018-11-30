$(document).ready(function () {
    var sInit = skrollr.init();

    // correspond animation with scroll position

    // image blur and fade
    var viewportHt = $(window).height();

    $(window).on("scroll", function(){

        // var scrollPos = $(window).scrollTop();
        // $(".img-blur").css({
        //     filter: "blur(" + scrollPos + ")px"
        // });
        $(".img-fade").css(
            "opacity", 1 - $(window).scrollTop() / viewportHt
        );
    });

    // click to show info about other artists

    var artistName = "";
    var artistContent = "";
    var artistLink = "";

    // check if class name exists
    $("span").on("click", function(){

        // check if class exists

        if ($(".clickedInfo")[0]) {
            $("[class*='clickedInfo']").removeClass("clickedInfo");
        }

        // clear content before each append event
        if ($(this).children().length > 0) {
            $("#artist-name").text("");
            $("#artist-intro").text("");
            $("#link").text("");
            $("#link").attr("href", "");
        }

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
                case "Paul Cezanne":
                    artistContent = "Paul Cezanne was a French artist and Post-Impressionist painter whose work laid the foundations of the transition from the 19th-century conception of artistic endeavor to a new and radically different world of art in the 20th century.";
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
            $("#link").text("View More");
            $("#link").attr("href", artistLink);
            var divHeight = $("#other-artists").height();
            this.append($("#other-artists")[0]);

            $("#other-artists").css({
                "top": -divHeight - 45,
                "left": - 100,
                "display": "block",
                "font-weight": 500
            });

            $(this).addClass("clickedInfo");
    });

    // close popup if clicked outside

    $(document).on("click", function() {
        var clickTarget = $(event.target);
        if (!clickTarget.hasClass("clickedInfo")) {
            $("#other-artists").css({
                "display": "none"
            });
        }
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


    $(w).on("resize",function(){
        winsize();

    });

    function isInView(x) {
        var xTop = x.offset().top;
        var xBottom = xTop + x.outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return xBottom > viewportTop && xTop < viewportBottom;
    }

    var winHt = $(window).height();
    var winWth = $(window).width();
    function ripplesInit() {
        $("#waterlilies-painting").ripples({
            resolution: 512,
            dropRadius: 30 * Math.random(),
            perturbance: 0.06
        });
        for (var j = 0; j <= 15; j++) {
            $("#waterlilies-painting").ripples("drop", winHt * Math.random(), winWth * Math.random(), 24 * Math.random(), 0.01 + 0.03 * Math.random());
        }
    }


    $(function(){
        $(w).on('load',function(){
            winsize();

            $(w).on("resize scroll", function() {
                var dotsInView = isInView($(".container-giverny"));
                var ripplesInView = isInView($("#waterlilies-painting"));

                // if dots container is in view, generate dots
                if (dotsInView) {
                    //dotsInit();
                }

                // if waterlilies are in view, generate ripples
                else if (ripplesInView) {
                    ripplesInit();
                }
            });


        });

    });

    $(function() {
        $(".js-morphing").morphing({
            radius: 400
        });
    });





});