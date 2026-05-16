(function() {
    let intervalId = null;

    // Hàm thực hiện giả lập ấn nút mũi tên xuống
    function pressArrowDown() {
        const target = document.activeElement || document.body;

        const eventDown = new KeyboardEvent('keydown', {
            key: 'ArrowDown', code: 'ArrowDown', keyCode: 40, which: 40, bubbles: true, cancelable: true
        });
        const eventUp = new KeyboardEvent('keyup', {
            key: 'ArrowDown', code: 'ArrowDown', keyCode: 40, which: 40, bubbles: true, cancelable: true
        });

        target.dispatchEvent(eventDown);
        target.dispatchEvent(eventUp);

        console.log('👇 Đã tự động ấn mũi tên xuống tại:', new Date().toLocaleTimeString());
    }

    // Hàm bật/tắt (Toggle) tính năng tự động
    function toggleAutoPress() {
        if (intervalId) {
            // Nếu đang chạy -> Dừng lại
            clearInterval(intervalId);
            intervalId = null;
            console.log('🛑 Đã DỪNG tự động ấn (Trạng thái: TẮT)');
        } else {
            // Nếu đang tắt -> Bật lên
            pressArrowDown(); // Chạy ngay lần đầu
            intervalId = setInterval(pressArrowDown, 5000); // Lặp mỗi 5 giây
            console.log('🟩 Bắt đầu tự động ấn mỗi 5 giây (Trạng thái: BẬT)');
        }
    }

    // Lắng nghe sự kiện phím Backspace từ người dùng để Toggle
    window.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace') {
            e.preventDefault(); // Ngăn trình duyệt thực hiện hành động quay lại trang cũ của phím Backspace
            toggleAutoPress();
        }
    });

    // Mặc định ban đầu: Tự động chạy luôn khi vừa paste code
    pressArrowDown();
    intervalId = setInterval(pressArrowDown, 5000);
    console.log('✅ Tool đã hoạt động!');
    console.log('⌨️  Mẹo: Nhấp chuột vào trang web, sau đó bấm phím [Backspace] để BẬT/TẮT nhanh.');
})();
