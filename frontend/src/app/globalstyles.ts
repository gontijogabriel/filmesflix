import { createGlobalStyle } from 'styled-components'
export const Globalstyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Estilização da barra de rolagem */
::-webkit-scrollbar {
  width: 8px; /* Largura da barra de rolagem */
}

::-webkit-scrollbar-track {
  background: lightgray; /* Cor de fundo da barra de rolagem */
}

::-webkit-scrollbar-thumb {
  background: gray; /* Cor da barra de rolagem */
  border-radius: 10px; /* Arredonda a barra de rolagem */
}

/* Estilização do símbolo do scroll (setas) */
::-webkit-scrollbar-button {
  display: none; /* Oculta o símbolo do scroll */
}

`
