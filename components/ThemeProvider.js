'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const Preferences = createContext(null);
const THEME_KEY = 'bp-theme';
const MOTION_KEY = 'bp-motion';

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [motion, setMotion] = useState(true);
  const [ready, setReady] = useState(false);
  const [storageWarning, setStorageWarning] = useState('');

  useEffect(() => {
    function readPreferences() {
      let nextTheme = 'light', nextMotion = true;
      try {
        nextTheme = localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light';
        nextMotion = localStorage.getItem(MOTION_KEY) !== 'off';
      } catch { /* Private browser storage may be unavailable. */ }
      setTheme(nextTheme); setMotion(nextMotion);
      document.documentElement.dataset.theme = nextTheme;
      document.documentElement.dataset.motion = nextMotion ? 'on' : 'off';
      setReady(true);
    }
    readPreferences();
    const sync = event => {
      if (event.key === null || event.key === THEME_KEY || event.key === MOTION_KEY) readPreferences();
    };
    window.addEventListener('storage', sync);
    return () => window.removeEventListener('storage', sync);
  }, []);

  function save(key, value) {
    try { localStorage.setItem(key, value); setStorageWarning(''); }
    catch { setStorageWarning('Tanlov ishlaydi, ammo bu brauzerda keyingi tashrif uchun saqlanmadi.'); }
  }
  function changeTheme(value) {
    const next = value === 'dark' ? 'dark' : 'light';
    setTheme(next); document.documentElement.dataset.theme = next;
    save(THEME_KEY, next);
  }
  function changeMotion(value) {
    setMotion(value); document.documentElement.dataset.motion = value ? 'on' : 'off';
    save(MOTION_KEY, value ? 'on' : 'off');
  }
  return <Preferences.Provider value={{ theme, motion, ready, storageWarning, changeTheme, changeMotion }}>{children}</Preferences.Provider>;
}

export function usePreferences() { return useContext(Preferences); }
