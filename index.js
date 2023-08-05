function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_qt486q3',
            'template_b50ajem',
            event.target,
            'lW6WuZhYa80XP4E5h'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at jktavera21@gmail.com"
            )
        })
    }

    let isModalOpen = false;
    function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false;
            return document.body.classList.remove("modal--open");
        }
        isModalOpen = !isModalOpen;
        document.body.classList += " modal--open";
    }