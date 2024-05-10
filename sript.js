
document.addEventListener('DOMContentLoaded', function() {
    var ism = prompt("Ismingizni kiriting:");
    if (ism) {
        document.getElementById('ota').textContent = ism;
    } else {
        document.getElementById('ota').textContent = "Ism kiritilmadi";
    }
});
