/* =========================
   ADMIN DATA ARABIC
========================= */

/* =========================
   ADMIN DATA ARABIC - LOGICAL DATA
========================= */

function initializeAdminDemoData() {
    if (!localStorage.getItem("qinwan_registered_users")) {
        const registeredUsers = [
            {
                id: "u1",
                name: "أحمد المطيري",
                role: "Investor",
                email: "ahmed@example.com",
                registrationDate: "2025-03-10",
                status: "Active",
                verified: false
            },
            {
                id: "u2",
                name: "سارة العتيبي",
                role: "Investor",
                email: "sara@example.com",
                registrationDate: "2025-03-12",
                status: "Active",
                verified: false
            },
            {
                id: "u3",
                name: "عبدالله الحربي",
                role: "Farm Owner",
                email: "abdullah@example.com",
                registrationDate: "2025-03-14",
                status: "Active",
                verified: true,
                nationalId: "مرفوع",
                ownershipDocuments: "مرفوعة"
            },
            {
                id: "u4",
                name: "محمد الأنصاري",
                role: "Farm Owner",
                email: "mohammed@example.com",
                registrationDate: "2025-03-16",
                status: "Active",
                verified: true,
                nationalId: "مرفوع",
                ownershipDocuments: "مرفوعة"
            },
            {
                id: "u5",
                name: "فيصل الشمري",
                role: "Farm Owner",
                email: "faisal@example.com",
                registrationDate: "2025-03-20",
                status: "Pending Verification",
                verified: false,
                nationalId: "مرفوع",
                ownershipDocuments: "مرفوعة"
            },
            {
                id: "u6",
                name: "هيا حمد",
                role: "Investor",
                email: "haya@example.com",
                registrationDate: "2025-03-21",
                status: "Active",
                verified: false
            },
            {
                id: "admin1",
                name: "مدير النظام",
                role: "Admin",
                email: "admin@qinwan.sa",
                registrationDate: "2025-03-01",
                status: "Active",
                verified: false
            }
        ];
        localStorage.setItem("qinwan_registered_users", JSON.stringify(registeredUsers));
    }

    if (!localStorage.getItem("qinwan_farms")) {
        const farms = [
            {
                id: "F001",
                farmName: "مزرعة النخيل الذهبية",
                ownerId: "u3",
                ownerName: "عبدالله الحربي",
                ownerEmail: "abdullah@example.com",
                location: "الرياض",
                area: 2000,
                palmType: "سكري",
                photos: 3,
                status: "Approved",
                description: "مزرعة نخيل متميزة في الرياض بإنتاج تمر السكري."
            },
            {
                id: "F002",
                farmName: "واحة العجوة المباركة",
                ownerId: "u4",
                ownerName: "محمد الأنصاري",
                ownerEmail: "mohammed@example.com",
                location: "المدينة المنورة",
                area: 1500,
                palmType: "عجوة",
                photos: 4,
                status: "Approved",
                description: "مزرعة متخصصة في إنتاج تمر العجوة عالي الجودة."
            },
            {
                id: "F003",
                farmName: "نخيل البرحي",
                ownerId: "u5",
                ownerName: "فيصل الشمري",
                ownerEmail: "faisal@example.com",
                location: "حائل",
                area: 1200,
                palmType: "برحي",
                photos: 2,
                status: "Pending",
                description: "طلب تسجيل مزرعة جديدة بانتظار المراجعة والاعتماد."
            },
            {
                id: "F004",
                farmName: "مزرعة الخلاص الأصيلة",
                ownerId: "u3",
                ownerName: "عبدالله الحربي",
                ownerEmail: "abdullah@example.com",
                location: "القصيم",
                area: 1800,
                palmType: "خلاص",
                photos: 3,
                status: "Deactivated",
                description: "مزرعة تم تعطيلها مؤقتًا لمراجعة بعض البيانات."
            }
        ];
        localStorage.setItem("qinwan_farms", JSON.stringify(farms));
    }

    if (!localStorage.getItem("qinwan_transactions")) {
        const transactions = [
            {
                id: "TX001",
                investorId: "u1",
                investorName: "أحمد المطيري",
                farmerId: "u3",
                farmerName: "عبدالله الحربي",
                farmId: "F001",
                farmName: "مزرعة النخيل الذهبية",
                area: 200,
                duration: "سنة واحدة",
                harvestMethod: "استلام التمور",
                status: "Completed",
                date: "2025-04-05",
                suspicious: false
            },
            {
                id: "TX002",
                investorId: "u2",
                investorName: "سارة العتيبي",
                farmerId: "u4",
                farmerName: "محمد الأنصاري",
                farmId: "F002",
                farmName: "واحة العجوة المباركة",
                area: 150,
                duration: "موسم واحد",
                harvestMethod: "بيع المحصول",
                status: "Accepted",
                date: "2025-04-10",
                suspicious: false
            },
            {
                id: "TX003",
                investorId: "u6",
                investorName: "هيا حمد",
                farmerId: "u3",
                farmerName: "عبدالله الحربي",
                farmId: "F001",
                farmName: "مزرعة النخيل الذهبية",
                area: 100,
                duration: "موسم واحد",
                harvestMethod: "التبرع بالمحصول",
                status: "Pending",
                date: "2025-04-14",
                suspicious: false
            },
            {
                id: "TX004",
                investorId: "u1",
                investorName: "أحمد المطيري",
                farmerId: "u4",
                farmerName: "محمد الأنصاري",
                farmId: "F002",
                farmName: "واحة العجوة المباركة",
                area: 400,
                duration: "سنتان",
                harvestMethod: "بيع المحصول",
                status: "Rejected",
                date: "2025-04-18",
                suspicious: true
            }
        ];
        localStorage.setItem("qinwan_transactions", JSON.stringify(transactions));
    }

    if (!localStorage.getItem("qinwan_complaints")) {
        const complaints = [
            {
                id: "C001",
                submitterId: "u1",
                submitter: "أحمد المطيري",
                relatedTransactionId: "TX001",
                relatedFarmId: "F001",
                subject: "تأخر في توصيل التمور",
                description: "استلمت التمور بعد الموعد المتوقع بأكثر من أسبوع.",
                date: "2025-04-08",
                status: "Resolved"
            },
            {
                id: "C002",
                submitterId: "u2",
                submitter: "سارة العتيبي",
                relatedTransactionId: "TX002",
                relatedFarmId: "F002",
                subject: "استفسار عن تحديثات المزرعة",
                description: "أرغب بمعرفة سبب تأخر التحديث الأخير للمزرعة.",
                date: "2025-04-12",
                status: "Under Investigation"
            },
            {
                id: "C003",
                submitterId: "u6",
                submitter: "هيا حمد",
                relatedTransactionId: "TX003",
                relatedFarmId: "F001",
                subject: "تأخر قبول الطلب",
                description: "ما زال طلب الاستثمار قيد المراجعة منذ عدة أيام.",
                date: "2025-04-16",
                status: "Dismissed"
            }
        ];
        localStorage.setItem("qinwan_complaints", JSON.stringify(complaints));
    }

    if (!localStorage.getItem("qinwan_updates")) {
        const updates = [
            {
                id: "U001",
                farmerId: "u3",
                farmer: "عبدالله الحربي",
                farmId: "F001",
                farm: "مزرعة النخيل الذهبية",
                text: "تم الانتهاء من التلقيح وبدأت مرحلة العناية الموسمية بالأشجار.",
                status: "Clean"
            },
            {
                id: "U002",
                farmerId: "u4",
                farmer: "محمد الأنصاري",
                farmId: "F002",
                farm: "واحة العجوة المباركة",
                text: "تحديث الحصاد يحتوي على صياغة غير مناسبة ويحتاج إلى تعديل.",
                status: "Flagged"
            },
            {
                id: "U003",
                farmerId: "u3",
                farmer: "عبدالله الحربي",
                farmId: "F004",
                farm: "مزرعة الخلاص الأصيلة",
                text: "تمت صيانة نظام الري وإضافة صور جديدة للمزرعة.",
                status: "Clean"
            }
        ];
        localStorage.setItem("qinwan_updates", JSON.stringify(updates));
    }

    if (!localStorage.getItem("qinwan_logs")) {
        const logs = [
            {
                userId: "u3",
                userName: "عبدالله الحربي",
                actionType: "إضافة مزرعة جديدة",
                entity: "مزرعة النخيل الذهبية",
                timestamp: "2025-03-22 10:15"
            },
            {
                userId: "admin1",
                userName: "مدير النظام",
                actionType: "اعتماد مزرعة",
                entity: "مزرعة النخيل الذهبية",
                timestamp: "2025-03-23 09:00"
            },
            {
                userId: "admin1",
                userName: "مدير النظام",
                actionType: "اعتماد حساب مزارع",
                entity: "عبدالله الحربي",
                timestamp: "2025-03-23 09:10"
            },
            {
                userId: "u4",
                userName: "محمد الأنصاري",
                actionType: "إضافة مزرعة جديدة",
                entity: "واحة العجوة المباركة",
                timestamp: "2025-03-24 11:20"
            },
            {
                userId: "admin1",
                userName: "مدير النظام",
                actionType: "اعتماد مزرعة",
                entity: "واحة العجوة المباركة",
                timestamp: "2025-03-25 08:45"
            },
            {
                userId: "u1",
                userName: "أحمد المطيري",
                actionType: "طلب استثمار جديد",
                entity: "TX001",
                timestamp: "2025-04-01 12:30"
            },
            {
                userId: "admin1",
                userName: "مدير النظام",
                actionType: "تحديث حالة شكوى",
                entity: "تأخر في توصيل التمور",
                timestamp: "2025-04-09 01:10"
            }
        ];
        localStorage.setItem("qinwan_logs", JSON.stringify(logs));
    }
}

