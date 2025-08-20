/* ============================================================================
 * Helpers de UI
 * ==========================================================================*/
const $out = document.getElementById("output");
const log = (...args) => {
  const line = args.join(" ");
  $out.textContent += ( $out.textContent ? "\n" : "" ) + line;
  console.log("[LOG]", ...args);
};
const clearOutput = () => ($out.textContent = "");
document.getElementById("clearOutput").addEventListener("click", clearOutput);

/* ============================================================================
 * Armazenamento central de IDs para permitir "Parar todos os timers"
 * ==========================================================================*/
const timers = {
  timeouts: new Set(),
  intervals: new Set(),
};
function trackTimeout(id) { timers.timeouts.add(id); return id; }
function trackInterval(id) { timers.intervals.add(id); return id; }
function stopAllTimers() {
  timers.timeouts.forEach(clearTimeout);
  timers.intervals.forEach(clearInterval);
  timers.timeouts.clear();
  timers.intervals.clear();
  log("⏹️ Todos os timeouts e intervals foram cancelados.");
}
document.getElementById("stopAll").addEventListener("click", stopAllTimers);

/* ============================================================================
 * Exemplos da Aula
 * ==========================================================================*/

/**
 * Exemplo 1 — Mensagem com atraso (3s)
 * Conceito: setTimeout agenda uma função para rodar uma vez no futuro.
 */
function exemploTimeout() {
  log("⌛ Agendando mensagem para 3s…");
  const id = trackTimeout(setTimeout(() => {
    log("✅ Oi! Se passaram 3 segundos.");
  }, 3000));
  log("ID do timeout:", id);
}
document.getElementById("exTimeout").addEventListener("click", exemploTimeout);

/**
 * Exemplo 2 — Cancelando um setTimeout
 * Conceito: clearTimeout evita que a função agendada rode.
 */
function exemploTimeoutCancel() {
  log("⌛ Agendando mensagem para 2s (mas iremos CANCELAR)...");
  const id = trackTimeout(setTimeout(() => {
    log("❌ Isto não deveria aparecer (se cancelado a tempo).");
  }, 2000));

  // Cancelar antes de 2s
  trackTimeout(setTimeout(() => {
    clearTimeout(id);
    timers.timeouts.delete(id);
    log("🧹 Timeout cancelado com sucesso!");
  }, 800));
}
document.getElementById("exTimeoutCancel").addEventListener("click", exemploTimeoutCancel);

/**
 * Exemplo 3 — Intervalo que para em 5 execuções
 * Conceito: setInterval repete a função até chamarmos clearInterval.
 */
function exemploIntervalStop() {
  let segundos = 0;
  log("▶️ Iniciando intervalo que para no 5…");
  const intervalId = trackInterval(setInterval(() => {
    segundos++;
    log(`⏱️ Passou ${segundos} segundo(s).`);

    if (segundos === 5) {
      clearInterval(intervalId);
      timers.intervals.delete(intervalId);
      log("🛑 Cronômetro parado aos 5s.");
    }
  }, 1000));
}
document.getElementById("exIntervalStop").addEventListener("click", exemploIntervalStop);

/**
 * Exemplo 4 — Intervalo anti-drift (mais preciso)
 * Conceito: usar setTimeout recursivo e compensar atrasos com Date.now()
 */
function exemploAntiDrift() {
  log("🎯 Iniciando 'intervalo' anti-drift (1s) por 5 execuções…");
  const periodo = 1000; // 1 segundo
  let proximaExecucao = Date.now() + periodo;
  let execucoes = 0;
  const max = 5;

  function tick() {
    execucoes++;
    const agora = new Date().toLocaleTimeString();
    log(`Tick #${execucoes} em ${agora}`);

    if (execucoes >= max) {
      log("✅ Finalizado anti-drift.");
      return;
    }

    proximaExecucao += periodo;
    const atraso = proximaExecucao - Date.now();

    // Agendar próxima rodada compensando atrasos
    trackTimeout(setTimeout(tick, Math.max(0, atraso)));
  }

  // Disparo inicial
  trackTimeout(setTimeout(tick, periodo));
}
document.getElementById("exAntiDrift").addEventListener("click", exemploAntiDrift);

/* ============================================================================
 * Exercícios Resolvidos
 * ==========================================================================*/

/**
 * Exercício 1 — Mensagem atrasada (2s)
 * Requisito: exibir "Hora de estudar JavaScript!" após 2 segundos.
 */
function exMensagem2s() {
  log("📚 Exercício 1: agendando mensagem para 2s…");
  trackTimeout(setTimeout(() => {
    log("🎓 Hora de estudar JavaScript!");
  }, 2000));
}
document.getElementById("exMsg2s").addEventListener("click", exMensagem2s);

/**
 * Exercício 2 — Contagem regressiva (10 → 0)
 * Requisito: contar de 10 até 0, exibir "Fim!" e parar.
 */
function exContagemRegressiva() {
  let n = 10;
  log("🔻 Exercício 2: iniciando contagem regressiva 10 → 0…");
  const id = trackInterval(setInterval(() => {
    log(`Contagem: ${n}`);
    n--;
    if (n < 0) {
      clearInterval(id);
      timers.intervals.delete(id);
      log("🏁 Fim!");
    }
  }, 1000));
}
document.getElementById("exCountdown").addEventListener("click", exContagemRegressiva);

/**
 * Exercício 3 — Texto piscante (1s)
 * Requisito: alternar mostrar/ocultar a cada 1s.
 * Implementação: alternamos entre adicionar/remover um marcador no output.
 */
function exTextoPiscante() {
  log("✨ Exercício 3: iniciando texto piscante (1s). Use 'Parar todos' para interromper.");
  let visivel = true;
  const id = trackInterval(setInterval(() => {
    visivel = !visivel;
    const marker = visivel ? "🔆 [VISÍVEL]" : "🌑[OCULTO]";
    log(`Piscando… ${marker}`);
  }, 1000));
}
document.getElementById("exBlink").addEventListener("click", exTextoPiscante);

/* ============================================================================
 * Qualquer dúvida, veja os comentários em cada função acima.
 * ==========================================================================*/
