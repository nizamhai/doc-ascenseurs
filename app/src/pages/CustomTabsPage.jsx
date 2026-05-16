import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import {
  Plus, Trash2, Edit3, Save, X, FileText, FolderPlus, ChevronRight,
  MessageSquare, File, AlertCircle, CheckCircle
} from 'lucide-react';

function CreateTabModal({ onClose, onSave }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#3b82f6');

  const handleSave = () => {
    if (!name.trim()) return;
    onSave({ name: name.trim(), description: description.trim(), color, entries: [] });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'var(--overlay)' }}>
      <div className="card-surface w-full max-w-md p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[var(--text-primary)]">Nouvel onglet</h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-[var(--bg-tertiary)]">
            <X className="w-5 h-5 text-[var(--text-muted)]" />
          </button>
        </div>
        <div className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom de l'onglet..."
            className="input-field w-full text-sm"
            autoFocus
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optionnel)..."
            className="input-field w-full text-sm resize-none h-20"
          />
          <div>
            <label className="text-xs text-[var(--text-muted)] mb-1 block">Couleur</label>
            <div className="flex gap-2">
              {['#3b82f6','#10b981','#8b5cf6','#f43f5e','#f59e0b','#06b6d4','#ef4444','#f97316'].map(c => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-7 h-7 rounded-full border-2 transition-all ${color === c ? 'border-white scale-110' : 'border-transparent'}`}
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-end pt-2">
          <button onClick={onClose} className="btn-secondary text-sm">Annuler</button>
          <button onClick={handleSave} className="btn-primary text-sm" disabled={!name.trim()}>
            <Save className="w-4 h-4" />
            Créer
          </button>
        </div>
      </div>
    </div>
  );
}

function AddEntryModal({ onClose, onSave }) {
  const [code, setCode] = useState('');
  const [label, setLabel] = useState('');
  const [comment, setComment] = useState('');
  const [type, setType] = useState('code');

  const handleSave = () => {
    if (!label.trim()) return;
    onSave({ code: code.trim(), label: label.trim(), comment: comment.trim(), type, id: Date.now().toString() });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'var(--overlay)' }}>
      <div className="card-surface w-full max-w-md p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[var(--text-primary)]">Ajouter une entrée</h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-[var(--bg-tertiary)]">
            <X className="w-5 h-5 text-[var(--text-muted)]" />
          </button>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2">
            {[
              { id: 'code', label: 'Code erreur', icon: AlertCircle },
              { id: 'note', label: 'Commentaire', icon: MessageSquare },
              { id: 'pdf', label: 'Lien PDF', icon: File },
            ].map(t => (
              <button
                key={t.id}
                onClick={() => setType(t.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border text-xs font-medium transition-all ${
                  type === t.id
                    ? 'border-[var(--accent-color)] bg-[hsl(var(--accent-hue)_70%_50%/0.1)] text-[var(--text-primary)]'
                    : 'border-[var(--border-color)] text-[var(--text-tertiary)] hover:border-[var(--border-hover)]'
                }`}
              >
                <t.icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            ))}
          </div>
          {type === 'code' && (
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code (ex: E01, 42, F3)..."
              className="input-field w-full text-sm"
            />
          )}
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder={type === 'pdf' ? 'URL ou nom du fichier PDF...' : type === 'note' ? 'Titre du commentaire...' : 'Description du défaut...'}
            className="input-field w-full text-sm"
            autoFocus
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Commentaire ou notes supplémentaires..."
            className="input-field w-full text-sm resize-none h-20"
          />
        </div>
        <div className="flex gap-2 justify-end pt-2">
          <button onClick={onClose} className="btn-secondary text-sm">Annuler</button>
          <button onClick={handleSave} className="btn-primary text-sm" disabled={!label.trim()}>
            <Plus className="w-4 h-4" />
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CustomTabsPage() {
  const { customTabs, addCustomTab, updateCustomTab, deleteCustomTab } = useTheme();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [showEntryModal, setShowEntryModal] = useState(false);

  const activeTab = customTabs.find(t => t.id === selectedTab);

  const handleAddEntry = (entry) => {
    if (!activeTab) return;
    updateCustomTab(activeTab.id, { entries: [...(activeTab.entries || []), entry] });
  };

  const handleDeleteEntry = (entryId) => {
    if (!activeTab) return;
    updateCustomTab(activeTab.id, { entries: activeTab.entries.filter(e => e.id !== entryId) });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] flex items-center gap-3">
            <FolderPlus className="w-7 h-7" style={{ color: 'var(--accent-color)' }} />
            Mes Onglets
          </h1>
          <p className="text-[var(--text-tertiary)] mt-1">Créez vos propres fiches de codes erreur et notes</p>
        </div>
        <button onClick={() => setShowCreateModal(true)} className="btn-primary text-sm">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Nouvel onglet</span>
        </button>
      </div>

      {customTabs.length === 0 ? (
        /* Empty State */
        <div className="card-surface p-12 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 text-[var(--text-muted)]" />
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Aucun onglet personnalisé</h3>
          <p className="text-[var(--text-tertiary)] mb-6 max-w-md mx-auto">
            Créez des onglets pour organiser vos propres codes erreur, commentaires et documents PDF.
          </p>
          <button onClick={() => setShowCreateModal(true)} className="btn-primary">
            <Plus className="w-5 h-5" />
            Créer mon premier onglet
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Tab List */}
          <div className="space-y-2">
            {customTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${
                  selectedTab === tab.id
                    ? 'border-[var(--accent-color)] bg-[hsl(var(--accent-hue)_70%_50%/0.08)]'
                    : 'border-[var(--border-color)] hover:border-[var(--border-hover)] bg-[var(--bg-secondary)]'
                }`}
              >
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: tab.color }} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-[var(--text-primary)] truncate">{tab.name}</p>
                  <p className="text-xs text-[var(--text-muted)] truncate">{(tab.entries || []).length} entrées</p>
                </div>
                <ChevronRight className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0" />
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab ? (
            <div className="card-surface p-5 md:p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 rounded-full" style={{ background: activeTab.color }} />
                  <div>
                    <h2 className="text-lg font-bold text-[var(--text-primary)]">{activeTab.name}</h2>
                    {activeTab.description && <p className="text-sm text-[var(--text-tertiary)]">{activeTab.description}</p>}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setShowEntryModal(true)} className="btn-secondary text-xs">
                    <Plus className="w-3.5 h-3.5" />
                    Ajouter
                  </button>
                  <button
                    onClick={() => { deleteCustomTab(activeTab.id); setSelectedTab(null); }}
                    className="p-2 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors"
                    title="Supprimer l'onglet"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {(activeTab.entries || []).length === 0 ? (
                <div className="text-center py-12 text-[var(--text-muted)]">
                  <p className="mb-3">Aucune entrée dans cet onglet</p>
                  <button onClick={() => setShowEntryModal(true)} className="btn-primary text-sm">
                    <Plus className="w-4 h-4" />
                    Ajouter une entrée
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  {(activeTab.entries || []).map(entry => (
                    <div key={entry.id} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-color)] group">
                      {entry.type === 'code' && entry.code && (
                        <span className="px-2 py-0.5 text-xs font-mono font-bold rounded bg-[hsl(var(--accent-hue)_70%_50%/0.2)] text-[var(--accent-color)] flex-shrink-0 mt-0.5">
                          {entry.code}
                        </span>
                      )}
                      {entry.type === 'note' && <MessageSquare className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />}
                      {entry.type === 'pdf' && <File className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[var(--text-primary)]">{entry.label}</p>
                        {entry.comment && <p className="text-xs text-[var(--text-tertiary)] mt-0.5">{entry.comment}</p>}
                      </div>
                      <button
                        onClick={() => handleDeleteEntry(entry.id)}
                        className="p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-red-500/10 text-red-400 transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="card-surface p-12 text-center text-[var(--text-muted)]">
              <p>Sélectionnez un onglet pour voir son contenu</p>
            </div>
          )}
        </div>
      )}

      {showCreateModal && <CreateTabModal onClose={() => setShowCreateModal(false)} onSave={addCustomTab} />}
      {showEntryModal && <AddEntryModal onClose={() => setShowEntryModal(false)} onSave={handleAddEntry} />}
    </div>
  );
}
