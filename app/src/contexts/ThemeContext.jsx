import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { brands as defaultBrands } from '../data/brands';

const ThemeContext = createContext();

const THEMES = {
  dark: {
    id: 'dark',
    label: 'Sombre',
    class: 'theme-dark',
  },
  light: {
    id: 'light',
    label: 'Clair',
    class: 'theme-light',
  },
  midnight: {
    id: 'midnight',
    label: 'Minuit',
    class: 'theme-midnight',
  },
  contrast: {
    id: 'contrast',
    label: 'Contraste élevé',
    class: 'theme-contrast',
  },
};

const ACCENT_COLORS = {
  blue: { id: 'blue', label: 'Bleu', hue: '217', color: '#3b82f6' },
  emerald: { id: 'emerald', label: 'Émeraude', hue: '160', color: '#10b981' },
  violet: { id: 'violet', label: 'Violet', hue: '270', color: '#8b5cf6' },
  rose: { id: 'rose', label: 'Rose', hue: '340', color: '#f43f5e' },
  amber: { id: 'amber', label: 'Ambre', hue: '38', color: '#f59e0b' },
  cyan: { id: 'cyan', label: 'Cyan', hue: '190', color: '#06b6d4' },
  red: { id: 'red', label: 'Rouge', hue: '0', color: '#ef4444' },
  orange: { id: 'orange', label: 'Orange', hue: '25', color: '#f97316' },
};

const FONT_SIZES = {
  xs: { id: 'xs', label: 'Très petit', scale: 0.85 },
  sm: { id: 'sm', label: 'Petit', scale: 0.92 },
  md: { id: 'md', label: 'Normal', scale: 1 },
  lg: { id: 'lg', label: 'Grand', scale: 1.1 },
  xl: { id: 'xl', label: 'Très grand', scale: 1.2 },
};

const BORDER_RADIUS = {
  none: { id: 'none', label: 'Aucun', value: '0' },
  sm: { id: 'sm', label: 'Léger', value: '0.375rem' },
  md: { id: 'md', label: 'Moyen', value: '0.75rem' },
  lg: { id: 'lg', label: 'Arrondi', value: '1rem' },
  xl: { id: 'xl', label: 'Très arrondi', value: '1.5rem' },
  full: { id: 'full', label: 'Complet', value: '9999px' },
};

const TRANSITIONS = {
  none: { id: 'none', label: 'Aucune', duration: '0ms' },
  fast: { id: 'fast', label: 'Rapide', duration: '150ms' },
  normal: { id: 'normal', label: 'Normale', duration: '250ms' },
  slow: { id: 'slow', label: 'Lente', duration: '400ms' },
  verySlow: { id: 'verySlow', label: 'Très lente', duration: '600ms' },
};

const EFFECTS = {
  none: { id: 'none', label: 'Aucun' },
  glassmorphism: { id: 'glassmorphism', label: 'Glassmorphism' },
  neon: { id: 'neon', label: 'Néon' },
  flat: { id: 'flat', label: 'Flat' },
  gradient: { id: 'gradient', label: 'Gradient' },
};

const DENSITY = {
  compact: { id: 'compact', label: 'Compact', spacing: 0.75 },
  comfortable: { id: 'comfortable', label: 'Confortable', spacing: 1 },
  spacious: { id: 'spacious', label: 'Spacieux', spacing: 1.25 },
};

const DEFAULT_SETTINGS = {
  theme: 'dark',
  accentColor: 'blue',
  fontSize: 'md',
  borderRadius: 'lg',
  transition: 'normal',
  effect: 'glassmorphism',
  density: 'comfortable',
  animations: true,
  blur: true,
  shadows: true,
  reducedMotion: false,
  sidebarCollapsed: false,
};

