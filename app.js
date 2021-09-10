// toggle when user clicks on button
const openDropdown = () => {
    document.getElementById("dropBtn").classList.toggle("show");    
}

window.onClick = function(event) {
    if (!event.target.matches('.drop-btn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content')
        // const i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const txtType = (el, toRotate, period) => {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
}

txtType.prototype.tick = () => {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0,this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.length + 1);
    }

    this.el.innderHTML = '<span class="wrap">'+this.txt+'</span>';

    const that = this;
    const delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(() => {
        that.tick();
    }, delta);
}

window.onload = () => {
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new txtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff }";
    document.body.appendChild(css);
}