function getUsers() {
    return JSON.parse(localStorage.getItem("qinwan_registered_users")) || [];
}

function getFarms() {
    return JSON.parse(localStorage.getItem("qinwan_farms")) || [];
}

function getTransactions() {
    return JSON.parse(localStorage.getItem("qinwan_transactions")) || [];
}

function getComplaints() {
    return JSON.parse(localStorage.getItem("qinwan_complaints")) || [];
}

function getUpdates() {
    return JSON.parse(localStorage.getItem("qinwan_updates")) || [];
}

function getLogs() {
    return JSON.parse(localStorage.getItem("qinwan_logs")) || [];
}

function saveUsers(users) {
    localStorage.setItem("qinwan_registered_users", JSON.stringify(users));
}

function saveFarms(farms) {
    localStorage.setItem("qinwan_farms", JSON.stringify(farms));
}

function saveComplaints(complaints) {
    localStorage.setItem("qinwan_complaints", JSON.stringify(complaints));
}

function saveUpdates(updates) {
    localStorage.setItem("qinwan_updates", JSON.stringify(updates));
}

function addLog(actionType, entity) {
    const logs = getLogs();
    logs.unshift({
        userId: "admin1",
        userName: "مدير النظام",
        actionType: actionType,
        entity: entity,
        timestamp: new Date().toLocaleString("ar-SA")
    });
    localStorage.setItem("qinwan_logs", JSON.stringify(logs));
}

