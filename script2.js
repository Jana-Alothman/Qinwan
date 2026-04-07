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
                nationalId: "1029384756",
                ownershipDocuments: "files/farm-ownership-abdullah.pdf"
            },
            {
                id: "u4",
                name: "محمد الأنصاري",
                role: "Farm Owner",
                email: "mohammed@example.com",
                registrationDate: "2025-03-16",
                status: "Active",
                verified: true,
                nationalId: "1038475621",
                ownershipDocuments: "files/farm-ownership-mohammed.pdf"
            },
            {
                id: "u5",
                name: "فيصل الشمري",
                role: "Farm Owner",
                email: "faisal@example.com",
                registrationDate: "2025-03-20",
                status: "Pending Verification",
                verified: false,
                nationalId: "1047568392",
                ownershipDocuments: "files/farm-ownership-faisal.pdf"
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
        "More Info Requested": "مطلوب معلومات إضافية",
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
function exportStatisticsPDF() {
    const users = getUsers();
    const farms = getFarms();
    const transactions = getTransactions();

    const totalUsers = users.length;
    const activeFarms = farms.filter(f => f.status === "Approved").length;

    const reportWindow = window.open("", "_blank");

    reportWindow.document.write(`
        <html>
        <body style="direction:rtl; font-family:Arial; padding:20px">
            <h2>تقرير الإحصائيات</h2>
            <p>إجمالي المستخدمين: ${totalUsers}</p>
            <p>المزارع النشطة: ${activeFarms}</p>
        </body>
        </html>
    `);

    reportWindow.document.close();
    reportWindow.print();
}
/* =========================
   USERS
========================= */

function getRoleLabel(role) {
    if (role === "Investor") return "مستثمر";
    if (role === "Farm Owner") return "مزارع";
    return "مدير";
}

function renderUsersManagement() {
    const tbody = document.getElementById("usersManagementTableBody");
    if (!tbody) return;

    const search = (document.getElementById("userSearchInput")?.value || "").toLowerCase().trim();
    const roleFilter = document.getElementById("userRoleFilter")?.value || "all";
    const statusFilter = document.getElementById("userStatusFilter")?.value || "all";

    let users = getUsers().filter(user => user.role !== "Admin");

    users = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(search);
        const matchesRole = roleFilter === "all" || user.role === roleFilter;
        const matchesStatus = statusFilter === "all" || user.status === statusFilter;

        return matchesSearch && matchesRole && matchesStatus;
    });

    if (users.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4">لا يوجد مستخدمون مطابقون.</td></tr>`;
        return;
    }

    tbody.innerHTML = users.map(user => `
        <tr>
            <td class="clickable-name" onclick="viewUserProfile('${user.id}')">${user.name}</td>
            <td>${getRoleLabel(user.role)}</td>
            <td>${user.registrationDate}</td>
            <td>${getStatusBadge(user.status)}</td>
        </tr>
    `).join("");
}

