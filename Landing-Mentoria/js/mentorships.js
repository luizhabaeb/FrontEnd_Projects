/* comportamento do carousel */

$(function () {
    $('.autoplay').slick({
        slidesToShow: 6,
        slidesToScroll: 1, /* foco em um item - posso definir*/
        autoplaySpeed: 0,
        speed: 2500,
        infinite: true,
        autoplay: true,
        cssEase: 'linear',
        nextArrow: ``,
        prevArrow: ``,  /* configuração do cursor */
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
});

let faq = false;

function answerFaq(posicao) {
    const answer = document.getElementsByClassName('answer')[posicao];
    const iconFaq = document.getElementsByClassName('i-faq')[posicao];

    faq = !faq; /* compara */

    if (faq) {
        answer.style.display = 'block';
        iconFaq.src = './assets/icons/i-close-faq.svg';
    } else {
        answer.style.display = 'none';
        iconFaq.src = './assets/icons/i-open-faq.svg';
    }
}


$(window).scroll(function () {
    var resolution = window.innerWidth;

    switch (resolution) {
        case 1920:
            if ($(document).scrollTop() > 1100) {
                document.getElementsByClassName('nav-hidden')[0].style.display = "block";
                $('.nav-deploy').fadeIn();
            } else {
                document.getElementsByClassName('nav-hidden')[0].style.display = "none";
                $('.nav-deploy').fadeOut();  /* pesquisar fadein fadeout */
            }
            break;
        case 1440:
            if ($(document).scrollTop() > 800) {
                document.getElementsByClassName('nav-hidden')[0].style.display = "block";
                $('.nav-deploy').fadeIn();
            } else {
                document.getElementsByClassName('nav-hidden')[0].style.display = "none";
                $('.nav-deploy').fadeOut();
            }
            break;
        case 1366:
            if ($(document).scrollTop() > 800) {
                document.getElementsByClassName('nav-hidden')[0].style.display = "block";
                $('.nav-deploy').fadeIn();
            } else {
                document.getElementsByClassName('nav-hidden')[0].style.display = "none";
                $('.nav-deploy').fadeOut();
            }
            break;

        default:
            break;
    }
});

function openNav(status) {   /* Faz a jogada da exibição e dos ícones com o nav-mobile */
    const iconeMenu = document.getElementById('nav-icon');
    const body = document.getElementsByTagName('body')[0];
    const links = document.getElementsByClassName('links-hidden')[0];

    if (status === 'false') {
        iconeMenu.src = './assets/icons/i-nav-close.svg';
        links.style.display = 'none';
        body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes"
    } else {
        this.nav = !this.nav;
        if (this.nav) {
            iconeMenu.src = './assets/icons/i-nav-open.svg';
            links.style.display = 'block';
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no"
        }
        else {
            iconeMenu.src = './assets/icons/i-nav-close.svg';
            links.style.display = 'none';
            body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
            document.body.scroll = "yes"
        }
    }
}
