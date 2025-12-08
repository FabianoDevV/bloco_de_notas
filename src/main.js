import "./style.css";

// Importa componentes e páginas
import Header from "./components/Header/index.js";
import Notas from "./pages/Notas/index.js";
import NewNota from "./pages/NewNota/index.js";

(function () {
  const nota = JSON.parse(localStorage.getItem("nota")) || [];

  function salveLocal() {
    const notas = JSON.stringify(nota);
    localStorage.setItem("nota", notas);
  }

  // Aplica formatação inserindo marcadores legíveis no textarea (não HTML)
  // Usa: bold -> **text**, italic -> *text*, under -> __text__
  function applyFormat(type) {
    const textarea = document.querySelector("#contentNota");
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const value = textarea.value;

    let openMarker = "";
    let closeMarker = "";
    if (type === "bold") {
      openMarker = "**";
      closeMarker = "**";
    }
    if (type === "italic") {
      openMarker = "*";
      closeMarker = "*";
    }
    if (type === "under") {
      openMarker = "__";
      closeMarker = "__";
    }

    if (start === end) {
      // insere marcadores e posiciona o cursor entre eles
      const newPos = start + openMarker.length;
      textarea.value =
        value.slice(0, start) + openMarker + closeMarker + value.slice(end);
      textarea.focus();
      textarea.setSelectionRange(newPos, newPos);
    } else {
      // envolve seleção com marcadores
      const selected = value.slice(start, end);
      textarea.value =
        value.slice(0, start) +
        openMarker +
        selected +
        closeMarker +
        value.slice(end);
      textarea.focus();
      textarea.setSelectionRange(
        start,
        start + openMarker.length + selected.length + closeMarker.length
      );
    }
  }

  document.addEventListener("click", (e) => {
    let pnum = 0;
    // atalhos de formatação por clique nas opções
    if (e.target.classList && e.target.classList.contains("bold")) {
      applyFormat("bold");
      return;
    }
    if (e.target.classList && e.target.classList.contains("italic")) {
      applyFormat("italic");
      return;
    }
    if (e.target.classList && e.target.classList.contains("under")) {
      applyFormat("under");
      return;
    }

    // Toggle NotasPrev via botão no header
    if (e.target.classList && e.target.classList.contains("btnNotasPrev")) {
      const article = document.querySelector("article");
      if (article) {
        article.classList.toggle("hide");
      }
      return;
    }

    if (e.target.classList.value === "descartar") {
      handlePage(pnum);
    }

    if (
      e.target.classList.value === "btnNew" ||
      e.target.classList.value === "btnNewSvg"
    ) {
      handlePage(pnum + 1);
    }

    if (e.target.classList.value === "back") {
      handlePage(pnum);
      handleNotaPrev();
    }

    if (e.target.classList.value === "salvar") {
      handleValue();
    }

    if (
      e.target.classList &&
      (e.target.classList.value === "del" || e.target.classList.contains("del"))
    ) {
      // Remove a nota selecionada (com classe selectClick)
      const selected = document.querySelector(".cardsNotasPrev.selectClick");
      if (!selected) {
        alert("Selecione uma nota para excluir.");
        return;
      }
      const all = Array.from(document.querySelectorAll(".cardsNotasPrev"));
      const index = all.indexOf(selected);
      if (index === -1) return;

      // 'nota' e 'salveLocal' estão no escopo do IIFE
      nota.splice(index, 1);
      salveLocal();

      // limpa o card de exibição
      const containerCard = document.querySelector(".cardNota");
      if (containerCard) containerCard.innerHTML = "";

      handleNotaPrev();
    }
  });

  function handleValue() {
    const infor = handleValueNota();
    const inforValid = { ...infor };
    const { title, description } = inforValid;
    if (title.trim() != "" && description.trim() != "") {
      nota.unshift(infor);
      salveLocal();
    } else {
      alert("Preencha todos os campos.");
    }
  }
})();

