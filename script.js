// =======================================================
// DATA KEBETULAN BATAK KARO (SANGAR DATA MODEL)
// Menggunakan ID unik untuk referensi silang
// =======================================================

const karoWebsiteData = {
    // Data Marga
    marga: {
        'Ginting': ['Ginting Manik', 'Ginting Suka', 'Ginting Munte', 'Ginting Guru Patih', 'Ginting Seragih', 'Ginting Sinisuka'],
        'Karo-Karo': ['Karo-Karo Surbakti', 'Karo-Karo Sinuraya', 'Karo-Karo Kaban', 'Karo-Karo Sitepu', 'Karo-Karo Barus', 'Karo-Karo Purba'],
        'Perangin-angin': ['Perangin-angin Sembiring', 'Perangin-angin Sinulingga', 'Perangin-angin Sukatendel', 'Perangin-angin Keliat', 'Perangin-angin Sebayang', 'Perangin-angin Pinem'],
        'Sembiring': ['Sembiring Meliala', 'Sembiring Colia', 'Sembiring Brahmana', 'Sembiring Pelawi', 'Sembiring Depari', 'Sembiring Pandia'],
        'Tarigan': ['Tarigan Sibero', 'Tarigan Tambak', 'Tarigan Gana-Gana', 'Tarigan Jampang', 'Tarigan Tua', 'Tarigan Gerneng'],
    },

    // Data Galeri (Dilengkapi ID dan Deskripsi)
    galeri: [
        { id: 1, title: "Uis Gara Tradisional", description: "Kain Uis Gara yang indah, simbol status dan restu. Warna merah melambangkan keberanian dan kekuatan spiritual.", imageUrl: "placeholder-uis-gara1.jpg", caption: "Simbol Keberanian & Restu" },
        { id: 2, title: "Rumah Siwaluh Jabu", description: "Mahakarya arsitektur tanpa paku yang mampu menampung delapan keluarga. Pondasi sistem komunal Karo.", imageUrl: "placeholder-rumah-karo.jpg", caption: "Arsitektur Megah Tanpa Paku" },
        { id: 3, title: "Gorga Merah Hitam", description: "Ukiran sakral pada rumah adat. Kombinasi Merah, Hitam, dan Putih menceritakan kisah leluhur dan kosmologi.", imageUrl: "placeholder-gorga-karo.jpg", caption: "Narasi Visual Leluhur" },
        { id: 4, title: "Kulcapi dan Gendang", description: "Alat musik petik Kulcapi yang menjadi sumber melodi utama, mengiringi tarian Guro-Guro Aronen yang ceria.", imageUrl: "placeholder-kulcapi.jpg", caption: "Musik Jiwa Taneh Karo" },
    ],

    // Data Konten Penjelasan (Sangat terstruktur)
    content: {
        intro: {
            title: "MEJUAH-JUAH! Selamat Datang di Taneh Karo Simalem",
            content: `
                <p>Selamat datang di pintu gerbang kekayaan budaya Batak Karo. Di sinilah semangat keberanian yang diwakili warna <span class="merah-tegas">Merah</span> berpadu dengan kebijaksanaan <span class="merah-tegas">Hitam</span> dalam setiap sendi kehidupan. Kami mengundang Anda mengenal <span class="merah-tegas">Merga Silima</span> dan kemegahan <span class="merah-tegas">Rumah Adat Karo</span>.</p>
                <p>Pilih menu di atas untuk menyelami filosofi yang masih tegak berdiri hari ini!</p>
            `
        },
        'halaman1_filosofi': {
            title: "🔴 FILOSOFI SANGAR: MERGA SILIMA & ULAN TANDING",
            content: `
                <h3>MERGA SILIMA: IKATAN KEKERABATAN YANG MUTLAK</h3>
                <p>Merga Silima adalah pondasi mutlak dari semua sistem sosial dan adat Karo. Lima marga utama ini memastikan harmoni dan saling ketergantungan. Di bawah ini adalah daftar lengkap yang menunjukkan kekuatan jaringan kami:</p>
                <div id="marga-detail-container" class="marga-grid"></div>

                <h4>UIS GARA: MANIFESTASI KEBERANIAN KARO</h4>
                <p>Uis Gara, atau 'Kain Merah', adalah simbol status dan restu. <span class="merah-tegas">Warna Merah</span> yang mendominasi melambangkan Keberanian (<span class="merah-tegas">Kekelengen</span>), dipadukan dengan Hitam (Kekal) dan Putih (Kesucian).</p>
                
                <h4>KOSMOLOGI TIGA DUNIA</h4>
                <p>Pandangan dunia Karo membagi alam semesta menjadi <span class="merah-tegas">Dunia Atas, Dunia Tengah, dan Dunia Bawah</span>. Pandangan ini terintegrasi dalam arsitektur dan ritual, menunjukkan kedalaman hubungan kami dengan alam dan spiritualitas.</p>
            `
        },
        'halaman2_adat_seni': {
            title: "⚫ ADAT ISTIADAT & ARSITEKTUR KEKAL",
            content: `
                <h3>RUMAH SIWALUH JABU: KEKUATAN KOMUNAL</h3>
                <p>Rumah Adang, atau Rumah Siwaluh Jabu ('Rumah Delapan Keluarga'), adalah bukti kejeniusan arsitektur yang dibangun <span class="merah-tegas">tanpa paku sama sekali</span>. Atapnya yang tinggi dan melengkung mencerminkan ketahanan dan kemegahan.</p>
                
                <h4>RAKUT SITELU: TIGA IKATAN SOSIAL</h4>
                <p>Kehidupan sosial Karo diatur oleh <span class="merah-tegas">Rakut Sitelu</span> (Tiga Ikatan) yang mendefinisikan peran dalam adat:</p>
                <ul>
                    <li><span class="merah-tegas">Kalimbubu:</span> Pihak Pemberi Istri (dihormati, pemberi restu).</li>
                    <li><span class="merah-tegas">Anak Beru:</span> Pihak Penerima Istri (pelayan, pelaksana adat).</li>
                    <li><span class="merah-tegas">Sembuyak:</span> Saudara Semarga (setara, saling mendukung).</li>
                </ul>
                <p>Keseimbangan peran ini wajib dipatuhi dalam setiap upacara, menjamin kelangsungan adat yang harmonis.</p>

                <h4>SENI GONDANG DAN TORTOR (GENDANG GURU-GURO)</h4>
                <p>Musik Karo memiliki ciri khas cepat, riang, dan ritmis, didominasi oleh alat musik <span class="merah-tegas">Kulcapi</span>. Tarian yang mengiringi disebut <span class="merah-tegas">Gendang Guro-Guro Aronen</span>, yang menekankan keceriaan dan interaksi sosial.</p>
            `
        }
    }
};

