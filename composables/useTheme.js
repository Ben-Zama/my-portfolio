import { ref, watch, onMounted } from 'vue';

export function useTheme() {
  // reactive state
  const isDark = ref(false);

  // write theme to <html> and persist
  function applyTheme(dark) {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); }
    catch (e) { /* ignore if unavailable */ }
  }

  onMounted(() => {
    // 1. read saved preference
    let saved = null;
    try { saved = localStorage.getItem('theme'); }
    catch {}

    if (saved === 'dark' || saved === 'light') {
      isDark.value = (saved === 'dark');
    }
    // 2. otherwise fall back to system
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDark.value = true;
    }
    // 3. apply whichever we picked
    applyTheme(isDark.value);
  });

  // when user toggles, re-apply + persist
  watch(isDark, applyTheme);

  return { isDark };
}
