const candidates = [
    { id: 'Ihsan', name: 'Ihsan Dani Pratama', role: 'Kandidat 01', image: 'Ihsan.jpeg', vision: 'VISI: Mewujudkan angkatan Ekonomi Syariah 2026 yang berintegritas, kolaboratif dan rahmatan lil alamin-unggul dalam ilmu, kokoh dalam ukhuwah, serta berdampak untuk ummat', mission: 'MISI:\n 1. Penguatan intelektual dan spiritual demi menguatkan akademik mahasiswa\n 2. Penguatan solidaritas dan kekeluargaan sesama prodi ekonomi syariah 2026\n 3. Penguatan karya dan kontribusi untuk mahasiswa ekonomi syariah 2026 yang bermanfaat dan terlihat'},
    { id: 'Sidiq', name: 'Sidiq', role: 'Kandidat 02', image: 'Sidiq.jpeg', vision: 'VISI: Menjadikan Angkatan 2026 sebagai angkatan yang kompak, aktif dan bermanfaat bagi sesama, kampus dan masyarakat.', mission: 'MISI:\n 1. Komunikasi: Memperkuat koordinasi dan saling memberi informasi antar angkatan 2026\n 2. Kebersamaan: Mempererat tali kekeluargaan dan solidaritas antar anggota angkatan 2026\n 3. Aspirasi: Menampung aspirasi anggota serta menjembatani dengan pihak jurusan, fakultas atau kampus'},
    { id: 'Annur', name: 'Muhammad Annur', role: 'Kandidat 03', image: 'Annur.jpeg', vision: 'VISI: Mewujudkan angkatan yang memiliki solidaritas dan kekompakan yang tinggi, aktif dalam berkegiatan, serta berprestasi baik di bidang akademik maupun non-akademik.', mission: 'MISI:\n 1. Mempererat solidaritas dan kekompakan melalui komunikasi yang terbuka dan kegiatan kebersamaan yang inklusif\n 2. Meningkatkan keaktifan angkatan dengan berperan sebagai penggerak dan menjadi wadah informasi pada setiap kegiatan\n 3. Menghidupkan partipisai angkatan dalam kegiatan kampus baik dari akademik maupun non-akademik'},
    { id: 'Anis', name: 'Muhammad Anis', role: 'Kandidat 04', image: 'Anis.jpeg', vision: 'VISI: Mewujudkan angkatan solid, adaptif dan saling mendukung dalam mencapai prestasi akademik maupun non-akademik.', mission: 'MISI:\n 1. Mempererat kebersamaan antaranggota angkatan tanpa membeda-bedakan\n 2. Menjadi penghubung yang aktif dan responsif antara mahasiswa, dosen dan pihak kampus\n 3. Wadah untuk saling bantu dalam urusan akademik dan pengembangan diri'},
    { id: 'Diyaul', name: 'Diyaul Kamil', role: 'Kandidat 05', image: 'Diyaul.jpeg', vision: 'VISI: Mewujudkan Ekonomi Syariah menjadi ruang tumbuh bersama yang kolektif dan suportif.', mission: 'MISI:\n 1. Menghidupkan peran aktif kelas dalam menentukan keputusan angkatan\n 2. Membangun komunikasi aktif lintas kelas pada penuntasan problem bersama'},
    { id: 'Gusti', name: 'Gusti Tri Diantoro', role: 'Kandidat 06', image: 'Gusti.jpeg', vision: 'VISI: Membangun angkatan di mana setiap suara memiliki ruang untuk didengar, dipertimbangkan dan diperjuangkan.', mission: 'MISI:\n 1. Membuka ruang aspirasi terhadap ide mahasiswa\n 2. Menyampaikan aspirasi tanpa kepentingan individual\n 3. Bisa menjadi penengah sekaligus mencari solusi permasalahan secara damai dan transparansi bila perlu'},
    { id: 'Tito', name: 'Tito Ata Rohman', role: 'Kandidat 07', image: 'Tito.jpeg', vision: 'VISI: Mencapai tujuan yang Alhamdulillah', mission: 'MISI:\n Memulai dengan Bismillah'}, 
    { id: 'Nala', name: 'Nala Ama Maftuf', role: 'Kandidat 08', image: 'Nala.jpeg', vision: 'VISI: Menjadikan Ekonomi Syariah sebagai program studi yang ungguul, kolaboratif dan berprestasi berlandaskan nilai-nilai Rahmatan lil Alamin.', mission: 'MISI:\n Membangun internal organisasi yang solid, profesional dan berasaskan kekeluargaan'},
    { id: 'Maftuh', name: 'Maftuh Aliyudin', role: 'Kandidat 09', image: 'Maftuh.jpeg', vision: 'VISI: Menjadi angkatan mahasiswa Ekonomi Syariah 2026 yang unggul, berintegritas, bertransformasi digital, serta mampu menjadi pelopor pembangunan ekonomi berbasis keadilan dan kemaslahatan umat di tingkat nasional maupun internasional.', mission: 'MISI:\n 1. ​Penguatan Akademik dan Riset\n Meningkatkan pemahaman mendalam terkait regulasi, teori, dan praktik ekonomi syariah kontemporer melalui diskusi ilmiah, riset berdampak, dan pelatihan komprehensif\n 2. ​Inovasi dan Digitalisasi Keuangan Syariah\n Mendorong penguasaan teknologi finansial (fintech) dan ekonomi digital bernilai syariah untuk menjawab tantangan industri modern\n 3. Integritas dan Profesionalisme Berkarakter\n Membentuk karakter anggota angkatan yang menjunjung tinggi etika kejujuran (Siddiq), transparansi (Amanah), komunikatif (Tabligh) dan kecerdasan profesional (Fathanah)'},
    { id: 'Nawfal', name: 'Nawfal Lutfi Hafiz', role: 'Kandidat 10', image: 'Nawfal.jpeg', vision: 'VISI: Menciptakan angkatan Ekonomi Syariah yang kuat, kreatif, kompak, dan berintegritas, dengan semangat kebersamaan yang mampu memberikan dampak positif bagi kampus dan masyarakat.', mission: 'MISI:\n 1. Membangun solidaritas dan rasa kekeluargaan di antara mahasiswa Ekonomi Syariah melalui komunikasi yang efektif dan kebersamaan\n 2. Menciptakan lingkungan yang kompak dan mendukung dalam aspek akademik maupun kegiatan non-akademik\n 3. Mengembangkan kreativitas mahasiswa melalui berbagai kegiatan, program, dan ide-ide inovatif yang bermanfaat\n 4. Menjadi jembatan komunikasi yang baik antara mahasiswa dan pihak program studi serta organisasi kampus\n 5. Mengajak setiap anggota untuk aktif berkontribusi, sehingga mereka tidak hanya menjadi bagian dari angkatan, tetapi juga terlibat dalam pembangunan dan pengembangan angkatan\n 6. Mengedepankan nilai-nilai Ekonomi Syariah, seperti kejujuran, amanah, keadilan, dan tanggung jawab dalam setiap aktivitas'},
    { id: 'Akhsya', name: 'Akhsya Abdissalam Anjabi', role: 'Kandidat 11', image: 'Akhsya.jpeg', vision: 'VISI: Berfikir kritis, inovatif, kreatif dan berwawasan luas.', mission: 'MISI:\n 1. Berfikir kritis dalam situasi kapanpun dan dimanapun\n 2. Mempunyai inovatifitas dan kreatifitas yang tinggi\n 3. Serta berwawasan yang luas dan mampu mengombinasikan semua aspek diatas menjadi satu kesatuan'},
    { id: 'Algian', name: 'Algian Muhammad Resoli', role: 'Kandidat 12', image: 'Algian.jpeg', vision: 'VISI: Menjadikan Angkatan 26 sebagai angkatan yang kompak, aktif, dan bermanfaat bagi sesama, kampus, dan masyarakat.', mission: 'MISI:\n 1. Komunikasi: Memperkuat koordinasi dan saling memberi informasi antar angkatan 26\n 2. Kebersamaan: Mempererat tali kekeluargaan dan solidaritas antar anggota angkatan 26\n 3. Aspirasi: Menampung aspirasi anggota serta menjembatani dengan pihak jurusan, fakultas, atau kampus'}
];

