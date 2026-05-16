import { useState, useCallback } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import {
  Settings, Palette, Type, Square, Zap, Layers, Eye, RotateCcw,
  Sun, Moon, Monitor, Contrast, Sparkles, Box, Waves, Minus,
  ChevronDown, ChevronRight, Check, ArrowUp, ArrowDown,
  Pencil, FolderOpen, GripVertical, RotateCcw as Undo, Save, X,
  ArrowLeftRight, Trash2
} from 'lucide-react';

function SettingSection({ title, icon: Icon, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="card-surface overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 md:p-5 hover:bg-[var(--bg-tertiary)] transition-colors"
      >
        <div className="w-9 h-9 rounded-lg bg-[hsl(var(--accent-hue)_70%_50%/0.15)] flex items-center justify-center">
          <Icon className="w-4 h-4" style={{ color: 'var(--accent-color)' }} />
        </div>
        <span className="font-semibold text-[var(--text-primary)] flex-1 text-left">{title}</span>
        {open ? <ChevronDown className="w-4 h-4 text-[var(--text-muted)]" /> : <ChevronRight className="w-4 h-4 text-[var(--text-muted)]" />}
      </button>
      {open && <div className="px-4 pb-5 md:px-5 space-y-4">{children}</div>}
    </div>
  );
}

function OptionGrid({ children }) {
  return <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">{children}</div>;
}

