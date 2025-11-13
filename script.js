document.addEventListener('DOMContentLoaded', function() {
    // جلب العناصر من الصفحة
    const loadingOverlay = document.getElementById('loading-overlay');
    const brandNameContainer = document.querySelector('.brand-title');
    const brandNameSpan = document.getElementById('brand-name-animation');
    const heartAnimation = document.getElementById('heart-animation');
    const mainContent = document.getElementById('main-content');
    
    const brandName = "آياتٌ بيِّناتٍ";
    let charIndex = 0;

    // دالة لكتابة الاسم حرفاً بعد حرف
    function typeWriter() {
        if (charIndex < brandName.length) {
            brandNameSpan.innerHTML += brandName.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 150); // سرعة الكتابة
        } else {
            // عند انتهاء الكتابة
            brandNameContainer.classList.add('typing-done'); // لإخفاء المؤشر الوامض
            
            // إضافة كلاس التظليل لبدء الأنيميشن
            brandNameContainer.classList.add('highlighted');
            
            // إظهار أنيميشن القلب بعد 0.5 ثانية من بدء التظليل
            setTimeout(() => {
                heartAnimation.classList.remove('hidden');
                heartAnimation.classList.add('show');
                
                // بعد انتهاء أنيميشن القلب بالكامل (حوالي 2.5 ثانية)
                setTimeout(() => {
                    // إخفاء شاشة التحميل
                    loadingOverlay.style.opacity = '0';
                    
                    // إظهار المحتوى الرئيسي
                    mainContent.classList.remove('hidden');
                    mainContent.classList.add('visible');

                    // إزالة شاشة التحميل من العرض تماماً
                    setTimeout(() => {
                        loadingOverlay.style.display = 'none';
                    }, 800);

                }, 2500); // وقت كافٍ لأنيميشن القلب (رسم + حركة)

            }, 500);
        }
    }

    // بدء الأنيميشن
    typeWriter();
});