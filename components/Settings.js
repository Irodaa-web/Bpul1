'use client';
import Icon from './Icon';
import TelegramConnect from './TelegramConnect';
import { usePreferences } from './ThemeProvider';

export default function Settings({ user, parent, busy, onSignOut, onTour }) {
  const { theme, motion, ready, storageWarning, changeTheme, changeMotion } = usePreferences();
  return <div className="settings-grid">
    <section className="card settings-card settings-appearance">
      <span className="settings-symbol"><Icon name="settings" size={26} /></span>
      <span className="eyebrow">SIZGA MOS MUHIT</span>
      <h2>Ko‘rinish va harakat</h2>
      <p>Birinchi tashrifda yorug‘ rejim ochiladi. Tanlovingiz shu brauzerda saqlanadi.</p>
      <div className="theme-options" role="group" aria-label="Sayt rang rejimi">
        <button className={`theme-choice ${theme === 'light' ? 'selected' : ''}`} aria-pressed={theme === 'light'} disabled={!ready} onClick={() => changeTheme('light')}>
          <span className="theme-preview preview-light" aria-hidden="true"><i /><i /><i /></span>
          <span><Icon name="sun" />Yorug‘ rejim {theme === 'light' && <Icon name="check" size={16} />}</span>
        </button>
        <button className={`theme-choice ${theme === 'dark' ? 'selected' : ''}`} aria-pressed={theme === 'dark'} disabled={!ready} onClick={() => changeTheme('dark')}>
          <span className="theme-preview preview-dark" aria-hidden="true"><i /><i /><i /></span>
          <span><Icon name="moon" />Tungi rejim {theme === 'dark' && <Icon name="check" size={16} />}</span>
        </button>
      </div>
      <div className="settings-row"><div><strong id="motion-label">Jonli animatsiyalar</strong><p id="motion-hint">Kartalar va tugmalarda mayin 3D harakatlar.</p></div>
        <button type="button" className="preference-switch" role="switch" aria-checked={motion} aria-labelledby="motion-label" aria-describedby="motion-hint" disabled={!ready} onClick={() => changeMotion(!motion)}><span /></button>
      </div>
      <small>Qurilmangizda harakatni kamaytirish yoqilgan bo‘lsa, bu tanlov ustun turadi.</small>
      {storageWarning && <p className="alert" role="status">{storageWarning}</p>}
    </section>
    <section className="card settings-card settings-profile">
      <span className="avatar big">{user.name.charAt(0).toUpperCase()}</span>
      <span className="eyebrow">MENING AKKAUNTIM</span><h2>{user.name}</h2>
      <dl className="settings-details"><div><dt>Login</dt><dd>@{user.username}</dd></div><div><dt>Akkaunt turi</dt><dd>{parent ? 'Ota-ona' : 'Farzand'}</dd></div></dl>
      <p>Boshqa akkauntga kirish uchun joriy seans yakunlanadi va kirish sahifasi ochiladi.</p>
      <div className="settings-actions"><button className="button primary" disabled={busy} onClick={onSignOut}><Icon name="users" />Boshqa akkauntga kirish</button><button className="button light" disabled={busy} onClick={onSignOut}><Icon name="logout" />Tizimdan chiqish</button></div>
    </section>
    <div className="settings-telegram">{parent ? <><h2 className="settings-section-title">Telegram bilan bog‘lanish</h2><TelegramConnect /></> : <section className="card settings-card"><span className="settings-symbol"><Icon name="bell" size={26} /></span><h2>Telegram xabarnomalari</h2><p>Vazifangiz, rasmingiz va izohingiz ota-onangizning Telegram’iga yuboriladi. Telegram ulanmagan bo‘lsa, ota-onangiz o‘z akkauntidagi “Sozlamalar” bo‘limidan ulashi mumkin.</p><span className="tag">Telegram’ni ota-ona ulaydi</span></section>}</div>
    <section className="card settings-card settings-help"><div><span className="eyebrow">KICHIK YORDAM</span><h2>Sayt bilan tanishamiz</h2><p>Asosiy bo‘limlarni yana bir bor ko‘rib chiqing.</p></div><button className="button light" onClick={onTour}><Icon name="book" />Saytni tushuntirish</button></section>
  </div>;
}
