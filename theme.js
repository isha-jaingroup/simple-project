(function () {
    function syncToggleState(btn) {
        var isDark = document.documentElement.getAttribute("data-theme") === "dark";
        if (isDark) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
        btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    }

    document.addEventListener("DOMContentLoaded", function () {
        var btn = document.getElementById("themeToggle");
        if (!btn) return;

        syncToggleState(btn);

        btn.addEventListener("click", function () {
            var root = document.documentElement;
            var isDark = root.getAttribute("data-theme") === "dark";

            if (isDark) {
                root.removeAttribute("data-theme");
                try { localStorage.setItem("jg-theme", "light"); } catch (e) {}
            } else {
                root.setAttribute("data-theme", "dark");
                try { localStorage.setItem("jg-theme", "dark"); } catch (e) {}
            }

            syncToggleState(btn);
        });
    });
})();