function getStatusBadge(status) {
    const className = status.toLowerCase().replace(/\s+/g, '-');

    const arabicLabels = {
        "Active": "نشط",
        "Pending Verification": "بانتظار التوثيق",
        "Suspended": "موقوف",
        "Approved": "معتمدة",
        "Pending": "قيد المراجعة",
        "Rejected": "مرفوضة",
        "Deactivated": "معطلة",
        "Accepted": "مقبولة",
        "Completed": "مكتملة",
        "Resolved": "تم الحل",
        "Under Investigation": "قيد التحقيق",
        "Dismissed": "مرفوضة",
        "Flagged": "مخالفة",
        "Clean": "سليم"
    };

    return `<span class="status-badge status-${className}">${arabicLabels[status] || status}</span>`;
}

/* =========================
   DASHBOARD
========================= */

function renderDashboard() {
    if (!document.getElementById("statTotalUsers")) return;

    const users = getUsers();
    const farms = getFarms();
    const transactions = getTransactions();

    const activeFarms = farms.filter(f => f.status === "Approved").length;
    const leasedArea = transactions.reduce((sum, tx) => sum + Number(tx.area), 0);
    const transactionVolume = transactions.reduce((sum, tx) => sum + Number(tx.area) * 10, 0);

    const currentMonth = "2025-03";
    const newRegistrations = users.filter(user => user.registrationDate.startsWith(currentMonth)).length;

    document.getElementById("statTotalUsers").textContent = users.length;
    document.getElementById("statActiveFarms").textContent = activeFarms;
    document.getElementById("statLeasedArea").textContent = leasedArea + " م²";
    document.getElementById("statTransactionVolume").textContent = transactionVolume.toLocaleString() + " ريال";
    document.getElementById("statNewRegistrations").textContent = newRegistrations;

    const monthlyBars = document.getElementById("monthlyBars");
    if (monthlyBars) {
        const data = [
            { month: "يناير", value: 45 },
            { month: "فبراير", value: 62 },
            { month: "مارس", value: 78 },
            { month: "أبريل", value: 55 },
            { month: "مايو", value: 90 },
            { month: "يونيو", value: 110 }
        ];

        monthlyBars.innerHTML = data.map(item => `
            <div class="bar-item">
                <div class="bar-value">${item.value}</div>
                <div class="bar" style="height:${item.value * 1.5}px;"></div>
                <div class="bar-label">${item.month}</div>
            </div>
        `).join("");
    }
}