// =======================================================
// FUNGSI UTAMA RENDERING (ASYNC dan Templating Kuat)
// =======================================================

/**
 * Menggunakan async/await untuk simulasi pemuatan data yang masih "still".
 * @param {string} pageKey - Kunci halaman dari objek `karoWebsiteData`.
 */
async function renderContent(pageKey) {
    const mainContentArea = document.getElementById('main-content-area');
    
    // 1. Tampilkan Loading State (Simulasi Cepat)
    mainContentArea.innerHTML = `<section class="content-section" style="text-align:center;"><h2>Memuat Pusaka Karo...</h2></section>`;
    
    // Simulasi jeda agar kesan "still" terasa
    await new Promise(resolve => setTimeout(resolve, 500)); 

    const data = karoWebsiteData.content[pageKey];
    if (!data) {
        mainContentArea.innerHTML = `<section class="content-section reveal-item"><h2>[404] Data Pusaka Hilang!</h2></section>`;
        return;
    }

    // 2. Render Kerangka Utama
    let renderedHtml = `<section class="content-section reveal-item">`;
    renderedHtml += `<h2>${data.title}</h2>`;
    
    // Tambahkan konten (akan berisi placeholder jika perlu)
    renderedHtml += data.content; 
    renderedHtml += `</section>`;
    
    mainContentArea.innerHTML = renderedHtml;

    // 3. Panggil Fungsi Rendering Khusus (Marga atau Galeri)
    if (pageKey === 'halaman1_filosofi') {
        renderMargaData();
    } else if (pageKey === 'galeri') {
        renderGaleri();
    }

    // 4. Inisialisasi Ulang Animasi
    initializeScrollReveal();
}

