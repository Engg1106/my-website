const greetButton = document.getElementById("btnGreet");
const resetButton = document.getElementById("btnReset");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
const messageList = document.getElementById("messageList");
const feedbackButtons = document.querySelectorAll(".feedback-btn");

greetButton.addEventListener("click", function() {
    const name = nameInput.value.trim();
    if (name) {
        const currentDateTime = new Date();
        const dateTimeString = currentDateTime.toLocaleString();
        const message = `Halo, ${name}! Selamat datang di Squad Stone Crusher! (${dateTimeString})`;
        greeting.innerText = message;

        const messageItem = document.createElement("div");
        messageItem.classList.add("message-item");
        
        const messageText = document.createElement("p");
        messageText.innerText = message;
        messageItem.appendChild(messageText);
        
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Hapus";
        deleteButton.onclick = function() {
            messageList.removeChild(messageItem);
        };
        
        messageItem.appendChild(deleteButton);
        messageList.appendChild(messageItem);
        
        nameInput.value = "";
    } else {
        greeting.innerText = "Silakan masukkan nama Anda.";
    }
});

// Fitur Reset Daftar Pesan
resetButton.addEventListener("click", function() {
    messageList.innerHTML = "";
    greeting.innerText = "";
});

// Menangani umpan balik dengan emoji
feedbackButtons.forEach(button => {
    button.addEventListener("click", function() {
        const feedback = button.getAttribute("data-feedback");
        alert(`Terima kasih atas umpan balik: ${feedback}`); // Menggunakan alert untuk menampilkan umpan balik
    });
    document.getElementById("btnGreet").addEventListener("click", function() {
        const name = document.getElementById("nameInput").value;
        const email = document.getElementById("emailInput").value; // Mengambil nilai dari kolom email
        const greeting = `Selamat datang, ${name}! ID (server) Anda adalah ${email}.`;
        document.getElementById("greeting").textContent = greeting;
    });
    document.getElementById("btnGreet").addEventListener("click", function() {
        const name = document.getElementById("nameInput").value.trim();
        const email = document.getElementById("emailInput").value.trim();
    
        if (!name || !email) {
            alert("Silakan masukkan nama dan alamat email yang valid!");
            return; // Menghentikan eksekusi jika ada yang kosong
        }
    
        const greeting = `Selamat datang, ${name}! Alamat email Anda adalah ${email}.`;
        document.getElementById("greeting").textContent = greeting;
    });
    
    document.getElementById("customLink").addEventListener("click", function(event) {
        event.preventDefault(); // Mencegah tautan melakukan navigasi segera
        const userConfirmed = confirm("Anda akan diarahkan ke situs kustom. Apakah Anda yakin?");
        
        if (userConfirmed) {
            window.location.href = this.href; // Mengalihkan ke URL jika pengguna mengkonfirmasi
        }
    });
    
    
    
});