const ADMIN_PIN = '2026';
const VOTED_STORAGE_KEY = 'emeraldVoteSubmitted';
const VOTED_ROUND_KEY = 'emeraldVoteRound';
const ELECTION_STATE_PATH = 'settings/election';
let db = null;
let votesRef = null;
let votersRef = null;
let electionStateRef = null;
let electionRound = null;
let selectedCandidate = null;
let votesChart = null;

function hasVoted() {
    const votedRound = localStorage.getItem(VOTED_ROUND_KEY);
    return electionRound !== null && votedRound === electionRound;
}

function applyElectionRound(round) {
    electionRound = String(round || 1);
    localStorage.removeItem(VOTED_STORAGE_KEY);

    if (localStorage.getItem(VOTED_ROUND_KEY) !== electionRound) {
        localStorage.removeItem(VOTED_STORAGE_KEY);
        localStorage.removeItem(VOTED_ROUND_KEY);
    }

    updateVotingState();
}

async function syncElectionRound() {
    if (!electionStateRef) {
        return;
    }

    const snapshot = await electionStateRef.once('value');
    applyElectionRound(snapshot.val()?.round);
}

function updateVotingState() {
    const voted = hasVoted();

    document.querySelectorAll('[data-vote], #modalVoteButton, #confirmVoteButton').forEach(button => {
        button.disabled = voted;
    });

    document.querySelectorAll('[data-vote]').forEach(button => {
        button.textContent = voted ? 'Sudah memilih' : 'Pilih kandidat';
    });
}

