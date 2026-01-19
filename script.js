// ฟังก์ชันสลับหน้า (SPA behavior)
function showPage(pageId) {
    // 1. ซ่อนทุกหน้า
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 2. แสดงหน้าเป้าหมาย
    const targetPage = document.getElementById(pageId);
    if(targetPage) {
        targetPage.classList.add('active');
    }

    // 3. ปรับเมนูให้ Active ตามหน้า
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.classList.remove('active-link');
    });
    
    // หาปุ่มเมนูที่ตรงกับหน้านั้นๆ (Simple logic)
    const activeIndex = ['home', 'policies', 'members'].indexOf(pageId);
    if(activeIndex >= 0 && menuItems[activeIndex]) {
        menuItems[activeIndex].classList.add('active-link');
    }

    // เลื่อนกลับไปบนสุดทุกครั้งที่เปลี่ยนหน้า
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ลูกเล่น: เมื่อโหลดหน้าเว็บ ให้ทำ Animation การ์ดนโยบายทีละใบ
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.policy-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animation = `fadeIn 0.5s ease-in-out forwards ${index * 0.1}s`;
    });
});

// ลูกเล่น: Hamburger Menu สำหรับมือถือ
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    if(menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute';
        menu.style.top = '60px';
        menu.style.right = '0';
        menu.style.background = 'white';
        menu.style.width = '100%';
        menu.style.padding = '1rem';
        menu.style.boxShadow = '0 5px 5px rgba(0,0,0,0.1)';
    }
});
