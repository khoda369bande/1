function showLoginAlert() {
    Swal.fire({
        title: 'Welcome!',
        text: 'You have successfully logged in.',
        icon: 'success',  // نوع آیکون: success, error, warning, info, question
        confirmButtonText: 'OK',
        timer: 3000  // پیام به صورت خودکار بعد از ۳ ثانیه بسته می‌شود
    });
}