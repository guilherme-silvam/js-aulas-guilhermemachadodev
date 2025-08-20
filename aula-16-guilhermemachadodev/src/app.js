// ====================== Utilidades simples de tela ======================
const out = document.getElementById("output");
const log = (msg) => {
  out.textContent += (out.textContent ? "\n" : "") + msg;
};
document.getElementById("clear").onclick = () => (out.textContent = "");

// Guardar IDs para podermos cancelar depois (com um botão)
const timeouts = new Set();
const intervals = new Set();
document.getElementById("stop").onclick = () => {
  timeouts.forEach(clearTimeout);
  intervals.forEach(clearInterval);
  timeouts.clear();
  intervals.clear();
  log("⏹️ Todos os timers foram cancelados.");
};

// =======================================================================
// EXEMPLOS (curtos, com explicações nos comentários)
// =======================================================================

// 1) setTimeout: executa UMA VEZ depois do tempo definido
document.getElementById("ex1").onclick = () => {
  log("⌛ Ex1: Agendando mensagem para 3 segundos…");

  // setTimeout recebe: (função, tempoEmMs)
  const id = setTimeout(() => {
    // Esta função roda UMA VEZ após ~3000ms
    log("✅ Ex1: Oi! Se passaram 3s.");
  }, 3000);

  timeouts.add(id); // guardo para poder cancelar depois (se eu quiser)
};

// 2) clearTimeout: cancelar antes de executar
document.getElementById("ex2").onclick = () => {
  log("⌛ Ex2: Vou agendar para 2s, mas vou cancelar antes…");

  const id = setTimeout(() => {
    // Não deve aparecer se cancelar a tempo
    log("❌ Ex2: (não era pra ver isto)");
  }, 2000);
  timeouts.add(id);

  // Cancela em 800ms (antes de 2000ms)
  const cancelId = setTimeout(() => {
    clearTimeout(id);        // cancela
    timeouts.delete(id);     // tira da lista
    log("🧹 Ex2: Timeout cancelado com sucesso.");
  }, 800);
  timeouts.add(cancelId);
};

// 3) setInterval: executa VÁRIAS VEZES a cada intervalo
document.getElementById("ex3").onclick = () => {
  log("▶️ Ex3: Intervalo de 1s que para no 5…");
  let contador = 0;

  // setInterval recebe: (função, tempoEmMs)
  const id = setInterval(() => {
    contador++;                        // atualizo o número
    log(`⏱️ Ex3: ${contador} segundo(s).`);

    if (contador === 5) {
      clearInterval(id);               // paro quando chegar em 5
      intervals.delete(id);
      log("🛑 Ex3: Parei no 5.");
    }
  }, 1000);

  intervals.add(id);
};

// =======================================================================
// EXERCÍCIOS RESOLVIDOS (curtos)
// =======================================================================

// 1) Mensagem após 2s
document.getElementById("ex4").onclick = () => {
  log("📚 Ex4: Mensagem em 2s…");
  const id = setTimeout(() => {
    log("🎓 Ex4: Hora de estudar JavaScript!");
  }, 2000);
  timeouts.add(id);
};

// 2) Contagem regressiva 10 → 0
document.getElementById("ex5").onclick = () => {
  log("🔻 Ex5: Contagem 10 → 0");
  let n = 10;

  const id = setInterval(() => {
    log(`Ex5: ${n}`);
    n--;
    if (n < 0) {
      clearInterval(id);
      intervals.delete(id);
      log("🏁 Ex5: Fim!");
    }
  }, 1000);

  intervals.add(id);
};

// 3) Texto piscante (mostra/oculta a cada 1s)
document.getElementById("ex6").onclick = () => {
  log("✨ Ex6: piscando (use 'Parar todos' para interromper)");
  let visivel = true;

  const id = setInterval(() => {
    visivel = !visivel; // alterna entre true/false
    const estado = visivel ? "[VISÍVEL]" : "[OCULTO]";
    log(`Ex6: ${estado}`);
  }, 1000);

  intervals.add(id);
};
