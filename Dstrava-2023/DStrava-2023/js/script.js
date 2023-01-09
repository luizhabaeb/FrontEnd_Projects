const li = document.querySelectorAll(".links");
    const liDesktop = document.querySelectorAll(".linksDesktop");
    const sec = document.querySelectorAll("section");

    let r = false; /* variavel referente a função de resposta do conteudo*/
    let faq = false; /* variavel referente a função de resposta do faq*/

    function activeMenu() {
        let len = sec.length;
        while (--len && window.scrollY + 97 < sec[len].offsetTop){}
        li.forEach(ltx => ltx.classList.remove("active"));
        li[len].classList.add("active");

        liDesktop.forEach(ltx => ltx.classList.remove("active"));
        liDesktop[len].classList.add("active");
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu);

    function openNav() {
        const iconeMenu = document.getElementById('menu');
        const body = document.getElementsByTagName('body')[0];
        const menu = document.getElementsByClassName('menu-mobile')[0];

        this.nav =! this.nav;

        if (this.nav) {
            iconeMenu.src = 'assets/icons/i-fechar.svg';
            menu.style.display = 'block';
            document.documentElement.style.overflow = 'hidden';
            document.body.scroll = "no"
        }
        else {
            iconeMenu.src = 'assets/icons/i-menu.svg';
            menu.style.display = 'none';
            body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
            document.body.scroll = "yes"
        }

    }

    function respostaConteudo(posicao) {        
        const resposta = document.getElementsByClassName('resposta-curso')[posicao];
        const iconeCon = document.getElementsByClassName('i-conteudo')[posicao];

        r =! r;
                
        if(r) {
            resposta.style.display = 'block';
            iconeCon.src = 'assets/icons/i-menos-faq-conteudo.svg';
        } else {
            resposta.style.display = 'none';
            iconeCon.src = 'assets/icons/i-mais-faq-conteudo.svg';
        }
    }

    function respostaDuvidas(posicao) {        
        const resposta = document.getElementsByClassName('faq-resposta')[posicao];
        const iconeFaq = document.getElementsByClassName('i-faq')[posicao];

        faq =! faq;
                
        if(faq) {
            resposta.style.display = 'block';
            iconeFaq.src = 'assets/icons/i-acima-faq-duvidas.svg';
        } else {
            resposta.style.display = 'none';
            iconeFaq.src = 'assets/icons/i-abaixo-faq-duvidas.svg';
        }
    }