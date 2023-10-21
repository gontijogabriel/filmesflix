import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useMyContext } from '@/app/context/MyContext'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}
export const BasicModal = ({ updateCard, idEdit }) => {
  const { isActived, data, toogleActived, updateData } = useMyContext();

  const [open, setOpen] = React.useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newData = {};

    formData.forEach((value, key) => {
      newData[key] = value;
    })
    try {
      // Aguarde a resolução da promessa retornada por updateCard
      await updateCard(idEdit, newData);

      // Quando a promessa é resolvida com sucesso, feche o modal
      toogleActived(false);
    } catch (error) {
      console.error('Erro ao atualizar o card:', error);
    }
  }

  return (
    <Modal
      open={open}
      onClose={() => toogleActived(false)}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} method="post">
          <label htmlFor="titulo">Isert the name Movie</label>
          <input type="text" id="titulo" name="titulo" />
          <label htmlFor="descricao">Descibre of Movie</label>
          <textarea name="descricao" id="descricao" cols={30} rows={10}>
            digita aqui
          </textarea>
          <label htmlFor="tema">Escola um tema:</label>
          <select name="tema" id="tema">
            <option value="Acao">Ação</option>
            <option value="Aventura">Aventura</option>
            <option value="Comedia">Comédia</option>
            <option value="Drama">Drama</option>
            <option value="Ficcao Cientifica">Ficção Cienífica</option>
            <option value="Guerra">Guerra</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
            <option value="Animacao">Animação</option>
            <option value="Musical">Musical</option>
            <option value="Crime">Crime</option>
            <option value="Historia Real">História Real</option>

          </select>
          <label htmlFor="indicacao">Escolha uma indicação:</label>
          <select name="indicacao" id="indicacao">
            <option value="Livre">Livre</option>
            <option value="10+">10+</option>
            <option value="12+">12+</option>
            <option value="14+">14+</option>
            <option value="16+">16+</option>
            <option value="18+">18+</option>
          </select>
          <label htmlFor="estreia">Relese</label>
          <input type="date" id="estreia" name="estreia" />
          <label htmlFor="atores_principais">Main actors</label>
          <input type="text" id="atores_principais" name="atores_principais" />
          <label htmlFor="url_imagem">Link imagem para o filme </label>
          <input type="text" id="url_imagem" name="url_imagem" />


          <button type="submit" onClick={() => handleClose}>
            send the form
          </button>
        </form>
      </Box>
    </Modal>
  )
}
