/* =========================================================
 * PROMISES.JS
 * Exemplos didáticos com Promise.all() e Promise.allSettled()
 * - Chamadas de API simultâneas com fetch
 * - Simulações com setTimeout e falhas controladas
 * ========================================================= */

/**
 * Utilitário para logar texto no container informado.
 * Mantém o histórico para facilitar comparação.
 */
function appendLog(el, message, cssClass = '') {
  const div = document.createElement('div');
  if (cssClass) div.classList.add(cssClass);
  div.textContent = message;
  el.appendChild(div);
}

/**
 * Limpa o conteúdo do container de log.
 */
function clearLog(el) {
  el.innerHTML = '';
}

/* ------------------- DEMO: Promise.all com APIs ------------------- */

const apiOut = document.getElementById('api-output');
const btnApiAll = document.getElementById('btn-api-all');
const btnApiFalha = document.getElementById('btn-api-falha');

// Endpoints de demonstração (JSONPlaceholder aceita CORS e é ótimo para testes)
const ENDPOINTS_OK = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/posts?userId=1',
];

// Simula uma falha alterando um dos endpoints para um caminho inválido
const ENDPOINTS_FALHA = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/postsss?userId=1', // <- rota inválida
];

/**
 * Busca múltiplos recursos em paralelo e falha se qualquer um falhar.
 * Demonstra Promise.all com checagem de status HTTP e parse JSON.
 */
async function fetchEssenciais(endpoints) {
  clearLog(apiOut);
  appendLog(apiOut, 'Disparando requisições em paralelo...');

  // Dispara as requisições sem aguardar (paralelismo)
  const requests = endpoints.map((url) => fetch(url));

  try {
    // Espera todas concluírem; se uma falhar, vai para o catch
    const responses = await Promise.all(requests);

    // Checa status HTTP (boa prática)
    responses.forEach((res, i) => {
      if (!res.ok) {
        throw new Error(`Falha HTTP em ${endpoints[i]} — status: ${res.status}`);
      }
    });

    // Faz o parse JSON também em paralelo
    const parsed = await Promise.all(responses.map((res) => res.json()));

    // Exibe resultados resumidos
    appendLog(apiOut, '✔ Todas as requisições concluíram com sucesso!', 'ok');
    appendLog(apiOut, `Usuário: ${parsed[0].name}`);
    appendLog(apiOut, `Qtd. de posts: ${parsed[1].length}`);

    return parsed;
  } catch (err) {
    appendLog(apiOut, `✖ Erro geral: ${err.message}`, 'err');
    return null;
  }
}

// Botões de ação
btnApiAll?.addEventListener('click', () => fetchEssenciais(ENDPOINTS_OK));
btnApiFalha?.addEventListener('click', () => fetchEssenciais(ENDPOINTS_FALHA));

/* ------------------- DEMO: setTimeout (all vs allSettled) ------------------- */

const timeoutAllOut = document.getElementById('timeout-all-output');
const timeoutSettledOut = document.getElementById('timeout-settled-output');
const btnTimeout = document.getElementById('btn-timeout-demo');

/**
 * Cria uma Promise que resolve ou rejeita após tempoMs.
 * Útil para simular tarefas assíncronas (I/O, rede, etc.).
 */
function tarefa(nome, tempoMs, deveFalhar = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (deveFalhar) {
        reject(new Error(`Tarefa ${nome} falhou`));
      } else {
        resolve(`Tarefa ${nome} concluída em ${tempoMs}ms`);
      }
    }, tempoMs);
  });
}

async function runTimeoutDemo() {
  clearLog(timeoutAllOut);
  clearLog(timeoutSettledOut);

  // Três tarefas em paralelo (B foi configurada para falhar)
  const p1 = tarefa('A', 500, false);
  const p2 = tarefa('B', 800, true);
  const p3 = tarefa('C', 300, false);

  // -------- Promise.all (tudo ou nada) --------
  try {
    const resultadosAll = await Promise.all([p1, p2, p3]);
    appendLog(timeoutAllOut, '✔ ALL (sucesso):', 'ok');
    resultadosAll.forEach((msg) => appendLog(timeoutAllOut, `- ${msg}`));
  } catch (e) {
    appendLog(timeoutAllOut, `✖ ALL (caiu no catch): ${e.message}`, 'err');
  }

  // -------- Promise.allSettled (relatório completo) --------
  const resultadosSettled = await Promise.allSettled([p1, p2, p3]);
  appendLog(timeoutSettledOut, 'Relatório ALLSETTLED:');
  resultadosSettled.forEach((item, idx) => {
    if (item.status === 'fulfilled') {
      appendLog(timeoutSettledOut, `#${idx + 1} ✔ ${item.value}`, 'ok');
    } else {
      appendLog(timeoutSettledOut, `#${idx + 1} ✖ ${item.reason.message}`, 'err');
    }
  });
}

btnTimeout?.addEventListener('click', runTimeoutDemo);