function viewUserProfile(userId) {
    const user = getUsers().find(u => u.id === userId);
    const farms = getFarms();
    const transactions = getTransactions();
    const complaints = getComplaints();
    const logs = getLogs();

    if (!user) return;

    let relatedFarms = [];
    let relatedTransactions = [];
    let relatedComplaints = [];
    let relatedLogs = [];

    if (user.role === "Farm Owner") {
        relatedFarms = farms.filter(farm => farm.ownerId === user.id);
        relatedTransactions = transactions.filter(tx => tx.farmerId === user.id);
        relatedComplaints = complaints.filter(c =>
            relatedTransactions.some(tx => tx.id === c.relatedTransactionId)
        );
        relatedLogs = logs.filter(log => log.userId === user.id);
    } else if (user.role === "Investor") {
        relatedTransactions = transactions.filter(tx => tx.investorId === user.id);
        relatedFarms = farms.filter(farm =>
            relatedTransactions.some(tx => tx.farmId === farm.id)
        );
        relatedComplaints = complaints.filter(c => c.submitterId === user.id);
        relatedLogs = logs.filter(log => log.userId === user.id);
    }

    const modal = document.getElementById("userModal");
    const modalName = document.getElementById("modalName");
    const modalRole = document.getElementById("modalRole");
    const modalDate = document.getElementById("modalDate");
    const modalStatus = document.getElementById("modalStatus");
    const modalEmail = document.getElementById("modalEmail");
    const modalFarmCount = document.getElementById("modalFarmCount");
    const modalTransactionCount = document.getElementById("modalTransactionCount");
    const modalComplaintCount = document.getElementById("modalComplaintCount");
    const modalActivity = document.getElementById("modalActivity");

    if (!modal || !modalName || !modalRole || !modalDate || !modalStatus || !modalEmail || !modalFarmCount || !modalTransactionCount || !modalComplaintCount || !modalActivity) {
        return;
    }

    modalName.textContent = user.name;
    modalRole.textContent = getRoleLabel(user.role);
    modalDate.textContent = user.registrationDate;
    modalStatus.textContent = user.status;
    modalEmail.textContent = user.email || "-";
    modalFarmCount.textContent = relatedFarms.length;
    modalTransactionCount.textContent = relatedTransactions.length;
    modalComplaintCount.textContent = relatedComplaints.length;

    if (relatedLogs.length > 0) {
        modalActivity.innerHTML = relatedLogs.map(log => `
            <li>${log.actionType} - ${log.entity} <br><small>${log.timestamp}</small></li>
        `).join("");
    } else if (relatedTransactions.length > 0) {
        modalActivity.innerHTML = relatedTransactions.map(tx => `
            <li>معاملة ${tx.id} في ${tx.farmName} - الحالة: ${tx.status}</li>
        `).join("");
    } else {
        modalActivity.innerHTML = `<li>لا يوجد نشاط لهذا المستخدم.</li>`;
    }

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

/* =========================
   FARMS
========================= */
/* =========================
   FARM REGISTRATION REVIEW
========================= */

function renderFarmsManagement() {
    const container = document.getElementById("farmRequestsContainer");
    if (!container) return;

    const search = (document.getElementById("farmSearchInput")?.value || "").toLowerCase().trim();

    let farms = getFarms().filter(farm =>
        farm.status === "Pending" &&
        (
            farm.farmName.toLowerCase().includes(search) ||
            farm.ownerName.toLowerCase().includes(search)
        )
    );

    if (farms.length === 0) {
        container.innerHTML = `
            <div class="admin-record-card">
                <h3>لا توجد طلبات تسجيل معلّقة</h3>
                <p>لا توجد حاليًا طلبات مزارع بانتظار المراجعة.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = farms.map(farm => `
        <div class="admin-record-card farm-details-card">
            <h3>${farm.farmName}</h3>

            <p><strong>اسم المالك:</strong> ${farm.ownerName}</p>
            <p><strong>الموقع:</strong> ${farm.location}</p>
            <p><strong>المساحة:</strong> ${farm.area} م²</p>
            <p><strong>نوع النخل:</strong> ${farm.palmType}</p>
            <p><strong>عدد الصور:</strong> ${farm.photos ? farm.photos.length || farm.photos : 0}</p>
            <p><strong>الحالة الحالية:</strong> ${getStatusBadge(farm.status)}</p>
            <p><strong>الوصف:</strong> ${farm.description}</p>

            <div class="farm-images-preview">
                ${
                    Array.isArray(farm.photos) && farm.photos.length > 0
                        ? farm.photos.map(photo => `
                            <img src="${photo}" alt="${farm.farmName}" class="farm-preview-image">
                        `).join("")
                        : `
                            <img src="images/farm-placeholder.jpg" alt="صورة افتراضية" class="farm-preview-image">
                        `
                }
            </div>

            <div class="admin-card-actions">
                <button class="admin-action-btn btn-approve" onclick="approveFarmRequest('${farm.id}')">
                    اعتماد المزرعة
                </button>

                <button class="admin-action-btn btn-danger" onclick="rejectFarmRequest('${farm.id}')">
                    رفض الطلب
                </button>

                <button class="admin-action-btn btn-secondary" onclick="requestMoreFarmInfo('${farm.id}')">
                    طلب معلومات إضافية
                </button>
            </div>
        </div>
    `).join("");
}
function viewFarmRequestDetails(farmId) {
    const farm = getFarms().find(f => f.id === farmId);
    if (!farm) return;

    const detailsSection = document.getElementById("selectedFarmRequestSection");
    const detailsContent = document.getElementById("selectedFarmRequestContent");

    if (!detailsSection || !detailsContent) {
        alert(
            `اسم المزرعة: ${farm.farmName}\n` +
            `اسم المالك: ${farm.ownerName}\n` +
            `الموقع: ${farm.location}\n` +
            `المساحة: ${farm.area} م²\n` +
            `نوع النخل: ${farm.palmType}\n` +
            `عدد الصور: ${farm.photos}\n` +
            `الحالة: ${farm.status}\n` +
            `الوصف: ${farm.description}`
        );
        return;
    }

    detailsContent.innerHTML = `
        <div class="admin-record-card farm-details-card">
            <h3>${farm.farmName}</h3>
            <p><strong>رقم الطلب:</strong> ${farm.id}</p>
            <p><strong>اسم المالك:</strong> ${farm.ownerName}</p>
            <p><strong>البريد الإلكتروني:</strong> ${farm.ownerEmail}</p>
            <p><strong>الموقع:</strong> ${farm.location}</p>
            <p><strong>المساحة:</strong> ${farm.area} م²</p>
            <p><strong>نوع النخل:</strong> ${farm.palmType}</p>
            <p><strong>عدد الصور:</strong> ${farm.photos}</p>
            <p><strong>الحالة الحالية:</strong> ${getStatusBadge(farm.status)}</p>
            <p><strong>الوصف:</strong> ${farm.description}</p>

            <div class="admin-card-actions">
                <button class="admin-action-btn btn-approve" onclick="approveFarmRequest('${farm.id}')">اعتماد المزرعة</button>
                <button class="admin-action-btn btn-danger" onclick="rejectFarmRequest('${farm.id}')">رفض الطلب</button>
                <button class="admin-action-btn btn-secondary" onclick="requestMoreFarmInfo('${farm.id}')">طلب معلومات إضافية</button>
            </div>
        </div>
    `;

    detailsSection.style.display = "block";
    detailsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
function approveFarmRequest(farmId) {
    const farms = getFarms();
    const farm = farms.find(f => f.id === farmId);
    if (!farm) return;

    farm.status = "Approved";
    farm.visibleToInvestors = true;

    saveFarms(farms);

    addLog("اعتماد طلب مزرعة", `${farm.farmName} - admin1`);

    alert("تم اعتماد المزرعة، وأصبحت ظاهرة للمستثمرين في الخريطة والقائمة.");
    renderFarmsManagement();
}
function rejectFarmRequest(farmId) {
    const reason = prompt("أدخل سبب الرفض الإجباري:");

    if (!reason || !reason.trim()) {
        alert("يجب كتابة سبب الرفض قبل رفض الطلب.");
        return;
    }

    const farms = getFarms();
    const farm = farms.find(f => f.id === farmId);
    if (!farm) return;

    farm.status = "Rejected";
    farm.visibleToInvestors = false;
    farm.rejectionReason = reason.trim();

    saveFarms(farms);

    addLog("رفض طلب مزرعة", `${farm.farmName} - admin1 - ${reason.trim()}`);

    alert("تم رفض طلب المزرعة وإرسال سبب الرفض للمزارع.");
    renderFarmsManagement();
}

function requestMoreFarmInfo(farmId) {
    const note = prompt("اكتب المعلومات الإضافية المطلوبة من المزارع:");

    if (!note || !note.trim()) {
        alert("يجب كتابة المعلومات المطلوبة قبل الإرسال.");
        return;
    }

    const farms = getFarms();
    const farm = farms.find(f => f.id === farmId);
    if (!farm) return;

    farm.status = "More Info Requested";
    farm.visibleToInvestors = false;
    farm.additionalInfoRequest = note.trim();

    saveFarms(farms);

    addLog("طلب معلومات إضافية لمزرعة", `${farm.farmName} - admin1 - ${note.trim()}`);

    alert("تم إرسال طلب معلومات إضافية إلى المزارع.");
    renderFarmsManagement();
}
/* =========================
   TRANSACTIONS
========================= */
function renderTransactionsMonitor() {
    const tbody = document.getElementById("transactionsTableBody");
    if (!tbody) return;

    const statusFilter = document.getElementById("transactionStatusFilter")?.value || "all";
    const fromDate = document.getElementById("transactionDateFrom")?.value || "";
    const toDate = document.getElementById("transactionDateTo")?.value || "";

    let transactions = getTransactions();

   transactions = transactions.filter(tx => {
    const matchesStatus = statusFilter === "all" || tx.status === statusFilter;

    if (!fromDate && !toDate) return matchesStatus;

    const txTime = new Date(tx.date).getTime();
    const fromTime = fromDate ? new Date(fromDate).getTime() : null;
    const toTime = toDate ? new Date(toDate).getTime() : null;

    const matchesFrom = !fromTime || txTime >= fromTime;
    const matchesTo = !toTime || txTime <= toTime;

    return matchesStatus && matchesFrom && matchesTo;
});

    if (transactions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10">لا توجد معاملات مطابقة.</td></tr>`;
        return;
    }

    tbody.innerHTML = transactions.map(tx => `
        <tr class="${tx.suspicious ? 'suspicious-row' : ''}">
            <td>${tx.investorName}</td>
            <td>${tx.farmerName}</td>
            <td>${tx.farmName}</td>
            <td>${tx.area} م²</td>
            <td>${tx.duration}</td>
            <td>${tx.harvestMethod}</td>
            <td>${getStatusBadge(tx.status)}</td>
            <td>${tx.date}</td>
            <td>
                <button class="admin-action-btn btn-secondary" onclick="viewTransactionDetails('${tx.id}')">
                    عرض
                </button>
            </td>
            <td>
                ${tx.suspicious
                    ? '<span class="flag-badge">مشبوهة</span>'
                    : '<span class="normal-badge">طبيعية</span>'}
            </td>
        </tr>
    `).join("");

    const suspiciousTransactions = transactions.filter(tx => tx.suspicious);

    if (suspiciousTransactions.length > 0) {
        setTimeout(() => {
            alert(`تنبيه: يوجد ${suspiciousTransactions.length} معاملة مشبوهة ضمن النتائج المعروضة.`);
        }, 200);
    }
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

    const search = (document.getElementById("logSearchInput")?.value || "").toLowerCase().trim();
    const fromDate = document.getElementById("logDateFrom")?.value || "";
    const toDate = document.getElementById("logDateTo")?.value || "";

    if (fromDate && toDate && fromDate > toDate) {
        tbody.innerHTML = `<tr><td colspan="5">تاريخ البداية يجب أن يكون قبل تاريخ النهاية.</td></tr>`;
        return;
    }

    let logs = getLogs();

    logs = logs.filter(log => {
        const matchesSearch =
            log.userName.toLowerCase().includes(search) ||
            log.actionType.toLowerCase().includes(search);

        const logDate = formatLogDateForFilter(log.timestamp);

        const matchesFrom = !fromDate || logDate >= fromDate;
        const matchesTo = !toDate || logDate <= toDate;

        return matchesSearch && matchesFrom && matchesTo;
    });

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

function formatLogDateForFilter(timestamp) {
    if (!timestamp) return "";

    const match = timestamp.match(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/);
    if (!match) return "";

    const day = match[1].padStart(2, "0");
    const month = match[2].padStart(2, "0");
    const year = match[3];

    return `${year}-${month}-${day}`;
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
   FARMER VERIFICATION
========================= */

function getNotifications() {
    return JSON.parse(localStorage.getItem("qinwan_notifications")) || [];
}

function saveNotifications(notifications) {
    localStorage.setItem("qinwan_notifications", JSON.stringify(notifications));
}

function addNotification(userId, message, type = "system") {
    const notifications = getNotifications();
    notifications.unshift({
        id: "N" + Date.now(),
        userId: userId,
        message: message,
        type: type,
        date: new Date().toLocaleString("ar-SA"),
        isRead: false
    });
    saveNotifications(notifications);
}

function renderFarmerVerificationQueue() {
    const container = document.getElementById("verificationCardsContainer");
    if (!container) return;

    const search = (document.getElementById("verificationSearchInput")?.value || "").trim().toLowerCase();

    const pendingFarmers = getUsers().filter(user =>
        user.role === "Farm Owner" &&
        user.status === "Pending Verification" &&
        user.name.toLowerCase().includes(search)
    );

    if (pendingFarmers.length === 0) {
        container.innerHTML = `
            <div class="admin-record-card">
                <h3>لا توجد طلبات توثيق حالياً</h3>
                <p>جميع طلبات توثيق المزارعين تمت معالجتها أو لا توجد طلبات جديدة.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = pendingFarmers.map(user => `
        <div class="admin-record-card verification-card">
            <h3>${user.name}</h3>

            <p><strong>البريد الإلكتروني:</strong> ${user.email}</p>
            <p><strong>تاريخ التسجيل:</strong> ${user.registrationDate}</p>
            <p><strong>الحالة الحالية:</strong> ${getStatusBadge(user.status)}</p>

            <div class="verification-documents">
                <div class="verification-doc-box">
                    <h4>رقم الهوية الوطنية</h4>
                    <p class="national-id-number">${user.nationalId ? user.nationalId : "غير متوفر"}</p>
                </div>

                <div class="verification-doc-box">
                    <h4>مستندات ملكية المزرعة</h4>
                    ${
                        user.ownershipDocuments
                            ? `
                                <a href="${user.ownershipDocuments}" target="_blank" class="admin-action-btn btn-secondary">
                                    فتح ملف PDF
                                </a>
                                <iframe src="${user.ownershipDocuments}" class="ownership-pdf-frame"></iframe>
                              `
                            : `<p>لا يوجد ملف مرفوع</p>`
                    }
                </div>
            </div>

            <div class="admin-card-actions">
                <button class="admin-action-btn btn-approve" onclick="approveFarmerVerification('${user.id}')">
                    اعتماد الحساب
                </button>
                <button class="admin-action-btn btn-reject" onclick="rejectFarmerVerification('${user.id}')">
                    رفض الحساب
                </button>
            </div>
        </div>
    `).join("");
}

function approveFarmerVerification(userId) {
    const users = getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) return;

    user.status = "Active";
    user.verified = true;
    user.canListFarms = true;

    saveUsers(users);
    alert("تم اعتماد الحساب");
    renderFarmerVerificationQueue();
}

function rejectFarmerVerification(userId) {
    const note = prompt("أدخلي سبب الرفض:");

    if (!note || !note.trim()) {
        alert("يجب كتابة سبب الرفض");
        return;
    }

    const users = getUsers();
    const user = users.find(u => u.id === userId);
    if (!user) return;

    user.status = "Suspended";
    user.rejectionNote = note;

    saveUsers(users);
    alert("تم رفض الحساب");
    renderFarmerVerificationQueue();
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
    renderFarmerVerificationQueue();

    document.getElementById("farmSearchInput")?.addEventListener("input", renderFarmsManagement);
    document.getElementById("farmStatusFilter")?.addEventListener("change", renderFarmsManagement);
    document.getElementById("transactionStatusFilter")?.addEventListener("change", renderTransactionsMonitor);
document.getElementById("transactionDateFrom")?.addEventListener("change", renderTransactionsMonitor);
document.getElementById("transactionDateTo")?.addEventListener("change", renderTransactionsMonitor);
document.getElementById("logSearchInput")?.addEventListener("input", renderActivityLogs);
document.getElementById("logDateFrom")?.addEventListener("change", renderActivityLogs);
document.getElementById("logDateTo")?.addEventListener("change", renderActivityLogs);
document.getElementById("logDateFrom")?.addEventListener("input", renderActivityLogs);
document.getElementById("logDateTo")?.addEventListener("input", renderActivityLogs);
});

function closeUserModal() {
    const modal = document.getElementById("userModal");
    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "";
}

window.addEventListener("click", function(event) {
    const modal = document.getElementById("userModal");
    if (modal && event.target === modal) {
        closeUserModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeUserModal();
    }
});