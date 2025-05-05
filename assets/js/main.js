// let banners = document.getElementsByClassName('home-list-banner__item'); // Không dùng dấu chấm
// let i = 0;

// setInterval(() => {
//     let currentActive = document.querySelector('.active'); // Tìm phần tử đang active
//     if (currentActive) {
//         currentActive.classList.remove('active'); // Xóa class active
//     }
//     i++;
//     if (i >= banners.length) {
//         i = 0; // Quay lại banner đầu tiên nếu vượt quá
//     }
//     banners[i].classList.add('active'); // Thêm class active vào banner tiếp theo
// }, 3000);

const listBanner = document.querySelector('.home-list-banner');
const imgs = listBanner.getElementsByTagName('img');
const length = imgs.length; // Số lượng ảnh trong danh sách
let currentIndex = 0; 
setInterval(() => {
    if (currentIndex == length - 1) {
        currentIndex = 0; // Quay lại ảnh đầu tiên nếu vượt quá
        let width = imgs[0].offsetWidth;
        listBanner.style.transform = `translateX(0px)`; // Dịch chuyển sang trái 1 ảnh
    }
    else{
        currentIndex++;
        let width = imgs[0].offsetWidth;
        listBanner.style.transform = `translateX(-${width * currentIndex}px)`; // Dịch chuyển sang trái 1 ảnh
    }
}, 3000);