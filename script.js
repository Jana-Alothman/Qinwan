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
// ====================================================
// دوال المستثمر — بنفس أسلوب farmer.html
// ====================================================

// تهيئة بيانات localStorage
function initInvestorData() {
  if (!localStorage.getItem('investorWishlist')) {
    localStorage.setItem('investorWishlist', JSON.stringify([]));
  }
  if (!localStorage.getItem('investorCart')) {
    localStorage.setItem('investorCart', JSON.stringify([]));
  }
  if (!localStorage.getItem('investorRequests')) {
    localStorage.setItem('investorRequests', JSON.stringify([]));
  }
}

// تبديل إضافة/إزالة من قائمة الرغبات
function toggleWishlist(btn, farmName, region, price) {
  let wishlist = JSON.parse(localStorage.getItem('investorWishlist')) || [];
  const exists = wishlist.find(item => item.name === farmName);
  
  if (exists) {
    wishlist = wishlist.filter(item => item.name !== farmName);
    btn.classList.remove('active');
    showToast('تم إزالة المزرعة من قائمة الرغبات');
  } else {
    wishlist.push({ name: farmName, region: region, price: price });
    btn.classList.add('active');
    showToast('تم إضافة المزرعة إلى قائمة الرغبات');
  }
  
  localStorage.setItem('investorWishlist', JSON.stringify(wishlist));
  renderWishlist();
}

