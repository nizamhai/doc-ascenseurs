import { useState, useRef, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  Mic, MicOff, X, Send, Volume2, VolumeX,
  Sparkles, ChevronDown, ChevronUp, ExternalLink,
  RotateCcw, Loader2
} from 'lucide-react'
import { aiQuery, speak, stopSpeaking } from '../utils/aiSearch'

const EXAMPLES = [
  'Code 0021 Kone',
  'Défaut frein Schindler',
  'Tous les codes Otis',
  'Erreur contacteur Autinor',
]

function Message({ msg }) {
  const [open, setOpen] = useState(true)
  if (msg.role === 'user') {
    return (
      <div className="flex justify-end mb-3">
        <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-br-sm text-sm font-medium text-white"
          style={{ background: 'var(--accent-color)' }}>
          {msg.text}
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-start mb-3">
      <div className="max-w-[90%] w-full space-y-2">
        {/* AI bubble */}
        <div className="px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm text-[var(--text-secondary)] leading-relaxed"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
          <div className="flex items-start gap-2">
            <Sparkles className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: 'var(--accent-color)' }} />
            <p className="whitespace-pre-line">{msg.text}</p>
          </div>
        </div>

        {/* Results */}
        {msg.results && msg.results.length > 0 && (
          <div className="rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border-color)' }}>
            <button
              onClick={() => setOpen(o => !o)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-[var(--text-muted)]"
              style={{ background: 'var(--bg-secondary)' }}
            >
              <span>{msg.results.length} résultat{msg.results.length > 1 ? 's' : ''}</span>
              {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {open && (
              <div className="divide-y" style={{ divideColor: 'var(--border-color)', background: 'var(--bg-primary)' }}>
                {msg.results.map((r, i) => (
                  <Link
                    key={i}
                    to={`/doc/${r.docSlug}`}
                    className="flex items-start gap-3 px-3 py-2.5 hover:bg-[var(--bg-tertiary)] transition-colors group"
                  >
                    <span className="shrink-0 min-w-[44px] text-center text-[11px] font-bold font-mono px-1.5 py-0.5 rounded"
                      style={{ background: 'hsl(var(--accent-hue) 70% 50% / 0.15)', color: 'var(--accent-color)' }}>
                      {r.code}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-[var(--text-primary)] truncate">{r.label}</p>
                      <p className="text-[10px] text-[var(--text-muted)] truncate">{r.brand} — {r.docTitle}</p>
                    </div>
                    <ExternalLink className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-60 text-[var(--text-muted)] mt-1" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function VoiceAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{
    role: 'ai',
    text: 'Bonjour ! Posez-moi une question sur les codes défauts — par voix ou par texte.\n\nExemples : "Code 0021 Kone", "Défaut frein Schindler"',
    results: [],
  }])
  const [input, setInput] = useState('')
  const [listening, setListening] = useState(false)
  const [ttsEnabled, setTtsEnabled] = useState(true)
  const [thinking, setThinking] = useState(false)
  const [interim, setInterim] = useState('')
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const recogRef = useRef(null)

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

  // Cleanup speech on unmount
  useEffect(() => () => {
    stopSpeaking()
    recogRef.current?.stop()
  }, [])

  const sendQuery = useCallback((text) => {
    if (!text.trim()) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text }])
    setThinking(true)

    setTimeout(() => {
      const res = aiQuery(text)
      setMessages(prev => [...prev, { role: 'ai', text: res.text, results: res.results }])
      setThinking(false)
      if (ttsEnabled) speak(res.text)
    }, 300)
  }, [ttsEnabled])

  const startListening = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setMessages(prev => [...prev, {
        role: 'ai',
        text: 'La reconnaissance vocale n\'est pas supportée par votre navigateur. Utilisez Chrome ou Edge.',
        results: [],
      }])
      return
    }

    stopSpeaking()
    const recog = new SpeechRecognition()
    recog.lang = 'fr-FR'
    recog.continuous = false
    recog.interimResults = true

    recog.onstart = () => setListening(true)
    recog.onend = () => { setListening(false); setInterim('') }
    recog.onerror = () => { setListening(false); setInterim('') }

    recog.onresult = (e) => {
      let final = '', interimText = ''
      for (const r of e.results) {
        if (r.isFinal) final += r[0].transcript
        else interimText += r[0].transcript
      }
      if (interimText) setInterim(interimText)
      if (final) {
        setInterim('')
        sendQuery(final)
      }
    }

    recogRef.current = recog
    recog.start()
  }, [sendQuery])

  const stopListening = useCallback(() => {
    recogRef.current?.stop()
    setListening(false)
    setInterim('')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    sendQuery(input)
  }

  const clearChat = () => {
    stopSpeaking()
    setMessages([{
      role: 'ai',
      text: 'Conversation effacée. Posez votre nouvelle question !',
      results: [],
    }])
  }

  return (
    <>
      {/* Floating buttons group */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* Mic button — always visible */}
        <button
          onMouseDown={startListening}
          onMouseUp={stopListening}
          onTouchStart={startListening}
          onTouchEnd={stopListening}
          onClick={() => { setOpen(true); if (!listening) startListening() }}
          className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 relative"
          style={{
            background: listening ? '#ef4444' : '#16a34a',
            boxShadow: listening
              ? '0 8px 32px rgba(239,68,68,0.6)'
              : '0 8px 32px rgba(22,163,74,0.5)',
          }}
          title="Appuyer pour parler à l'assistant IA"
        >
          {listening
            ? <MicOff className="w-6 h-6 text-white" />
            : <Mic className="w-6 h-6 text-white" />
          }
          {listening && (
            <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-40" />
          )}
        </button>

        {/* Labels */}
        <div className="flex flex-col items-end gap-1 pr-1">
          <span className="text-[10px] font-semibold text-white px-2 py-0.5 rounded-full shadow" style={{ background: 'rgba(0,0,0,0.55)' }}>
            {listening ? 'Écoute…' : 'Parler'}
          </span>
        </div>

        {/* Chat toggle button */}
        <button
          onClick={() => { setOpen(o => !o); if (open) stopSpeaking() }}
          className="w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          style={{ background: 'var(--accent-color)', boxShadow: '0 8px 24px hsl(var(--accent-hue) 70% 40% / 0.5)' }}
          title="Assistant IA — Chat"
        >
          {open ? <X className="w-5 h-5 text-white" /> : <Sparkles className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-36 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            maxHeight: '75vh',
            boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b shrink-0" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--accent-hue) 70% 50% / 0.2)' }}>
                <Sparkles className="w-4 h-4" style={{ color: 'var(--accent-color)' }} />
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--text-primary)]">Assistant IA</p>
                <p className="text-[10px] text-[var(--text-muted)]">Codes défauts ascenseurs</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => { setTtsEnabled(v => !v); if (ttsEnabled) stopSpeaking() }}
                className="p-1.5 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-muted)] transition-colors"
                title={ttsEnabled ? 'Désactiver la voix' : 'Activer la voix'}
              >
                {ttsEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button onClick={clearChat} className="p-1.5 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-muted)] transition-colors" title="Effacer">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
            {messages.map((msg, i) => <Message key={i} msg={msg} />)}

            {/* Interim transcript */}
            {interim && (
              <div className="flex justify-end mb-2">
                <div className="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm italic opacity-60"
                  style={{ background: 'var(--accent-color)', color: 'white' }}>
                  {interim}…
                </div>
              </div>
            )}

            {/* Thinking indicator */}
            {thinking && (
              <div className="flex justify-start mb-2">
                <div className="px-4 py-2.5 rounded-2xl rounded-bl-sm flex items-center gap-2"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" style={{ color: 'var(--accent-color)' }} />
                  <span className="text-xs text-[var(--text-muted)]">Recherche…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Example chips (shown when only 1 msg) */}
          {messages.length <= 1 && (
            <div className="px-3 pb-2 flex flex-wrap gap-1.5 shrink-0">
              {EXAMPLES.map(ex => (
                <button
                  key={ex}
                  onClick={() => sendQuery(ex)}
                  className="text-[11px] px-2.5 py-1 rounded-full border transition-colors hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
                  style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
                >
                  {ex}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3 border-t shrink-0" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={listening ? 'Écoute en cours…' : 'Posez votre question…'}
              disabled={listening}
              className="flex-1 text-sm px-3 py-2 rounded-xl outline-none transition-all"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
              }}
            />

            {/* Mic button */}
            <button
              type="button"
              onMouseDown={startListening}
              onMouseUp={stopListening}
              onTouchStart={startListening}
              onTouchEnd={stopListening}
              onClick={() => !listening && startListening()}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0"
              style={{
                background: listening
                  ? 'rgba(239,68,68,0.15)'
                  : 'hsl(var(--accent-hue) 70% 50% / 0.1)',
                border: `1px solid ${listening ? 'rgba(239,68,68,0.4)' : 'var(--border-color)'}`,
                color: listening ? '#ef4444' : 'var(--text-secondary)',
              }}
              title="Appuyer pour parler"
            >
              {listening
                ? <span className="w-3.5 h-3.5 bg-red-500 rounded-full animate-pulse" />
                : <Mic className="w-4 h-4" />
              }
            </button>

            {/* Send */}
            <button
              type="submit"
              disabled={!input.trim() || listening}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0 disabled:opacity-40"
              style={{ background: 'var(--accent-color)' }}
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