const candidateGrid = document.getElementById('candidateGrid');
const candidateModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('candidateModal'));
const confirmModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('confirmVoteModal'));
const successModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('successModal'));
const adminLoginModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('adminLoginModal'));
const adminDashboardModal = bootstrap.Modal.getOrCreateInstance(document.getElementById('adminDashboardModal'));

async function getVotes() {
    if (!db || !votesRef) {
        return {};
    }

    const snapshot = await votesRef.once('value');
    const votes = snapshot.val() || {};
    return Object.fromEntries(
        Object.entries(votes).map(([candidateId, voteData]) => [candidateId, voteData.count || 0])
    );
}

async function getVoters() {
    if (!db || !votersRef) {
        return [];
    }

    const snapshot = await votersRef.once('value');
    return Object.values(snapshot.val() || {})
        .sort((a, b) => (b.votedAt || 0) - (a.votedAt || 0));
}

async function hasRegisteredEmail(email) {
    const snapshot = await votersRef.orderByChild('email').equalTo(email).once('value');
    return snapshot.exists();
}

function renderCandidates(votes = {}) {
    candidateGrid.innerHTML = candidates.map((candidate, index) => {
        const missionText = Array.isArray(candidate.mission)
            ? candidate.mission.join('\n')
            : (candidate.mission || '');

        return `
        <div class="col-md-6 col-lg-6">
            <article class="candidate-card">
                <div class="candidate-image">
                    <img src="${candidate.image}" alt="Foto ${candidate.name}" loading="lazy">
                    <span class="candidate-number">0${index + 1}</span>
                </div>
                <div class="candidate-body">
                    <div class="candidate-role">${candidate.role}</div>
                    <h3>${candidate.name}</h3>
                    <p>${candidate.vision}</p>
                    <p class="mission-text">${missionText}</p>
                    <div class="d-flex gap-2">
                        <button class="btn btn-success flex-grow-1 vote-button" data-vote="${candidate.id}">Pilih kandidat</button>
                    </div>
                    <div class="small text-secondary mt-3">Suara saat ini: <strong>${votes[candidate.id] || 0}</strong></div>
                </div>
            </article>
        </div>
    `;
    }).join('');
    updateVotingState();
}

