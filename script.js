function tambahKalender() {

    const tanaman = document.getElementById("tanaman").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const jam = document.getElementById("jam").value;

    // Validasi
    if (tanaman === "" || tanggal === "" || jam === "") {

        alert("⚠️ Datanya belum lengkap nih :(");

        return;
    }

    // Kalau sudah lengkap lanjut ke Google Calendar

    const mulai = new Date(`${tanggal}T${jam}`);
    const selesai = new Date(mulai.getTime() + 30 * 60000);

    function formatGoogle(date) {
        return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    }

    const url =
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        "&text=" + encodeURIComponent("Siram Tanaman " + tanaman) +
        "&dates=" + formatGoogle(mulai) + "/" + formatGoogle(selesai) +
        "&details=" + encodeURIComponent("Pengingat penyiraman tanaman");

    window.open(url, "_blank");
}