(function () {
    var profiles = [
        {
            name: "Isha Jain",
            email: "isha@jaingroup.com",
            role: "Admin",
            roleClass: "role-admin",
            initials: "IJ",
            department: "Product & Engineering",
            joined: "Jan 2023",
            bio: "Oversees product strategy and platform architecture."
        },
        {
            name: "Digital Marketing Team",
            email: "digitalmarketing@thejaingroup.com",
            role: "Editor",
            roleClass: "role-editor",
            initials: "DM",
            department: "Marketing",
            joined: "Mar 2023",
            bio: "Manages campaigns, content, and brand messaging."
        },
        {
            name: "Chandi Dolai",
            email: "chandi@jaingroup.com",
            role: "Member",
            roleClass: "role-member",
            initials: "CD",
            department: "Design",
            joined: "Jun 2023",
            bio: "Contributes to UI/UX design and user research."
        },
        {
            name: "System Bot",
            email: "system6@jaingroup.com",
            role: "Automation",
            roleClass: "role-automation",
            initials: "SB",
            department: "Infrastructure",
            joined: "Automatically provisioned",
            bio: "Automated account used for CI/CD and scheduled tasks."
        },
        {
            name: "Guest User",
            email: "guest@jaingroup.com",
            role: "Viewer",
            roleClass: "role-viewer",
            initials: "GU",
            department: "External",
            joined: "Jul 2026",
            bio: "Read-only access for reviewing project progress."
        }
    ];

    window.openProfile = function (index) {
        var p = profiles[index];
        if (!p) return;

        document.getElementById("profileAvatar").textContent = p.initials;
        document.getElementById("profileName").textContent = p.name;
        document.getElementById("profileEmail").textContent = p.email;
        document.getElementById("profileDept").textContent = p.department;
        document.getElementById("profileJoined").textContent = p.joined;
        document.getElementById("profileBio").textContent = p.bio;

        var roleEl = document.getElementById("profileRole");
        roleEl.textContent = p.role;
        roleEl.className = "profile-role " + p.roleClass;

        document.getElementById("profileOverlay").className = "profile-overlay open";
    };

    window.closeProfile = function () {
        document.getElementById("profileOverlay").className = "profile-overlay";
    };

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            window.closeProfile();
        }
    });
})();
