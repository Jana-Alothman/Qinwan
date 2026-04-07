// ====================================================
// قِنوان — ملف جافاسكريبت الرئيسي
// ====================================================

// ====================================================
// منطق تسجيل الدخول وإنشاء الحساب — login.html & register.html
// ====================================================
window.addEventListener("DOMContentLoaded", () => {
  const roleButtons = document.querySelectorAll('.role-btn');
  const registerForm = document.querySelector('#registerForm');
  const loginForm    = document.querySelector('#loginForm');
  const createBtn    = document.querySelector('#createAccountBtn');

  // الدور المختار — افتراضي: مستثمر
  let selectedRole = 'مستثمر';

  // اختيار الدور عند الضغط
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedRole = btn.textContent.trim();
    });
  });

  // إنشاء حساب جديد
  if (createBtn) {
    createBtn.addEventListener('click', () => {
      const fullName = registerForm?.querySelector('input[type="text"]')?.value.trim();
      const email    = registerForm?.querySelector('input[type="email"]')?.value.trim();
      const password = registerForm?.querySelector('input[type="password"]')?.value.trim();

      if (!fullName || !email || !password) {
        alert('يرجى ملء جميع الحقول');
        return;
      }

      // حفظ بيانات المستخدم في localStorage
      const user = { fullName, email, password, role: selectedRole };
      localStorage.setItem(email, JSON.stringify(user));

      // التوجيه حسب الدور — role في جدول User
      if (selectedRole === 'مزارع') {
        window.location.href = 'farmer.html';
      } else {
        window.location.href = 'investor.html';
      }
    });
  }

  // تسجيل الدخول
  if (loginForm) {
    loginForm.addEventListener('submit', e => {
      e.preventDefault();

      const email    = loginForm.querySelector('input[type="email"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value.trim();
      const savedUser = JSON.parse(localStorage.getItem(email));

      if (!savedUser) {
        alert('الحساب غير موجود');
        return;
      }

      if (savedUser.password !== password) {
        alert('كلمة المرور غير صحيحة');
        return;
      }

      // التوجيه حسب الدور
      if (savedUser.role === 'مزارع') {
        window.location.href = 'farmer.html';
      } else {
        window.location.href = 'investor.html';
      }
    });
  }
});

// ====================================================
// التنقل بين الصفحات — farmer.html
// ====================================================
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo(0, 0);
}

// ====================================================
// معاينة الصور قبل الرفع — farmer.html (نشر تحديث)
// ====================================================
function previewFiles(input) {
  const preview = document.getElementById('file-preview');
  preview.innerHTML = '';

  Array.from(input.files).forEach(file => {
    const reader = new FileReader();

    reader.onload = e => {
      const wrap = document.createElement('div');
      wrap.style.cssText = `
        width: 80px; height: 80px; border-radius: 8px; overflow: hidden;
        background: #edf3ee; border: 1px solid #d9c8b0;
        display: flex; align-items: center; justify-content: center;
        font-family: 'Noto Naskh Arabic', serif; font-size: 12px; color: #8A6F5A;
      `;
      if (file.type.startsWith('video')) {
        wrap.textContent = 'فيديو';
      } else {
        wrap.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;"/>`;
      }
      preview.appendChild(wrap);
    };

    reader.readAsDataURL(file);
  });
}

// ====================================================
// إرسال تحديث المزرعة — farmer.html (نشر تحديث)
// ====================================================
function submitUpdate() {
  showToast('تم نشر التحديث بنجاح');
}

// ====================================================
// إضافة مزرعة جديدة — farmer.html (إضافة مزرعة)
// ====================================================
function submitFarm() {
  showToast('تم إرسال المزرعة للمراجعة');
}

// ====================================================
// قبول طلب استثمار — farmer.html (طلبات الاستثمار)
// ====================================================
function acceptRequest(btn) {
  const card = btn.closest('.request-card');
  card.className = 'request-card status-accepted';
  card.dataset.status = 'accepted';
  card.querySelector('.status-badge').textContent = 'مقبول';
  card.querySelector('.request-actions').remove();
  showToast('تم قبول الطلب');
}

// ====================================================
// رفض طلب استثمار — farmer.html (طلبات الاستثمار)
// ====================================================
function rejectRequest(btn) {
  const card = btn.closest('.request-card');
  card.className = 'request-card status-rejected';
  card.dataset.status = 'rejected';
  card.querySelector('.status-badge').textContent = 'مرفوض';
  card.querySelector('.request-actions').remove();
  showToast('تم رفض الطلب');
}

// ====================================================
// فلترة الطلبات حسب الحالة — farmer.html (طلبات الاستثمار)
// ====================================================
function filterRequests(status, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.request-card').forEach(card => {
    card.style.display = (status === 'all' || card.dataset.status === status) ? 'block' : 'none';
  });
}

// ====================================================
// عرض رسالة التنبيه Toast — مشترك بين الصفحات
// ====================================================
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}