function openCandidate(id) {
    selectedCandidate = candidates.find(candidate => candidate.id === id);
    const missionItems = Array.isArray(selectedCandidate.mission)
        ? selectedCandidate.mission
        : String(selectedCandidate.mission || '').split('\n').filter(Boolean);

    document.getElementById('candidateModalTitle').textContent = selectedCandidate.name;
    document.getElementById('candidateModalRole').textContent = selectedCandidate.role;
    document.getElementById('candidateModalContent').innerHTML = `
        <p class="lead">${selectedCandidate.vision}</p>
        <p>${selectedCandidate.bio || ''}</p>
        <h3 class="h6 mt-4">Misi utama</h3>
        <ul class="detail-list">${missionItems.map(item => `<li>${item}</li>`).join('')}</ul>
        <h3 class="h6 mt-4">Pengalaman</h3>
        <p class="text-secondary mb-0">${selectedCandidate.experience || 'Pengalaman belum tersedia.'}</p>
    `;
    candidateModal.show();
}

function askForVote(id) {
    if (hasVoted()) {
        alert('Kamu sudah memberikan suara. Setiap pemilih hanya dapat memilih satu kali.');
        return;
    }

    selectedCandidate = candidates.find(candidate => candidate.id === id);
    document.getElementById('confirmCandidateName').textContent = selectedCandidate.name;
    confirmModal.show();
}

async function submitVote() {
    if (!selectedCandidate || !db || !votesRef) {
        alert('Firebase belum siap. Isi konfigurasi Firebase terlebih dahulu.');
        return;
    }

    if (hasVoted()) {
        confirmModal.hide();
        alert('Kamu sudah memberikan suara.');
        return;
    }

    const voterEmailInput = document.getElementById('voterEmail');
    const voterEmail = voterEmailInput.value.trim().toLowerCase();
    if (!voterEmailInput.checkValidity()) {
        voterEmailInput.reportValidity();
        return;
    }

    try {
        if (await hasRegisteredEmail(voterEmail)) {
            alert('Email ini sudah tercatat sebagai pemilih.');
            return;
        }

        const voterKey = votersRef.push().key;
        const updates = {};
        updates[`votes/${selectedCandidate.id}`] = {
            candidateId: selectedCandidate.id,
            count: firebase.database.ServerValue.increment(1),
            updatedAt: firebase.database.ServerValue.TIMESTAMP
        };
        updates[`voters/${voterKey}`] = {
            email: voterEmail,
            candidateId: selectedCandidate.id,
            candidateName: selectedCandidate.name,
            round: electionRound || '1',
            votedAt: firebase.database.ServerValue.TIMESTAMP
        };
        await db.ref().update(updates);

        localStorage.setItem(VOTED_ROUND_KEY, electionRound || '1');
        voterEmailInput.value = '';
        updateVotingState();
        confirmModal.hide();
        candidateModal.hide();
        successModal.show();
        refreshVoteData();
    } catch (error) {
        console.error('Gagal menyimpan suara:', error);
        if (error.code === 'permission-denied') {
            alert('Suara belum tersimpan karena Realtime Database Rules menolak akses. Perbarui rules di Firebase Console.');
            return;
        }

        alert('Gagal mencatat suara. Coba lagi beberapa saat.');
    }
}

async function refreshVoteData() {
    try {
        const votes = await getVotes();
        const voters = await getVoters();
        renderCandidates(votes);
        renderDashboard(votes, voters);
    } catch (error) {
        console.error('Gagal memuat data suara:', error);
        renderCandidates();
    }
}

