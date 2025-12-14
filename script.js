// ===== Gestion des sections =====
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));
    
    const target = document.getElementById(sectionId);
    if(target) target.classList.add('active');
}

// ===== Pop-up Chatbot =====

// Crée le pop-up overlay
function openOpenTalkChat() {
    // Vérifie si le pop-up existe déjà
    if(document.getElementById('chatOverlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'chatOverlay';

    overlay.innerHTML = `
        <div class="chatContainer">
            <button onclick="closeOpenTalkChat()">✖️ Fermer</button>
            <iframe 
                src="https://cdn.botpress.cloud/webchat/v3.5/shareable.html?configUrl=https://files.bpcontent.cloud/2025/12/13/13/20251213131644-1HKFSWBK.json" 
                width="100%" 
                height="100%" 
                style="border:none;">
            </iframe>
        </div>
    `;

    document.body.appendChild(overlay);
}

// Ferme le pop-up Chatbot
function closeOpenTalkChat() {
    const overlay = document.getElementById('chatOverlay');
    if(overlay) overlay.remove();
}