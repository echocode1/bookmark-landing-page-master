document.addEventListener('DOMContentLoaded', () =>{

    /* navbar-toggle-function */
    const hamburger = document.querySelector('.hamburger');
    const bookmarkLogo = document.querySelector('.bookmark-logo');
    const toggledNodes = document.querySelectorAll
    ('.list-item, .overlay, .bookmark-nav-logo, .nav-btn, .social-icon');

    hamburger.addEventListener('click', () => {
        if(window.innerWidth < 640){
            toggledNodes.forEach(elem => elem .classList.toggle("hidden"))
            hamburger.classList.toggle('open');
            bookmarkLogo.classList.toggle('visible')
        }
    })

    /* function to keep the default carousel slide underlined style  and to remove when due*/
    const tabLi1 = document.querySelector('#list__base1')
    function slideUnderlinedStyle(){
        tabLi1.classList.add('line')
    }
    slideUnderlinedStyle()

    function removeUnderlined(){
        tabLi1.classList.remove('line')
    }

    /*  tab-corousel-slide  */
    const tab1 = document.getElementById('list__base1');
    const tab2 = document.getElementById('list__base2');
    const tab3 = document.getElementById('list__base3');
    const tabImages = document.querySelectorAll('.tab__images img');
    const tabHeaders = document.querySelectorAll('.tab__headers h2');
    const tabPtext = document.querySelectorAll('.tab__texts p');
    const tabLi2 = document.querySelector('#list__base2')
    const tabLi3= document.querySelector('#list__base3')

    function slideUpdate(tabIndex){
        /* hide elem */
        tabImages.forEach(img => img.classList.add('hidden'));
        tabHeaders.forEach(headers => headers.classList.add('hidden'));
        tabPtext.forEach(pText => pText.classList.add('hidden'));

        /*  displays elem where and when needed  */
        tabImages[tabIndex].classList.remove('hidden');
        tabHeaders[tabIndex].classList.remove('hidden');
        tabPtext[tabIndex].classList.remove('hidden');
    }
    tab1.addEventListener('click', () => {
        slideUpdate(0);
        removeUnderlined();
        tabLi1.classList.add('active')
        tabLi2.classList.remove('active')
        tabLi3.classList.remove('active')
    });
    tab2.addEventListener('click', () => {
        slideUpdate(1);
        removeUnderlined();
        tabLi1.classList.remove('active')
        tabLi2.classList.add('active')
        tabLi3.classList.remove('active')
    });
    tab3.addEventListener('click', () => {
        slideUpdate(2);
        removeUnderlined();
        tabLi1.classList.remove('active')
        tabLi2.classList.remove('active')
        tabLi3.classList.add('active')
    });

    /*  function to reveal faq answers when clicked  */
    const FAQ = document.querySelectorAll(".questions");
    FAQ.forEach(question => {
        const btn = question.querySelector('span');
        let answers = question.nextElementSibling;
        let pseudoArrow = btn.nextElementSibling;
        btn.onclick = () => {
            answers.classList.remove('hidden')
            pseudoArrow.classList.toggle('hidden');
            btn.style.display = 'none';
            pseudoArrow.style.display = "block";
        }
        pseudoArrow.onclick = ()=>{
            answers.classList.add('hidden')
            btn.style.display = 'block';
            pseudoArrow.style.display = "none";
        }
    })

    /*  function to validate form  */
    const email = document.querySelector('.input');
    const validateBtn = document.getElementById('validate-btn');
    const errorResponse = document.querySelector('.error');

    function validEmail(){
        if( /^[a-z0-9]+@[a-z]+\.com/.test(email.value)){
            errorResponse.classList.add('hidden');
            email.classList.remove('input-border');
            email.value = '';
            setTimeout(() => {
                window.alert('Your email has been successfully received. We will stay in touch with you.');
            }, 0);
        }else{
            email.classList.add('input-border');
            errorResponse.classList.remove('hidden')
        }
    }
    validateBtn.addEventListener('click', validEmail)
})