function renderDashboard(votes = {}, voters = []) {
    const sorted = candidates
        .map(candidate => ({ ...candidate, votes: votes[candidate.id] || 0 }))
        .sort((a, b) => b.votes - a.votes);

    document.getElementById('totalVotes').textContent = sorted.reduce((total, candidate) => total + candidate.votes, 0);
    document.getElementById('totalCandidates').textContent = candidates.length;
    document.getElementById('totalVoters').textContent = voters.length;
    document.getElementById('leaderboard').innerHTML = sorted.map((candidate, index) => `
        <div class="leader-row">
            <span class="leader-rank">#${index + 1}</span>
            <img class="leader-avatar" src="${candidate.image}" alt="">
            <span class="leader-name">${candidate.name}</span>
            <strong>${candidate.votes}</strong>
        </div>
    `).join('');

    document.getElementById('voterList').innerHTML = voters.length ? voters.map(voter => `
        <tr>
            <td>${escapeHtml(voter.email || '-')}</td>
            <td>${escapeHtml(voter.candidateName || voter.candidateId || '-')}</td>
            <td>${formatVotedAt(voter.votedAt)}</td>
        </tr>
    `).join('') : '<tr><td colspan="3" class="text-secondary">Belum ada data pemilih.</td></tr>';

    const context = document.getElementById('votesChart');
    if (votesChart) votesChart.destroy();

    votesChart = new Chart(context, {
        type: 'bar',
        data: {
            labels: candidates.map(candidate => candidate.name),
            datasets: [{
                label: 'Suara',
                data: candidates.map(candidate => votes[candidate.id] || 0),
                backgroundColor: ['#10b981', '#087f5b', '#8de6b8'],
                borderRadius: 7,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { precision: 0 }
                },
                x: {
                    grid: { display: false }
                }
            }
        }
    });
}

function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[character]));
}

function formatVotedAt(timestamp) {
    if (!timestamp) {
        return '-';
    }

    return new Intl.DateTimeFormat('id-ID', {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(new Date(timestamp));
}

renderCandidates();

candidateGrid.addEventListener('click', event => {
    const detailButton = event.target.closest('[data-detail]');
    const voteButton = event.target.closest('[data-vote]');

    if (detailButton) openCandidate(detailButton.dataset.detail);
    if (voteButton) askForVote(voteButton.dataset.vote);
});

document.getElementById('modalVoteButton').addEventListener('click', () => {
    candidateModal.hide();
    askForVote(selectedCandidate.id);
});

document.getElementById('confirmVoteButton').addEventListener('click', submitVote);

document.getElementById('voterEmail').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitVote();
    }
});

document.getElementById('adminLoginForm').addEventListener('submit', async event => {
    event.preventDefault();

    if (document.getElementById('adminPin').value === ADMIN_PIN) {
        document.getElementById('pinError').classList.add('d-none');
        document.getElementById('adminPin').value = '';
        adminLoginModal.hide();
        const votes = await getVotes();
        const voters = await getVoters();
        renderDashboard(votes, voters);
        adminDashboardModal.show();
    } else {
        document.getElementById('pinError').classList.remove('d-none');
    }
});

document.getElementById('resetButton').addEventListener('click', async () => {
    if (!db || !votesRef) {
        alert('Firebase belum siap. Isi konfigurasi Firebase terlebih dahulu.');
        return;
    }

    if (confirm('Reset seluruh data pemilihan?')) {
        const electionStateSnapshot = await electionStateRef.once('value');
        const nextRound = (electionStateSnapshot.val()?.round || 1) + 1;

        await db.ref().update({
            votes: null,
            voters: null,
            [ELECTION_STATE_PATH]: {
                round: nextRound,
                updatedAt: firebase.database.ServerValue.TIMESTAMP
            }
        });
        localStorage.removeItem(VOTED_STORAGE_KEY);
        localStorage.removeItem(VOTED_ROUND_KEY);
        applyElectionRound(nextRound);
        updateVotingState();
        refreshVoteData();
    }
});

async function init() {
    if (typeof firebase === 'undefined') {
        alert('Firebase SDK belum dimuat. Periksa script Firebase di index.html.');
        return;
    }

    if (!firebaseConfig || !firebaseConfig.apiKey || firebaseConfig.apiKey.includes('YOUR_')) {
        alert('Firebase belum dikonfigurasi. Isi file firebase-config.js dengan kredensial proyek Anda terlebih dahulu.');
        return;
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    db = firebase.database();
    votesRef = db.ref('votes');
    votersRef = db.ref('voters');
    electionStateRef = db.ref(ELECTION_STATE_PATH);
    await syncElectionRound();
    electionStateRef.on('value', snapshot => {
        applyElectionRound(snapshot.val()?.round);
    }, error => console.error('Gagal memantau ronde pemilihan:', error));
    refreshVoteData();
}

init();
