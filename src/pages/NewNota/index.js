import "./NewNota.css";
export default function NewNota() {
  return `
  
    <aside>
      <span class="optionPage">
        <div class="secNota">
          <svg class="back" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg>
          <h2>Nova Nota</h2>
        </div>

        <div class="btnsSecNew">
            <button class="descartar">Descartar</button>
            <button class="salvar">Salvar</button>
          </div>
      
      </span>

      <form action="">
        <div class="titleNew">
          <label for="titleNota">Titulo</label><br />
          <input
            type="text"
            name="titleNota"
            id="titleNota"
            placeholder="Titulo da sua nota"
          />
        
        </div>

        <label for="contentNota">Conteúdo</label>
        <div class="descriNew">
          <div class="optionsNew">
            <span class="bold">B</span>
            <span class="italic">I</span>
            <span class="under">U</span>
          </div>
          <textarea
            name="contentNota"
            id="contentNota"
            placeholder="Comece a escrever aqui..."
          ></textarea>
        </div>

        </form>
    </aside>
  `;
}
