/* =========================================================
 * LOCALSTORAGE.JS
 * Persistência de formulário (rascunho) usando LocalStorage:
 * - Restaura valores ao carregar a página
 * - Salva a cada digitação/alteração
 * - Envio simulado + limpeza de rascunho
 * - Botões "Limpar" e "Exportar .json"
 * ========================================================= */

const FORM_KEY = 'newsletter_draft';

// Referências aos elementos do formulário
const form = document.getElementById('newsletter');
const nomeEl = document.getElementById('nome');
const emailEl = document.getElementById('email');
const optinEl = document.getElementById('optin');
const limparBtn = document.getElementById('limpar');
const exportarBtn = document.getElementById('exportar');
const formLog = document.getElementById('form-log');

/**
 * Log auxiliar para o bloco do formulário
 */
function logForm(message, cssClass = '') {
  const div = document.createElement('div');
  if (cssClass) div.classList.add(cssClass);
  div.textContent = message;
  formLog.appendChild(div);
}

/**
 * Lê o rascunho salvo no LocalStorage (ou retorna objeto vazio).
 */
function readDraft() {
  try {
    const raw = localStorage.getItem(FORM_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    // Em caso de JSON inválido, limpamos e devolvemos objeto vazio
    localStorage.removeItem(FORM_KEY);
    return {};
  }
}

/**
 * Salva o estado atual do formulário no LocalStorage.
 */
function saveDraft() {
  const draft = {
    nome: (nomeEl.value || '').trim(),
    email: (emailEl.value || '').trim(),
    optin: !!optinEl.checked,
  };
  localStorage.setItem(FORM_KEY, JSON.stringify(draft));
  logForm('💾 Rascunho salvo.', 'ok');
}

/**
 * Restaura valores do rascunho no formulário.
 */
function restoreDraft() {
  const data = readDraft();
  nomeEl.value = data.nome ?? '';
  emailEl.value = data.email ?? '';
  optinEl.checked = !!data.optin;

  if (Object.keys(data).length) {
    logForm('↩ Rascunho restaurado do LocalStorage.');
  } else {
    logForm('Nenhum rascunho encontrado (primeiro uso).');
  }
}

/**
 * Exporta o rascunho atual como arquivo .json (download).
 */
function exportDraft() {
  const data = readDraft();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'newsletter_draft.json';
  a.click();

  URL.revokeObjectURL(url);
  logForm('⬇ Rascunho exportado como JSON.');
}

/* ------------------- EVENTOS ------------------- */

// Restaura ao carregar a página
document.addEventListener('DOMContentLoaded', restoreDraft);

// Salva automaticamente a cada alteração
[nomeEl, emailEl].forEach((el) => {
  el?.addEventListener('input', saveDraft);
});
optinEl?.addEventListener('change', saveDraft);

// Envio simulado + limpeza de rascunho
form?.addEventListener('submit', (e) => {
  e.preventDefault();

  // Aqui entraria o fetch real para sua API
  // fetch('/api/newsletter', { method: 'POST', body: ... })

  logForm('✅ Formulário enviado (simulado).', 'ok');
  localStorage.removeItem(FORM_KEY);
  form.reset();
});

// Limpar manualmente o rascunho
limparBtn?.addEventListener('click', () => {
  localStorage.removeItem(FORM_KEY);
  form.reset();
  logForm('🧹 Rascunho limpo manualmente.');
});

// Exportar rascunho como .json
exportarBtn?.addEventListener('click', exportDraft);

/**
 * (Opcional) Sincronização entre abas do mesmo domínio:
 * Se você abrir duas abas, alterar o rascunho em uma,
 * a outra recebe o evento e pode se atualizar.
 */
window.addEventListener('storage', (e) => {
  if (e.key === FORM_KEY) {
    logForm('🔄 Detected storage update em outra aba; atualizando...');
    restoreDraft();
  }
});