function OptionButton({ selected, onClick, children, color }) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all ${
        selected
          ? 'border-[var(--accent-color)] bg-[hsl(var(--accent-hue)_70%_50%/0.1)] text-[var(--text-primary)]'
          : 'border-[var(--border-color)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]'
      }`}
    >
      {color && (
        <span className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: color }} />
      )}
      <span className="truncate">{children}</span>
      {selected && <Check className="w-3.5 h-3.5 flex-shrink-0 ml-auto" style={{ color: 'var(--accent-color)' }} />}
    </button>
  );
}

function ToggleSwitch({ checked, onChange, label }) {
  return (
    <label className="flex items-center justify-between py-2 cursor-pointer group">
      <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full transition-colors ${
          checked ? 'bg-[var(--accent-color)]' : 'bg-[var(--bg-tertiary)] border border-[var(--border-color)]'
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </label>
  );
}

function ContentManager() {
  const {
    effectiveBrands, defaultBrands, updateBrandOverride, resetBrandOverride, brandOverrides
  } = useTheme();

  const [selectedBrand, setSelectedBrand] = useState(effectiveBrands[0]?.id || '');
  const [editingDoc, setEditingDoc] = useState(null); // { catIdx, docIdx }
  const [editingCat, setEditingCat] = useState(null); // catIdx
  const [editTitle, setEditTitle] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editCatName, setEditCatName] = useState('');
  const [movingDoc, setMovingDoc] = useState(null); // { catIdx, docIdx }

  const brand = effectiveBrands.find(b => b.id === selectedBrand);
  const originalBrand = defaultBrands.find(b => b.id === selectedBrand);
  const hasOverrides = !!brandOverrides[selectedBrand];

  const getCategories = () => {
    if (!brand) return [];
    return JSON.parse(JSON.stringify(brand.categories));
  };

  const saveCategories = (cats) => {
    updateBrandOverride(selectedBrand, cats);
  };

  // Move doc up/down
  const moveDoc = (catIdx, docIdx, direction) => {
    const cats = getCategories();
    const docs = cats[catIdx].docs;
    const newIdx = docIdx + direction;
    if (newIdx < 0 || newIdx >= docs.length) return;
    [docs[docIdx], docs[newIdx]] = [docs[newIdx], docs[docIdx]];
    saveCategories(cats);
  };

  // Move doc to another category
  const moveDocToCategory = (fromCatIdx, docIdx, toCatIdx) => {
    const cats = getCategories();
    const [doc] = cats[fromCatIdx].docs.splice(docIdx, 1);
    cats[toCatIdx].docs.push(doc);
    saveCategories(cats);
    setMovingDoc(null);
  };

  // Move category up/down
  const moveCategory = (catIdx, direction) => {
    const cats = getCategories();
    const newIdx = catIdx + direction;
    if (newIdx < 0 || newIdx >= cats.length) return;
    [cats[catIdx], cats[newIdx]] = [cats[newIdx], cats[catIdx]];
    saveCategories(cats);
  };

  // Start editing doc
  const startEditDoc = (catIdx, docIdx) => {
    const doc = brand.categories[catIdx].docs[docIdx];
    setEditingDoc({ catIdx, docIdx });
    setEditTitle(doc.title);
    setEditDesc(doc.description);
  };

  // Save doc edit
  const saveEditDoc = () => {
    if (!editingDoc) return;
    const cats = getCategories();
    const doc = cats[editingDoc.catIdx].docs[editingDoc.docIdx];
    doc.title = editTitle.trim() || doc.title;
    doc.description = editDesc.trim() || doc.description;
    saveCategories(cats);
    setEditingDoc(null);
  };

  // Start editing category name
  const startEditCat = (catIdx) => {
    setEditingCat(catIdx);
    setEditCatName(brand.categories[catIdx].name);
  };

  // Save category name
  const saveEditCat = () => {
    if (editingCat === null) return;
    const cats = getCategories();
    cats[editingCat].name = editCatName.trim() || cats[editingCat].name;
    saveCategories(cats);
    setEditingCat(null);
  };

  if (!brand) return null;

  return (
    <div className="space-y-4">
      {/* Brand selector */}
      <div className="flex flex-wrap gap-1.5">
        {effectiveBrands.map(b => (
          <button
            key={b.id}
            onClick={() => { setSelectedBrand(b.id); setEditingDoc(null); setEditingCat(null); setMovingDoc(null); }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
              selectedBrand === b.id
                ? 'border-[var(--accent-color)] bg-[hsl(var(--accent-hue)_70%_50%/0.1)] text-[var(--text-primary)]'
                : 'border-[var(--border-color)] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:border-[var(--border-hover)]'
            }`}
          >
            {b.name}
          </button>
        ))}
      </div>

      {/* Reset button */}
      {hasOverrides && (
        <button
          onClick={() => resetBrandOverride(selectedBrand)}
          className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors"
        >
          <Undo className="w-3.5 h-3.5" />
          Réinitialiser {brand.name} (annuler les modifications)
        </button>
      )}

      {/* Categories and docs */}
      <div className="space-y-3">
        {brand.categories.map((cat, catIdx) => (
          <div key={catIdx} className="rounded-lg border overflow-hidden" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}>
            {/* Category header */}
            <div className="flex items-center gap-2 px-3 py-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-1">
                <button onClick={() => moveCategory(catIdx, -1)} disabled={catIdx === 0}
                  className="p-1 rounded hover:bg-[var(--bg-card)] disabled:opacity-20 transition-colors" title="Monter">
                  <ArrowUp className="w-3 h-3 text-[var(--text-muted)]" />
                </button>
                <button onClick={() => moveCategory(catIdx, 1)} disabled={catIdx === brand.categories.length - 1}
                  className="p-1 rounded hover:bg-[var(--bg-card)] disabled:opacity-20 transition-colors" title="Descendre">
                  <ArrowDown className="w-3 h-3 text-[var(--text-muted)]" />
                </button>
              </div>

              {editingCat === catIdx ? (
                <div className="flex items-center gap-2 flex-1">
                  <input
                    value={editCatName}
                    onChange={e => setEditCatName(e.target.value)}
                    className="input-field text-xs py-1 px-2 flex-1"
                    autoFocus
                    onKeyDown={e => { if (e.key === 'Enter') saveEditCat(); if (e.key === 'Escape') setEditingCat(null); }}
                  />
                  <button onClick={saveEditCat} className="p-1 rounded hover:bg-emerald-500/20 text-emerald-400"><Save className="w-3.5 h-3.5" /></button>
                  <button onClick={() => setEditingCat(null)} className="p-1 rounded hover:bg-red-500/20 text-red-400"><X className="w-3.5 h-3.5" /></button>
                </div>
              ) : (
                <>
                  <FolderOpen className="w-3.5 h-3.5" style={{ color: 'var(--accent-color)' }} />
                  <span className="text-xs font-bold text-[var(--text-primary)] flex-1">{cat.name}</span>
                  <span className="text-[10px] text-[var(--text-muted)] px-1.5 py-0.5 rounded-full" style={{ background: 'var(--bg-card)' }}>{cat.docs.length}</span>
                  <button onClick={() => startEditCat(catIdx)} className="p-1 rounded hover:bg-[var(--bg-card)] transition-colors" title="Renommer">
                    <Pencil className="w-3 h-3 text-[var(--text-muted)]" />
                  </button>
                </>
              )}
            </div>

            {/* Docs list */}
            <div className="divide-y" style={{ borderColor: 'var(--border-color)' }}>
              {cat.docs.map((doc, docIdx) => (
                <div key={docIdx} className="flex items-center gap-2 px-3 py-2 hover:bg-[var(--bg-card)] transition-colors group">
                  {/* Move arrows */}
                  <div className="flex flex-col gap-0.5">
                    <button onClick={() => moveDoc(catIdx, docIdx, -1)} disabled={docIdx === 0}
                      className="p-0.5 rounded hover:bg-[var(--bg-tertiary)] disabled:opacity-20 transition-colors">
                      <ArrowUp className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                    <button onClick={() => moveDoc(catIdx, docIdx, 1)} disabled={docIdx === cat.docs.length - 1}
                      className="p-0.5 rounded hover:bg-[var(--bg-tertiary)] disabled:opacity-20 transition-colors">
                      <ArrowDown className="w-3 h-3 text-[var(--text-muted)]" />
                    </button>
                  </div>

                  {/* Doc info or edit form */}
                  {editingDoc?.catIdx === catIdx && editingDoc?.docIdx === docIdx ? (
                    <div className="flex-1 space-y-1.5">
                      <input
                        value={editTitle}
                        onChange={e => setEditTitle(e.target.value)}
                        className="input-field text-xs py-1 px-2 w-full"
                        placeholder="Titre"
                        autoFocus
                        onKeyDown={e => { if (e.key === 'Enter') saveEditDoc(); if (e.key === 'Escape') setEditingDoc(null); }}
                      />
                      <input
                        value={editDesc}
                        onChange={e => setEditDesc(e.target.value)}
                        className="input-field text-xs py-1 px-2 w-full"
                        placeholder="Description"
                        onKeyDown={e => { if (e.key === 'Enter') saveEditDoc(); if (e.key === 'Escape') setEditingDoc(null); }}
                      />
                      <div className="flex gap-1.5">
                        <button onClick={saveEditDoc} className="flex items-center gap-1 text-[10px] px-2 py-1 rounded bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/25 transition-colors">
                          <Save className="w-3 h-3" /> Sauver
                        </button>
                        <button onClick={() => setEditingDoc(null)} className="flex items-center gap-1 text-[10px] px-2 py-1 rounded bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors">
                          <X className="w-3 h-3" /> Annuler
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-[var(--text-primary)] truncate">{doc.title}</p>
                      <p className="text-[10px] text-[var(--text-muted)] truncate">{doc.description}</p>
                    </div>
                  )}

                  {/* Action buttons */}
                  {!(editingDoc?.catIdx === catIdx && editingDoc?.docIdx === docIdx) && (
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => startEditDoc(catIdx, docIdx)}
                        className="p-1 rounded hover:bg-[var(--bg-tertiary)] transition-colors" title="Renommer">
                        <Pencil className="w-3 h-3 text-[var(--text-muted)]" />
                      </button>
                      {brand.categories.length > 1 && (
                        movingDoc?.catIdx === catIdx && movingDoc?.docIdx === docIdx ? (
                          <div className="flex items-center gap-1 bg-[var(--bg-card)] rounded-lg p-1 border" style={{ borderColor: 'var(--border-color)' }}>
                            {brand.categories.map((targetCat, tIdx) => tIdx !== catIdx && (
                              <button key={tIdx} onClick={() => moveDocToCategory(catIdx, docIdx, tIdx)}
                                className="text-[9px] px-2 py-1 rounded bg-[hsl(var(--accent-hue)_70%_50%/0.1)] text-[var(--accent-color)] hover:bg-[hsl(var(--accent-hue)_70%_50%/0.2)] transition-colors whitespace-nowrap">
                                {targetCat.name}
                              </button>
                            ))}
                            <button onClick={() => setMovingDoc(null)} className="p-0.5 rounded hover:bg-red-500/10 text-red-400">
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ) : (
                          <button onClick={() => setMovingDoc({ catIdx, docIdx })}
                            className="p-1 rounded hover:bg-[var(--bg-tertiary)] transition-colors" title="Déplacer vers...">
                            <ArrowLeftRight className="w-3 h-3 text-[var(--text-muted)]" />
                          </button>
                        )
                      )}
                    </div>
                  )}

                  {/* Type badge */}
                  <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded flex-shrink-0 ${
                    doc.internal
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : doc.type === 'pdf'
                        ? 'bg-red-500/10 text-red-400'
                        : 'bg-blue-500/10 text-blue-400'
                  }`}>
                    {doc.internal ? 'React' : doc.type?.toUpperCase() || 'HTML'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const {
    settings, updateSetting, resetSettings,
    THEMES, ACCENT_COLORS, FONT_SIZES, BORDER_RADIUS, TRANSITIONS, EFFECTS, DENSITY,
  } = useTheme();

  const themeIcons = { dark: Moon, light: Sun, midnight: Monitor, contrast: Contrast };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] flex items-center gap-3">
            <Settings className="w-7 h-7" style={{ color: 'var(--accent-color)' }} />
            Options
          </h1>
          <p className="text-[var(--text-tertiary)] mt-1">Personnalisez l'apparence et le comportement de l'application</p>
        </div>
        <button
          onClick={resetSettings}
          className="btn-secondary text-sm"
          title="Réinitialiser"
        >
          <RotateCcw className="w-4 h-4" />
          <span className="hidden sm:inline">Réinitialiser</span>
        </button>
      </div>

      <div className="space-y-4">
        {/* Theme */}
        <SettingSection title="Thème" icon={Palette}>
          <OptionGrid>
            {Object.values(THEMES).map(t => {
              const Icon = themeIcons[t.id] || Sun;
              return (
                <OptionButton key={t.id} selected={settings.theme === t.id} onClick={() => updateSetting('theme', t.id)}>
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {t.label}
                </OptionButton>
              );
            })}
          </OptionGrid>
        </SettingSection>

        {/* Accent Color */}
        <SettingSection title="Couleur d'accent" icon={Sparkles}>
          <OptionGrid>
            {Object.values(ACCENT_COLORS).map(c => (
              <OptionButton key={c.id} selected={settings.accentColor === c.id} onClick={() => updateSetting('accentColor', c.id)} color={c.color}>
                {c.label}
              </OptionButton>
            ))}
          </OptionGrid>
        </SettingSection>

        {/* Font Size */}
        <SettingSection title="Taille du texte" icon={Type}>
          <OptionGrid>
            {Object.values(FONT_SIZES).map(f => (
              <OptionButton key={f.id} selected={settings.fontSize === f.id} onClick={() => updateSetting('fontSize', f.id)}>
                {f.label}
              </OptionButton>
            ))}
          </OptionGrid>
        </SettingSection>

        {/* Border Radius */}
        <SettingSection title="Coins arrondis" icon={Square}>
          <OptionGrid>
            {Object.values(BORDER_RADIUS).map(b => (
              <OptionButton key={b.id} selected={settings.borderRadius === b.id} onClick={() => updateSetting('borderRadius', b.id)}>
                {b.label}
              </OptionButton>
            ))}
          </OptionGrid>
        </SettingSection>

        {/* Effects */}
        <SettingSection title="Effets visuels" icon={Layers}>
          <OptionGrid>
            {Object.values(EFFECTS).map(e => (
              <OptionButton key={e.id} selected={settings.effect === e.id} onClick={() => updateSetting('effect', e.id)}>
                {e.label}
              </OptionButton>
            ))}
          </OptionGrid>
        </SettingSection>

        {/* Transitions */}
        <SettingSection title="Vitesse de transition" icon={Zap}>
          <OptionGrid>
            {Object.values(TRANSITIONS).map(t => (
              <OptionButton key={t.id} selected={settings.transition === t.id} onClick={() => updateSetting('transition', t.id)}>
                {t.label}
              </OptionButton>
            ))}
          </OptionGrid>
        </SettingSection>

        {/* Density */}
        <SettingSection title="Densité d'affichage" icon={Box}>
          <OptionGrid>
            {Object.values(DENSITY).map(d => (
              <OptionButton key={d.id} selected={settings.density === d.id} onClick={() => updateSetting('density', d.id)}>
                {d.label}
              </OptionButton>
            ))}
          </OptionGrid>
        </SettingSection>

        {/* Toggles */}
        <SettingSection title="Accessibilité & Performance" icon={Eye}>
          <div className="space-y-1">
            <ToggleSwitch checked={settings.animations} onChange={(v) => updateSetting('animations', v)} label="Animations" />
            <ToggleSwitch checked={settings.blur} onChange={(v) => updateSetting('blur', v)} label="Effets de flou (backdrop-blur)" />
            <ToggleSwitch checked={settings.shadows} onChange={(v) => updateSetting('shadows', v)} label="Ombres portées" />
            <ToggleSwitch checked={settings.reducedMotion} onChange={(v) => updateSetting('reducedMotion', v)} label="Mouvement réduit (accessibilité)" />
          </div>
        </SettingSection>

        {/* Content Management */}
        <SettingSection title="Gestion du contenu" icon={FolderOpen} defaultOpen={false}>
          <p className="text-xs text-[var(--text-muted)] mb-3">
            Réorganisez, renommez et déplacez les documents et catégories de chaque marque. Les modifications sont sauvegardées localement.
          </p>
          <ContentManager />
        </SettingSection>
      </div>

      {/* Preview */}
      <div className="mt-8 card-surface p-6">
        <h3 className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-4">Aperçu</h3>
        <div className="space-y-4">
          <div className="glass-card-hover p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--accent-hue)_70%_50%/0.2)] flex items-center justify-center">
                <Waves className="w-5 h-5" style={{ color: 'var(--accent-color)' }} />
              </div>
              <div>
                <p className="font-semibold text-[var(--text-primary)]">Exemple de carte</p>
                <p className="text-sm text-[var(--text-tertiary)]">Aperçu des styles appliqués</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary text-sm">Bouton principal</button>
            <button className="btn-secondary text-sm">Bouton secondaire</button>
          </div>
          <input type="text" placeholder="Champ de saisie..." className="input-field w-full text-sm" readOnly />
        </div>
      </div>
    </div>
  );
}
