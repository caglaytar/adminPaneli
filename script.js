function showContent(page) {
    const contentTitle = document.getElementById('content-title');
    const contentArea = document.getElementById('content-area');

    if (page === 'dashboard') {
        contentTitle.textContent = 'Dashboard olsun';
        contentArea.innerHTML = 'Butona tıklandı yazısı gelecek';
    } else if (page === 'users') {
        contentTitle.textContent = 'Kullanıcıların listesi';
        contentArea.innerHTML = `
        <p>Kullanıcıların listesi</p>
        <ul>
            <li> kullanıcı 1 </li>
            <li> kullanıcı 2 </li>
            <li> kullanıcı 3 </li>
        </ul>
        `;
        
    } else if (page === 'settings') {
        contentTitle.textContent = 'Ayarlar';
        contentArea.innerHTML = `
        <p>Ayarlar</p>
        <button type="button" onclick="alert('Ayarlar kaydedildi')">Kaydet</button>
        `;
    }
}
