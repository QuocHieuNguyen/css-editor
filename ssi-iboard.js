// Tìm phần tử theo ID
var element = document.getElementById('stock-detail-modal');

if (element) {
    // 2. Ghi đè giá trị của biến --tw-scale-x trực tiếp vào style của phần tử
    // Việc này sẽ ưu tiên cao hơn class .scale-100 trong CSS
    element.style.setProperty('--tw-scale-x', '1.07');
    element.style.setProperty('--tw-scale-y', '1.5');
    console.log("Đã cập nhật --tw-scale-x thành 1.07");
    console.log("Đã cập nhật --tw-scale-y thành 1.5");
} else {
    console.log("Không tìm thấy phần tử có id 'stock-detail-modal'");
}
// delete match box
const elementToDelete = document.getElementById('matched-box-container');

if (elementToDelete) {
    elementToDelete.remove();
    console.log("Đã xóa phần tử #matched-box-container thành công.");
} else {
    console.log("Không tìm thấy phần tử có id 'matched-box-container' để xóa.");
}
// delete header
const childElement = document.getElementById('stock-detail-header');

if (childElement) {
    const parentElement = childElement.parentElement;
    
    if (parentElement) {
        parentElement.remove();
        console.log("Đã xóa div bao ngoài của #stock-detail-header");
    }
} else {
    console.log("Không tìm thấy div có id 'stock-detail-header'.");
}
// change tradingview
var xpath = '//*[@id="trading-transaction"]/div[1]';
var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (element) {
    // CÁCH A: Thay thế toàn bộ class cũ bằng class mới
    element.className = "w-3/4 bg-secondary rounded p-1 custom-stock-detail-chart"; 

    // CÁCH B: Thêm hoặc xóa class cụ thể (khuyên dùng nếu là Tailwind)
    // element.classList.remove('old-class');
    // element.classList.add('new-class');

    console.log("Đã sửa class thành công!");
} else {
    console.log("Không tìm thấy phần tử với XPath đã cho.");
}
var xpath = '//*[@id="price-depth-container"]';
var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (element) {
    // CÁCH A: Thay thế toàn bộ class cũ bằng class mới
    element.className = "w-1/4 flex-1 price-depth-container"; 

    // CÁCH B: Thêm hoặc xóa class cụ thể (khuyên dùng nếu là Tailwind)
    // element.classList.remove('old-class');
    // element.classList.add('new-class');

    console.log("Đã sửa class thành công!");
} else {
    console.log("Không tìm thấy phần tử với XPath đã cho.");
}