function selecao(nota) {
  const selectNota = document.querySelectorAll(".cardsNotasPrev");

  const containerCard = document.querySelector(".cardNota");

  selectNota.forEach((select, index) => {
    select.addEventListener("click", () => {
      // Remove a classe de todos os cards
      selectNota.forEach((card) => {
        card.classList.remove("selectClick");
      });

      // Adiciona a classe apenas ao card clicado
      select.classList.add("selectClick");

      const { title, description } = nota[index];
      containerCard.innerHTML = "";

      const contentCard = document.createElement("div");

      const titleNota = document.createElement("h1");
      titleNota.textContent = title;
      containerCard.appendChild(titleNota);

      const descri = document.createElement("p");
      // converte tags antigas para spans com classes e preserva quebras de linha
      descri.innerHTML = convertFormatting(description).replace(/\n/g, "<br>");
      contentCard.appendChild(descri);

      containerCard.appendChild(contentCard);

      // Em mobile, esconder o article (slide out) quando uma nota for selecionada
      const article = document.querySelector("article");
      if (article && window.innerWidth < 768) {
        article.classList.add("hide");
      }
    });
  });
}
// Converte tags semânticas antigas para spans com classes (compatibilidade)
function convertFormatting(text) {
  if (!text) return "";
  let html = text;
  html = html.replace(
    /<strong>([\s\S]*?)<\/strong>/gi,
    '<span class="fmt-bold">$1</span>'
  );
  html = html.replace(
    /<em>([\s\S]*?)<\/em>/gi,
    '<span class="fmt-italic">$1</span>'
  );
  html = html.replace(
    /<u>([\s\S]*?)<\/u>/gi,
    '<span class="fmt-under">$1</span>'
  );
  // converter marcadores markdown-like inseridos pelo editor
  html = html.replace(
    /\*\*([\s\S]*?)\*\*/g,
    '<span class="fmt-bold">$1</span>'
  );
  html = html.replace(/__([\s\S]*?)__/g, '<span class="fmt-under">$1</span>');
  html = html.replace(/\*([\s\S]*?)\*/g, '<span class="fmt-italic">$1</span>');
  return html;
}

function handleValueNota() {
  const titleNota = document.querySelector("#titleNota");
  const DescriNota = document.querySelector("#contentNota");

  const data = new Date();
  const formatador = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" });
  const date = formatador.format(data);

  const title = titleNota.value;
  const description = DescriNota.value;
  titleNota.value = "";
  DescriNota.value = "";

  return { title, description, date };
}

function handleNotaPrev() {
  const notas = JSON.parse(localStorage.getItem("nota")) || [];
  const containerPrev = document.querySelector(".NotasPrev");

  if (!containerPrev) return;

  containerPrev.innerHTML = "";

  notas.forEach((nota) => {
    const { title, description, date } = nota;

    const cardsNotasPrev = document.createElement("div");
    cardsNotasPrev.classList.add("cardsNotasPrev");

    const titleCardPrev = document.createElement("h2");
    titleCardPrev.textContent = title;
    cardsNotasPrev.appendChild(titleCardPrev);

    const descriCardPrev = document.createElement("p");
    // converte tags antigas para spans com classes e preserva quebras de linha
    descriCardPrev.innerHTML = convertFormatting(description).replace(
      /\n/g,
      "<br>"
    );
    cardsNotasPrev.appendChild(descriCardPrev);

    const dataCardPrev = document.createElement("span");
    dataCardPrev.textContent = "Criado em: " + date;
    cardsNotasPrev.appendChild(dataCardPrev);

    containerPrev.appendChild(cardsNotasPrev);
  });
  selecao(notas);
}

// Estrutura base da aplicação
document.querySelector("#app").innerHTML = `
  <header id="Header"></header>
  <main id="page"></main>
`;

// Renderiza o header fixo
document.querySelector("#Header").innerHTML = Header();

function handlePage(pnum) {
  if (pnum === 1) {
    document.querySelector("#page").innerHTML = NewNota();
  }

  if (pnum === 0) {
    document.querySelector("#page").innerHTML = Notas();
    handleNotaPrev();
  }
}

// Renderiza a página atual
document.querySelector("#page").innerHTML = Notas();
handleNotaPrev();
