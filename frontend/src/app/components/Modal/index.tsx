import * as React from 'react'
import { useMyContext } from '@/app/context/MyContext'
import styled from 'styled-components';
import {
  Box,
  Modal,
  TextField,
  Button,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  gap: '1rem',
  p: 4,
  zIndex: 9999, // Ajuste o valor do zIndex conforme necessário


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
      if (value.trim() !== "") {

        newData[key] = value;
      }
    })
    if (Object.keys(newData).length === 0) {
      // Nenhum campo preenchido para atualização, você pode exibir uma mensagem ou tomar a ação apropriada.
      console.error('Nenhum campo preenchido para atualização');
      return;
    }
    try {
      // Aguarde a resolução da promessa retornada por updateCard
      const numberOfFields = Object.keys(newData).length;
      await updateCard(idEdit, newData, numberOfFields);
      console.log(newData)
      console.log(`Número de campos preenchidos: ${numberOfFields}`);

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

        <h2>Edit Movie</h2>
        <form onSubmit={handleSubmit} method="post" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <TextField
            fullWidth
            label="Insert the Movie Name"
            id="titulo"
            name="titulo"
          />

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Description of Movie"
            id="descricao"
            name="descricao"
          />
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' , marginRight:'25px'}}>
            <InputLabel id="tema"></InputLabel>

            <Select sx={{ width: '40%' }} labelId="tema" id="tema" name="tema"  >

              <MenuItem value=""></MenuItem>
              <MenuItem value="Acao">Ação</MenuItem>
              <MenuItem value="Aventura">Aventura</MenuItem>
              <MenuItem value="Comedia">Comédia</MenuItem>
              <MenuItem value="Drama">Drama</MenuItem>
              <MenuItem value="Ficcao Cientifica">Ficção Cienífica</MenuItem>
              <MenuItem value="Guerra">Guerra</MenuItem>
              <MenuItem value="Romance">Romance</MenuItem>
              <MenuItem value="Terror">Terror</MenuItem>
              <MenuItem value="Animacao">Animação</MenuItem>
              <MenuItem value="Musical">Musical</MenuItem>
              <MenuItem value="Crime">Crime</MenuItem>
              <MenuItem value="Historia Real">História Real</MenuItem>
            </Select>

            <InputLabel id="indicacao-label"></InputLabel>
            <Select
              sx={{ width: '40%', }}

              labelId="indicacao-label"
              id="indicacao"
              name="indicacao"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="Livre">Livre</MenuItem>
              <MenuItem value="10+">10+</MenuItem>
              <MenuItem value="12+">12+</MenuItem>
              <MenuItem value="14+">14+</MenuItem>
              <MenuItem value="16+">16+</MenuItem>
              <MenuItem value="18+">18+</MenuItem>
            </Select>

          </div>

          <TextField
            fullWidth
            type="date"
            id="estreia"
            name="estreia"
          />

          <TextField
            fullWidth
            label="Main Actors"
            id="atores_principais"
            name="atores_principais"
          />

          <TextField
            fullWidth
            label="Image URL for the Movie"
            id="url_imagem"
            name="url_imagem"
          />

          <Button type="submit">Update Movie</Button>
        </form>
      </Box>
    </Modal>
  )
}
