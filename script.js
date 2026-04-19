+const menuToggle = document.getElementById('menuToggle');
+const mainNav = document.getElementById('mainNav');
+const dropdowns = document.querySelectorAll('.dropdown');
+
+menuToggle?.addEventListener('click', () => {
+  const isOpen = mainNav.classList.toggle('open');
+  menuToggle.setAttribute('aria-expanded', String(isOpen));
+});
+
+dropdowns.forEach((dropdown) => {
+  const button = dropdown.querySelector('.dropdown-btn');
+  button?.addEventListener('click', () => {
+    if (window.innerWidth > 900) {
+      return;
+    }
+
+    dropdown.classList.toggle('open');
+  });
+});