// =======================================================
// FUNGSI RENDERING KHUSUS
// =======================================================

/**
 * Merender daftar marga lengkap secara dinamis ke dalam Merga Grid.
 */
function renderMargaData() {
    const margaDetailContainer = document.getElementById('marga-detail-container');
    if (!margaDetailContainer) return;

    let margaHtml = '';
    // Looping melalui objek marga
    for (const [merga, subMargaArray] of Object.entries(karoWebsiteData.marga)) {
        margaHtml += `
            <div class="merga-block reveal-item">
                <h3>Merga ${merga}</h3>
                <p>Anak Marga / Sub-marga:</p>
                <ul class="sub-marga-list">
                    ${subMargaArray.map(sub => `<li>${sub}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    margaDetailContainer.innerHTML = margaHtml;
    // Setelah render, inisialisasi ulang animasi
    initializeScrollReveal(); 
}

/**
 * Merender item galeri ke dalam Gallery Grid dengan fungsionalitas klik modal.
 */
function renderGaleri() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    let galleryHTML = '';
    karoWebsiteData.galeri.forEach(item => {
        galleryHTML += `
            <div class="gallery-item reveal-item" onclick="showModal(${item.id})">
                <img src="${item.imageUrl}" alt="${item.title}" class="gallery-image">
                <h3>${item.title}</h3>
                <p>${item.caption}</p>
            </div>
        `;
    });
    container.innerHTML = galleryHTML;
    initializeScrollReveal();
}


// =======================================================
// FUNGSI MODAL (POP-UP)
// =======================================================

/**
 * Menampilkan modal pop-up dengan detail gambar yang diklik.
 * Dipasang ke window agar dapat dipanggil dari onclick HTML.
 * @param {number} itemId - ID unik item galeri.
 */
window.showModal = function(itemId) {
    const item = karoWebsiteData.galeri.find(g => g.id === itemId);
    if (!item) return;

    const modal = document.getElementById('image-modal');
    const modalContentData = document.getElementById('modal-content-data');

    // 1. Isi konten modal
    modalContentData.innerHTML = `
        <img src="${item.imageUrl}" alt="${item.title}" class="modal-image">
        <h3 class="merah-tegas">${item.title}</h3>
        <p>${item.description}</p>
    `;

    // 2. Tampilkan modal dengan animasi
    modal.style.display = "flex";
    setTimeout(() => {
        modal.querySelector('.modal-content').classList.add('active');
    }, 10);
};

/**
 * Menutup modal pop-up.
 * Dipasang ke window agar dapat dipanggil dari onclick HTML.
 */
window.closeModal = function() {
    const modal = document.getElementById('image-modal');
    const modalContent = modal.querySelector('.modal-content');
    
    modalContent.classList.remove('active');
    
    // Tunggu transisi CSS selesai (300ms) sebelum menyembunyikan display
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); 
};


// =======================================================
// FUNGSI ANIMASI (Intersection Observer)
// =======================================================

/**
 * Menginisialisasi efek 'Scroll Reveal' untuk semua elemen '.reveal-item'.
 */
function initializeScrollReveal() {
    // Hanya amati elemen yang belum terlihat
    const revealElements = document.querySelectorAll('.reveal-item:not(.visible)'); 
    
    const options = { threshold: 0.1 };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    revealElements.forEach(element => {
        observer.observe(element);
    });
}