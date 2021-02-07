

new Vue({
    el: '#app',
    data: {
        changeLanguage: false,
        changeMenuMod: false
    },
    methods: {
        log: function () {
            console.log('click!!!!')
        },
        changeMenu: function () {
            document.body.classList.toggle("overflowHidden");
            document.body.classList.toggle("infoZIndex");
            this.changeMenuMod = !this.changeMenuMod;
        },
        goTo: function (classLink, path, offset) {
            document.body.classList.remove("overflowHidden");
            this.changeMenuMod = false;
            $('html, body').animate ({
                scrollTop: $(path).offset ().top - offset
            }, 600);
        }
    }
})

new Vue({
    el: '#backgroundEnd',
    data: {

    },
    methods: {
        goTo: function (classLink, path, offset) {
            $('html, body').animate ({
                scrollTop: $(path).offset ().top - offset
            }, 600);
        },
        nullInput: function () {
            this.$refs.inputDown.value = '';
        },
        nullInputTop: function () {
            this.$refs.inputTop.value = '';
        }
    }
})

document.addEventListener("mousemove", paralax);
function paralax(event) {
    if(window.innerWidth >= 768) {
        this.querySelector('.backgroundHomeImg').style.transform = `translate(${event.clientX / 30}px, ${event.clientY / 50}px)`;
        this.querySelector('.paralaxxxxTittle').style.transform = `translate(-${event.clientX / 50}px, -${event.clientY / 80}px)`;
        this.querySelector('.paralaxxxxSubTittle').style.transform = `translate(-${event.clientX / 50}px, -${event.clientY / 80}px)`;
        this.querySelector('.paralaxxxxBtn').style.transform = `translate(-${event.clientX / 50}px, -${event.clientY / 80}px)`;
        this.querySelector('.paralaxxxxHeader').style.transform = `translate(-${event.clientX / 50}px, -${event.clientY / 80}px)`;
    }
}

changeHeight();
window.addEventListener("resize", changeHeight);
function changeHeight() {
    let height = document.querySelector('.backgroundHome').offsetHeight;
    document.querySelector('.scene').style.height = `${height}px`;
    document.querySelector('.backgroundHomeImg ').style.height = `${height + 100}px`;
    console.log('resize')
}

