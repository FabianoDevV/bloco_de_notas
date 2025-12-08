import "./Notas.css";

export default function Notas() {
  return `
  
    <article>
      <div>
        <button class="btnNew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path
              class="btnNewSvg"
              d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
            />
          </svg>
          Nova Nota
        </button>
      </div>

      <div class="NotasPrev">
        <div class="cardsNotasPrev">
          <h2>Ideias para projeto X</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum,
            soluta rerum consequuntur minus dolorem, eius earum adipisci omnis
            quisquam, magnam cumque. Ea, illo tempore. Numquam minima vero aliquid
            voluptates.
          </p>

          <span>Criado em: 10/02/2020 </span>
        </div>
        <div class="cardsNotasPrev">
          <h2>Ideias para projeto X</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum,
            soluta rerum consequuntur minus dolorem, eius earum adipisci omnis
            quisquam, magnam cumque. Ea, illo tempore. Numquam minima vero aliquid
            voluptates.
          </p>
          <span>Criado em: 10/02/2020 </span>
        </div>
        <div class="cardsNotasPrev">
          <h2>Ideias para projeto X</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eum,
            soluta rerum consequuntur minus dolorem, eius earum adipisci omnis
            quisquam, magnam cumque. Ea, illo tempore. Numquam minima vero aliquid
            voluptates.
          </p>
          <span>Criado em: 10/02/2020 </span>
        </div>
      </div>
    </article>

    <section>
      <div class="iconsNotas">
        <span class="del">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path
               class="del"
              d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
            />
          </svg>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path
              d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h120v80H240v400h480v-400H600v-80h120q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm200-240v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z"
            />
          </svg>
        </span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path
              d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
            />
          </svg>
        </span>
      </div>
      <div class="cardNota">
        <div>
          <h3 class="titleNota">Nenhuma nota selecionada. Crie ou escolha uma.</h3>
        </div>
      </div>
    </section>
  `;
}