// عرض قائمة الرغبات
function renderWishlist() {
  const container = document.getElementById('wishlist-container');
  if (!container) return;
  
  const wishlist = JSON.parse(localStorage.getItem('investorWishlist')) || [];
  
  if (wishlist.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">★</div>
        <p>قائمة الرغبات فارغة</p>
        <button class="btn-primary" onclick="showPage('browse')">استكشاف المزارع</button>
      </div>
    `;
    return;
  }
  
  let html = '';
  wishlist.forEach((item, index) => {
    html += `
      <div class="wishlist-item">
        <div class="wishlist-item-info">
          <div class="wishlist-item-name">${item.name}</div>
          <div class="wishlist-item-meta">${item.region} · ${item.price} ر.س/م²</div>
        </div>
        <div class="wishlist-item-actions">
          <button class="icon-btn" onclick="addToCartFromWishlist('${item.name.replace(/'/g, "\\'")}', ${parseInt(item.price) || 25})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <use href="#icon-cart"/>
            </svg>
          </button>
          <button class="icon-btn" onclick="removeFromWishlist(${index})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <use href="#icon-trash"/>
            </svg>
          </button>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// إزالة من قائمة الرغبات
function removeFromWishlist(index) {
  let wishlist = JSON.parse(localStorage.getItem('investorWishlist')) || [];
  wishlist.splice(index, 1);
  localStorage.setItem('investorWishlist', JSON.stringify(wishlist));
  renderWishlist();
  showToast('تم الإزالة من قائمة الرغبات');
}

// إضافة إلى السلة
function addToCart(farmName, pricePerSqm) {
  let cart = JSON.parse(localStorage.getItem('investorCart')) || [];
  const exists = cart.find(item => item.name === farmName);
  
  if (exists) {
    showToast('المزرعة موجودة بالفعل في السلة');
    return;
  }
  
  cart.push({
    name: farmName,
    pricePerSqm: pricePerSqm,
    area: 100,
    totalPrice: pricePerSqm * 100
  });
  
  localStorage.setItem('investorCart', JSON.stringify(cart));
  renderCart();
  showToast('تم إضافة المزرعة إلى سلة الاستثمار');
}

// إضافة من قائمة الرغبات إلى السلة
function addToCartFromWishlist(farmName, pricePerSqm) {
  let cart = JSON.parse(localStorage.getItem('investorCart')) || [];
  const exists = cart.find(item => item.name === farmName);
  
  if (exists) {
    showToast('المزرعة موجودة بالفعل في السلة');
    return;
  }
  
  cart.push({
    name: farmName,
    pricePerSqm: pricePerSqm,
    area: 100,
    totalPrice: pricePerSqm * 100
  });
  
  localStorage.setItem('investorCart', JSON.stringify(cart));
  renderCart();
  showToast('تم إضافة المزرعة إلى سلة الاستثمار');
}

// عرض السلة
function renderCart() {
  const container = document.getElementById('cart-container');
  if (!container) return;
  
  let cart = JSON.parse(localStorage.getItem('investorCart')) || [];
  
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛒</div>
        <p>سلة الاستثمار فارغة</p>
        <button class="btn-primary" onclick="showPage('browse')">استكشاف المزارع</button>
      </div>
    `;
    return;
  }
  
  let total = 0;
  let html = '';
  
  cart.forEach((item, index) => {
    total += item.totalPrice;
    html += `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-details">${item.pricePerSqm} ر.س/م² · المساحة: ${item.area} م²</div>
        </div>
        <div class="cart-item-actions">
          <input type="number" class="area-input" value="${item.area}" min="10" step="10" 
                 onchange="updateCartArea(${index}, this.value, ${item.pricePerSqm})">
          <span style="font-weight:700;color:var(--green-dark);">${item.totalPrice.toLocaleString()} ر.س</span>
          <button class="icon-btn" onclick="removeFromCart(${index})">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <use href="#icon-trash"/>
            </svg>
          </button>
        </div>
      </div>
    `;
  });
  
  html += `
    <div class="cart-summary">
      <div class="cart-total">${total.toLocaleString()} <span>ر.س</span></div>
      <button class="btn-submit-request" onclick="submitInvestmentRequests()">تقديم طلبات الاستثمار</button>
    </div>
  `;
  
  container.innerHTML = html;
}

// تحديث مساحة الاستثمار
function updateCartArea(index, newArea, pricePerSqm) {
  let cart = JSON.parse(localStorage.getItem('investorCart')) || [];
  const area = parseInt(newArea) || 100;
  cart[index].area = area;
  cart[index].totalPrice = pricePerSqm * area;
  localStorage.setItem('investorCart', JSON.stringify(cart));
  renderCart();
}

// إزالة من السلة
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('investorCart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('investorCart', JSON.stringify(cart));
  renderCart();
  showToast('تم إزالة المزرعة من السلة');
}

// تقديم طلبات الاستثمار
function submitInvestmentRequests() {
  let cart = JSON.parse(localStorage.getItem('investorCart')) || [];
  let requests = JSON.parse(localStorage.getItem('investorRequests')) || [];
  
  if (cart.length === 0) {
    showToast('سلة الاستثمار فارغة');
    return;
  }
  
  cart.forEach(item => {
    requests.push({
      farmName: item.name,
      area: item.area,
      totalAmount: item.totalPrice,
      status: 'pending',
      date: new Date().toLocaleDateString('ar-SA')
    });
  });
  
  localStorage.setItem('investorRequests', JSON.stringify(requests));
  localStorage.setItem('investorCart', JSON.stringify([]));
  renderCart();
  renderInvestorRequests();
  showToast('تم إرسال طلبات الاستثمار بنجاح');
}

// عرض طلبات المستثمر
function renderInvestorRequests() {
  const container = document.getElementById('investor-requests-list');
  if (!container) return;
  
  let requests = JSON.parse(localStorage.getItem('investorRequests')) || [];
  
  if (requests.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📋</div>
        <p>لا توجد طلبات استثمار</p>
        <button class="btn-primary" onclick="showPage('browse')">استكشاف المزارع</button>
      </div>
    `;
    return;
  }
  
  let html = '';
  requests.forEach((req, index) => {
    let statusClass = '';
    let statusText = '';
    if (req.status === 'pending') {
      statusClass = 'status-pending';
      statusText = 'قيد الانتظار';
    } else if (req.status === 'accepted') {
      statusClass = 'status-accepted';
      statusText = 'مقبولة';
    } else {
      statusClass = 'status-rejected';
      statusText = 'مرفوضة';
    }
    
    html += `
      <div class="request-card ${statusClass}" data-status="${req.status}">
        <div class="request-header">
          <span class="status-badge ${statusClass}">${statusText}</span>
          <span class="request-farm">${req.farmName}</span>
        </div>
        <div class="request-details">
          <span class="request-detail">${req.area} م²</span>
          <span class="request-detail">${req.totalAmount.toLocaleString()} ر.س</span>
          <span class="request-detail">${req.date}</span>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// فلترة طلبات المستثمر
function filterInvestorRequests(status, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  const requests = JSON.parse(localStorage.getItem('investorRequests')) || [];
  const container = document.getElementById('investor-requests-list');
  
  const filtered = status === 'all' ? requests : requests.filter(r => r.status === status);
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📋</div>
        <p>لا توجد طلبات بهذه الحالة</p>
      </div>
    `;
    return;
  }
  
  let html = '';
  filtered.forEach(req => {
    let statusClass = '';
    let statusText = '';
    if (req.status === 'pending') {
      statusClass = 'status-pending';
      statusText = 'قيد الانتظار';
    } else if (req.status === 'accepted') {
      statusClass = 'status-accepted';
      statusText = 'مقبولة';
    } else {
      statusClass = 'status-rejected';
      statusText = 'مرفوضة';
    }
    
    html += `
      <div class="request-card ${statusClass}" data-status="${req.status}">
        <div class="request-header">
          <span class="status-badge ${statusClass}">${statusText}</span>
          <span class="request-farm">${req.farmName}</span>
        </div>
        <div class="request-details">
          <span class="request-detail">${req.area} م²</span>
          <span class="request-detail">${req.totalAmount.toLocaleString()} ر.س</span>
          <span class="request-detail">${req.date}</span>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
}

// فلترة المزارع
function filterFarms() {
  const searchTerm = document.getElementById('farmSearch')?.value.toLowerCase() || '';
  const regionFilter = document.getElementById('regionFilter')?.value || 'all';
  const farms = document.querySelectorAll('#farms-list .farm-card');
  
  farms.forEach(farm => {
    const name = farm.getAttribute('data-name')?.toLowerCase() || '';
    const region = farm.getAttribute('data-region') || '';
    const matchesSearch = name.includes(searchTerm);
    const matchesRegion = regionFilter === 'all' || region === regionFilter;
    
    farm.style.display = (matchesSearch && matchesRegion) ? 'block' : 'none';
  });
}

// تهيئة الصفحات عند التحميل
document.addEventListener('DOMContentLoaded', function() {
  initInvestorData();
  renderWishlist();
  renderCart();
  renderInvestorRequests();
});