function exportStatisticsCSV() {
    const users = getUsers();
    const farms = getFarms();
    const transactions = getTransactions();

    const activeFarms = farms.filter(f => f.status === "Approved").length;
    const leasedArea = transactions.reduce((sum, tx) => sum + Number(tx.area), 0);
    const transactionVolume = transactions.reduce((sum, tx) => sum + Number(tx.area) * 10, 0);

    const csv = [
        "المؤشر,القيمة",
        `إجمالي المستخدمين,${users.length}`,
        `إجمالي المزارع النشطة,${activeFarms}`,
        `إجمالي المساحة المؤجرة,${leasedArea} م²`,
        `إجمالي حجم المعاملات,${transactionVolume} ريال`
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "platform_statistics.csv";
    a.click();
    URL.revokeObjectURL(url);
}

/* =========================
   USERS
========================= */

function renderUsersManagement() {
    const tbody = document.getElementById("usersManagementTableBody");
    if (!tbody) return;

    const search = (document.getElementById("userSearchInput")?.value || "").toLowerCase();
    const roleFilter = document.getElementById("userRoleFilter")?.value || "all";
    const statusFilter = document.getElementById("userStatusFilter")?.value || "all";

    let users = getUsers();

    users = users.filter(user => {
        const matchesSearch =
            user.name.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search);

        const matchesRole = roleFilter === "all" || user.role === roleFilter;
        const matchesStatus = statusFilter === "all" || user.status === statusFilter;

        return matchesSearch && matchesRole && matchesStatus;
    });

    if (users.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7">لا يوجد مستخدمون مطابقون.</td></tr>`;
        return;
    }

    tbody.innerHTML = users.map(user => `
        <tr>
            <td>${user.name}</td>
            <td>${user.role === "Investor" ? "مستثمر" : user.role === "Farm Owner" ? "مزارع" : "مدير"}</td>
            <td>${user.email}</td>
            <td>${user.registrationDate}</td>
            <td>${getStatusBadge(user.status)}</td>
            <td>${user.verified ? '<span class="verified-badge">موثق</span>' : '<span class="not-verified-badge">غير موثق</span>'}</td>
            <td>
                <button class="admin-action-btn btn-secondary" onclick="viewUserProfile('${user.id}')">عرض</button>
                ${user.role === 'Farm Owner' && user.status === 'Pending Verification' ? `
                    <button class="admin-action-btn btn-approve" onclick="approveFarmerAccount('${user.id}')">قبول</button>
                    <button class="admin-action-btn btn-reject" onclick="rejectFarmerAccount('${user.id}')">رفض</button>
                ` : ''}
            </td>
        </tr>
    `).join("");
}

function viewUserProfile(userId) {
    const user = getUsers().find(u => u.id === userId);
    if (!user) return;

    alert(
        `الاسم: ${user.name}\nالدور: ${user.role}\nالبريد: ${user.email}\nتاريخ التسجيل: ${user.registrationDate}\nالحالة: ${user.status}`
    );
}

function approveFarmerAccount(userId) {
    const users = getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) return;

    user.status = "Active";
    user.verified = true;
    saveUsers(users);
    addLog("اعتماد حساب مزارع", user.email);
    alert("تم اعتماد حساب المزارع ويمكنه الآن إضافة المزارع.");
    renderUsersManagement();
}

