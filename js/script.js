// Tunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    
    const loanForm = document.getElementById('loanForm');
    if (loanForm) {
        loanForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const judulBuku = document.getElementById('judulBuku').value.trim();
            const namaPeminjam = document.getElementById('namaPeminjam').value.trim();
            const tglPinjam = document.getElementById('tglPinjam').value.trim();
            const alertContainer = document.getElementById('alert-container');
            alertContainer.innerHTML = '';
            
            if (judulBuku === '' || namaPeminjam === '' || tglPinjam === '') {
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-danger';
                alertDiv.setAttribute('role', 'alert');
                alertDiv.innerText = 'Pesan Kesalahan: Semua kolom wajib diisi sebelum formulir dapat dikirim.';
                alertContainer.appendChild(alertDiv);
            } else {
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-success';
                alertDiv.setAttribute('role', 'alert');
                alertDiv.innerText = 'Data transaksi berhasil disimpan!';
                alertContainer.appendChild(alertDiv);
                loanForm.reset();
            }
        });
    }


    // UNTUK POP-UP LOGIN

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        const successModal = new bootstrap.Modal(document.getElementById('loginSuccessModal'));

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === '' || password === '') {
                alert('Username dan Password tidak boleh kosong!');
                return;
            }
            
            successModal.show();

            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
        });
    }
});