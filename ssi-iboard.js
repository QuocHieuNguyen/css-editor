// Tìm phần tử theo ID
const element = document.getElementById('stock-detail-modal');

if (element) {
    // 2. Ghi đè giá trị của biến --tw-scale-x trực tiếp vào style của phần tử
    // Việc này sẽ ưu tiên cao hơn class .scale-100 trong CSS
    element.style.setProperty('--tw-scale-x', '1.07');
    element.style.setProperty('--tw-scale-y', '1.4');
    console.log("Đã cập nhật --tw-scale-x thành 1.07");
    console.log("Đã cập nhật --tw-scale-y thành 1.4");
} else {
    console.log("Không tìm thấy phần tử có id 'stock-detail-modal'");
}

