// Tìm phần tử theo ID
const element = document.getElementById('stock-detail-modal');

if (element) {
    // Lấy tất cả các style đang được áp dụng (bao gồm cả từ file CSS bên ngoài)
    const styles = window.getComputedStyle(element);
    
    console.log("Danh sách các style của div #detail-iddsd:");
    
    // In ra toàn bộ các thuộc tính style và giá trị tương ứng
    for (let i = 0; i < styles.length; i++) {
        const prop = styles[i];
        const value = styles.getPropertyValue(prop);
        console.log(`${prop}: ${value}`);
    }
} else {
    console.log("Không tìm thấy phần tử có id 'detail-iddsd'");
}