function rejectFarmerAccount(userId) {
    const note = prompt("أدخلي سبب الرفض الإجباري:");
    if (!note) return;

    const users = getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) return;

    user.status = "Suspended";
    user.verified = false;
    user.rejectionNote = note;
    saveUsers(users);
    addLog("رفض حساب مزارع", `${user.email} - ${note}`);
    alert("تم رفض حساب المزارع مع حفظ سبب الرفض.");
    renderUsersManagement();
}

/* =========================
   FARMS
========================= */

function renderFarmsManagement() {
    const tbody = document.getElementById("farmsManagementTableBody");
    if (!tbody) return;

    const search = (document.getElementById("farmSearchInput")?.value || "").toLowerCase();
    const statusFilter = document.getElementById("farmStatusFilter")?.value || "all";

    let farms = getFarms();

    farms = farms.filter(farm => {
        const matchesSearch =
            farm.farmName.toLowerCase().includes(search) ||
            farm.ownerName.toLowerCase().includes(search);

        const matchesStatus = statusFilter === "all" || farm.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    if (farms.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7">لا توجد مزارع مطابقة.</td></tr>`;
        return;
    }

    tbody.innerHTML = farms.map(farm => `
        <tr>
            <td>${farm.farmName}</td>
            <td>${farm.ownerName}</td>
            <td>${farm.location}</td>
            <td>${farm.area}</td>
            <td>${farm.palmType}</td>
            <td>${getStatusBadge(farm.status)}</td>
            <td>
                <button class="admin-action-btn btn-secondary" onclick="viewFarmDetails('${farm.id}')">عرض</button>
                <button class="admin-action-btn btn-approve" onclick="approveFarm('${farm.id}')">اعتماد</button>
                <button class="admin-action-btn btn-reject" onclick="rejectFarm('${farm.id}')">رفض</button>
                <button class="admin-action-btn btn-primary" onclick="requestAdditionalFarmInfo('${farm.id}')">طلب معلومات</button>
                <button class="admin-action-btn btn-secondary" onclick="editFarm('${farm.id}')">تعديل</button>
                <button class="admin-action-btn btn-danger" onclick="deactivateFarm('${farm.id}')">تعطيل</button>
                <button class="admin-action-btn btn-danger" onclick="deleteFarm('${farm.id}')">حذف</button>
            </td>
        </tr>
    `).join("");
}

function viewFarmDetails(farmId) {
    const farm = getFarms().find(f => f.id === farmId);
    if (!farm) return;

    alert(
        `اسم المزرعة: ${farm.farmName}\nالمالك: ${farm.ownerName}\nالموقع: ${farm.location}\nالمساحة: ${farm.area} م²\nنوع النخل: ${farm.palmType}\nعدد الصور: ${farm.photos}\nالوصف: ${farm.description}\nالحالة: ${farm.status}`
    );
}

function approveFarm(farmId) {
    const farms = getFarms();
    const farm = farms.find(f => f.id === farmId);
    if (!farm) return;

    farm.status = "Approved";
    saveFarms(farms);
    addLog("اعتماد مزرعة", farm.farmName);
    alert("تم اعتماد المزرعة وأصبحت ظاهرة للمستثمرين.");
    renderFarmsManagement();
}

function rejectFarm(farmId) {
    const reason = prompt("أدخلي سبب الرفض الإجباري:");
    if (!reason) return;

    const farms = getFarms();
    const farm = farms.find(f => f.id === farmId);
    if (!farm) return;

    farm.status = "Rejected";
    farm.rejectionReason = reason;
    saveFarms(farms);
    addLog("رفض مزرعة", `${farm.farmName} - ${reason}`);
    alert("تم رفض المزرعة مع إرسال سبب الرفض.");
    renderFarmsManagement();
}

function requestAdditionalFarmInfo(farmId) {
    const note = prompt("أدخلي المعلومات الإضافية المطلوبة:");
    if (!note) return;

    const farms = getFarms();
    const farm = farms.find(f => f.id === farmId);
    if (!farm) return;

    farm.additionalInfoRequest = note;
    saveFarms(farms);
    addLog("طلب معلومات إضافية للمزرعة", `${farm.farmName} - ${note}`);
    alert("تم إرسال طلب معلومات إضافية إلى المزارع.");
}

function editFarm(farmId) {
    const farms = getFarms();
    const farm = farms.find(f => f.id === farmId);
    if (!farm) return;

    const newName = prompt("عدلي اسم المزرعة:", farm.farmName);
    if (!newName) return;

    farm.farmName = newName;
    saveFarms(farms);
    addLog("تعديل مزرعة", farm.id);
    alert("تم تعديل المزرعة بنجاح.");
    renderFarmsManagement();
}

function deactivateFarm(farmId) {
    const reason = prompt("أدخلي سبب التعطيل الإجباري:");
    if (!reason) return;

    const farms = getFarms();
    const farm = farms.find(f => f.id === farmId);
    if (!farm) return;

    farm.status = "Deactivated";
    farm.deactivationReason = reason;
    saveFarms(farms);
    addLog("تعطيل مزرعة", `${farm.farmName} - ${reason}`);
    alert("تم تعطيل المزرعة مع إشعار المزارع.");
    renderFarmsManagement();
}

function deleteFarm(farmId) {
    const reason = prompt("أدخلي سبب الحذف الإجباري:");
    if (!reason) return;

    let farms = getFarms();
    const farm = farms.find(f => f.id === farmId);
    if (!farm) return;

    farms = farms.filter(f => f.id !== farmId);
    saveFarms(farms);
    addLog("حذف مزرعة", `${farm.farmName} - ${reason}`);
    alert("تم حذف المزرعة مع إشعار المزارع.");
    renderFarmsManagement();
}

/* =========================
   TRANSACTIONS
========================= */

function renderTransactionsMonitor() {
    const tbody = document.getElementById("transactionsTableBody");
    if (!tbody) return;

    const statusFilter = document.getElementById("transactionStatusFilter")?.value || "all";
    const dateFilter = document.getElementById("transactionDateFilter")?.value || "";

    let transactions = getTransactions();

    transactions = transactions.filter(tx => {
        const matchesStatus = statusFilter === "all" || tx.status === statusFilter;
        const matchesDate = !dateFilter || tx.date === dateFilter;
        return matchesStatus && matchesDate;
    });

    if (transactions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10">لا توجد معاملات مطابقة.</td></tr>`;
        return;
    }

    tbody.innerHTML = transactions.map(tx => `
        <tr>
            <td>${tx.investorName}</td>
            <td>${tx.farmerName}</td>
            <td>${tx.farmName}</td>
            <td>${tx.area} م²</td>
            <td>${tx.duration}</td>
            <td>${tx.harvestMethod}</td>
            <td>${getStatusBadge(tx.status)}</td>
            <td>${tx.date}</td>
            <td><button class="admin-action-btn btn-secondary" onclick="viewTransactionDetails('${tx.id}')">عرض</button></td>
            <td>${tx.suspicious ? '<span class="flag-badge">مشبوهة</span>' : '<span class="normal-badge">طبيعية</span>'}</td>
        </tr>
    `).join("");
}

function viewTransactionDetails(txId) {
    const tx = getTransactions().find(t => t.id === txId);
    if (!tx) return;

    alert(
        `المستثمر: ${tx.investorName}\nالمزارع: ${tx.farmerName}\nالمزرعة: ${tx.farmName}\nالمساحة: ${tx.area} م²\nالمدة: ${tx.duration}\nطريقة الحصاد: ${tx.harvestMethod}\nالحالة: ${tx.status}\nالتاريخ: ${tx.date}\nهل هي مشبوهة؟ ${tx.suspicious ? "نعم" : "لا"}`
    );
}

/* =========================
   COMPLAINTS
========================= */

function renderComplaintsQueue() {
    const container = document.getElementById("complaintsCardsContainer");
    if (!container) return;

    const complaints = getComplaints();

    container.innerHTML = complaints.map(item => `
        <div class="admin-record-card">
            <h3>${item.subject}</h3>
            <p>${item.description}</p>
            <p><strong>مقدم الشكوى:</strong> ${item.submitter}</p>
            <p><strong>التاريخ:</strong> ${item.date}</p>
            ${getStatusBadge(item.status)}
            <div class="admin-card-actions">
                <button class="admin-action-btn btn-primary" onclick="updateComplaintStatus('${item.id}', 'Under Investigation')">قيد التحقيق</button>
                <button class="admin-action-btn btn-approve" onclick="updateComplaintStatus('${item.id}', 'Resolved')">تم الحل</button>
                <button class="admin-action-btn btn-secondary" onclick="updateComplaintStatus('${item.id}', 'Dismissed')">رفض</button>
            </div>
        </div>
    `).join("");
}

function updateComplaintStatus(complaintId, newStatus) {
    const complaints = getComplaints();
    const complaint = complaints.find(c => c.id === complaintId);
    if (!complaint) return;

    complaint.status = newStatus;
    saveComplaints(complaints);
    addLog("تحديث حالة شكوى", `${complaint.subject} - ${newStatus}`);
    renderComplaintsQueue();
}

/* =========================
   LOGS
========================= */

function renderActivityLogs() {
    const tbody = document.getElementById("activityLogsTableBody");
    if (!tbody) return;

    const search = (document.getElementById("logSearchInput")?.value || "").toLowerCase();

    let logs = getLogs().filter(log =>
        log.userName.toLowerCase().includes(search) ||
        log.actionType.toLowerCase().includes(search)
    );

    if (logs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5">لا توجد سجلات مطابقة.</td></tr>`;
        return;
    }

    tbody.innerHTML = logs.map(log => `
        <tr>
            <td>${log.userId}</td>
            <td>${log.userName}</td>
            <td>${log.actionType}</td>
            <td>${log.entity}</td>
            <td>${log.timestamp}</td>
        </tr>
    `).join("");
}

/* =========================
   CONTENT
========================= */

function renderContentModeration() {
    const container = document.getElementById("contentModerationContainer");
    if (!container) return;

    const updates = getUpdates();

    container.innerHTML = updates.map(update => `
        <div class="admin-record-card">
            <h3>${update.farm}</h3>
            <p><strong>المزارع:</strong> ${update.farmer}</p>
            <p><strong>التحديث:</strong> ${update.text}</p>
            ${getStatusBadge(update.status === 'Clean' ? 'Approved' : update.status)}
            <div class="admin-card-actions">
                <button class="admin-action-btn btn-secondary" onclick="editMinorViolation('${update.id}')">تعديل مخالفة بسيطة</button>
                <button class="admin-action-btn btn-danger" onclick="deleteViolatingUpdate('${update.id}')">حذف التحديث</button>
            </div>
        </div>
    `).join("");
}

function editMinorViolation(updateId) {
    const updates = getUpdates();
    const update = updates.find(u => u.id === updateId);
    if (!update) return;

    const newText = prompt("عدلي نص التحديث:", update.text);
    if (!newText) return;

    update.text = newText;
    update.status = "Clean";
    saveUpdates(updates);
    addLog("تعديل محتوى المستخدم", update.farm);
    alert("تم تعديل المخالفة البسيطة دون حذف المنشور.");
    renderContentModeration();
}

function deleteViolatingUpdate(updateId) {
    const reason = prompt("أدخلي سبب الحذف الإجباري:");
    if (!reason) return;

    let updates = getUpdates();
    const update = updates.find(u => u.id === updateId);
    if (!update) return;

    updates = updates.filter(u => u.id !== updateId);
    saveUpdates(updates);
    addLog("حذف تحديث مخالف", `${update.farm} - ${reason}`);
    alert("تم حذف التحديث المخالف مع تسجيل السبب.");
    renderContentModeration();
}

/* =========================
   INIT
========================= */

window.addEventListener("DOMContentLoaded", () => {
    initializeAdminDemoData();

    renderDashboard();
    renderUsersManagement();
    renderFarmsManagement();
    renderTransactionsMonitor();
    renderComplaintsQueue();
    renderActivityLogs();
    renderContentModeration();

    document.getElementById("userSearchInput")?.addEventListener("input", renderUsersManagement);
    document.getElementById("userRoleFilter")?.addEventListener("change", renderUsersManagement);
    document.getElementById("userStatusFilter")?.addEventListener("change", renderUsersManagement);

    document.getElementById("farmSearchInput")?.addEventListener("input", renderFarmsManagement);
    document.getElementById("farmStatusFilter")?.addEventListener("change", renderFarmsManagement);

    document.getElementById("transactionStatusFilter")?.addEventListener("change", renderTransactionsMonitor);
    document.getElementById("transactionDateFilter")?.addEventListener("change", renderTransactionsMonitor);

    document.getElementById("logSearchInput")?.addEventListener("input", renderActivityLogs);
});