export function ThemeProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('app-settings');
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // Custom tabs stored separately
  const [customTabs, setCustomTabs] = useState(() => {
    try {
      const saved = localStorage.getItem('custom-tabs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Brand overrides (reorder, rename)
  const [brandOverrides, setBrandOverrides] = useState(() => {
    try {
      const saved = localStorage.getItem('brand-overrides');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Persist settings
  useEffect(() => {
    localStorage.setItem('app-settings', JSON.stringify(settings));
    applyTheme(settings);
  }, [settings]);

  // Persist custom tabs
  useEffect(() => {
    localStorage.setItem('custom-tabs', JSON.stringify(customTabs));
  }, [customTabs]);

  // Persist brand overrides
  useEffect(() => {
    localStorage.setItem('brand-overrides', JSON.stringify(brandOverrides));
  }, [brandOverrides]);

  const applyTheme = useCallback((s) => {
    const root = document.documentElement;

    // Theme class
    root.className = '';
    root.classList.add(THEMES[s.theme]?.class || 'theme-dark');

    // Accent color
    const accent = ACCENT_COLORS[s.accentColor] || ACCENT_COLORS.blue;
    root.style.setProperty('--accent-hue', accent.hue);
    root.style.setProperty('--accent-color', accent.color);

    // Font size
    const fs = FONT_SIZES[s.fontSize] || FONT_SIZES.md;
    root.style.setProperty('--font-scale', fs.scale);
    root.style.fontSize = `${fs.scale * 16}px`;

    // Border radius
    const br = BORDER_RADIUS[s.borderRadius] || BORDER_RADIUS.lg;
    root.style.setProperty('--radius', br.value);

    // Transitions
    const tr = TRANSITIONS[s.transition] || TRANSITIONS.normal;
    root.style.setProperty('--transition-duration', tr.duration);

    // Density
    const dn = DENSITY[s.density] || DENSITY.comfortable;
    root.style.setProperty('--density', dn.spacing);

    // Effects
    root.classList.toggle('effect-glass', s.effect === 'glassmorphism');
    root.classList.toggle('effect-neon', s.effect === 'neon');
    root.classList.toggle('effect-flat', s.effect === 'flat');
    root.classList.toggle('effect-gradient', s.effect === 'gradient');

    // Toggles
    root.classList.toggle('no-animations', !s.animations);
    root.classList.toggle('no-blur', !s.blur);
    root.classList.toggle('no-shadows', !s.shadows);
    root.classList.toggle('reduced-motion', s.reducedMotion);
  }, []);

  const updateSetting = useCallback((key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  }, []);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
  }, []);

  // Custom tabs management
  const addCustomTab = useCallback((tab) => {
    setCustomTabs(prev => [...prev, { ...tab, id: Date.now().toString(), createdAt: new Date().toISOString() }]);
  }, []);

  const updateCustomTab = useCallback((id, data) => {
    setCustomTabs(prev => prev.map(t => t.id === id ? { ...t, ...data } : t));
  }, []);

  const deleteCustomTab = useCallback((id) => {
    setCustomTabs(prev => prev.filter(t => t.id !== id));
  }, []);

  // Brand overrides management
  const updateBrandOverride = useCallback((brandId, categories) => {
    setBrandOverrides(prev => ({ ...prev, [brandId]: categories }));
  }, []);

  const resetBrandOverride = useCallback((brandId) => {
    setBrandOverrides(prev => {
      const next = { ...prev };
      delete next[brandId];
      return next;
    });
  }, []);

  const resetAllBrandOverrides = useCallback(() => {
    setBrandOverrides({});
  }, []);

  // Compute effective brands with overrides applied
  const effectiveBrands = useMemo(() => {
    return defaultBrands.map(brand => {
      const override = brandOverrides[brand.id];
      if (!override) return brand;
      return { ...brand, categories: override };
    });
  }, [brandOverrides]);

  const value = {
    settings,
    updateSetting,
    resetSettings,
    customTabs,
    addCustomTab,
    updateCustomTab,
    deleteCustomTab,
    // Brand overrides
    effectiveBrands,
    brandOverrides,
    updateBrandOverride,
    resetBrandOverride,
    resetAllBrandOverrides,
    defaultBrands,
    // Expose config objects
    THEMES,
    ACCENT_COLORS,
    FONT_SIZES,
    BORDER_RADIUS,
    TRANSITIONS,
    EFFECTS,
    DENSITY,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
