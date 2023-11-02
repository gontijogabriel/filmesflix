import { useClient } from "next-superjson";
"use client";
import React, { useState, SyntheticEvent, useEffect } from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Alert,
  Stack,
} from "@mui/material";
import { PageContainer, PageContent } from "../styles/PageStyles";
import { useRouter } from "next/navigation";

interface FormState {
  titulo: string;
  descricao: string;
  tema: string;
  indicacao: string;
  estreia: string;
  atores_principais: string;
  url_imagem: string;
}

export default function Register() {
  const router = useRouter();
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  "use client";
  const initialFormState: FormState = {
    titulo: "",
    descricao: "",
    tema: "",
    indicacao: "",
    estreia: "",
    atores_principais: "",
    url_imagem: "",
  };
  const [formData, setFormData] = useState<FormState>(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
console.log(formData)
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const jsonData: FormState = {} as FormState;

    formData.forEach((value, key) => {
      jsonData[key as keyof FormState] = value as string;
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/filmes/', requestOptions);
      if (response.ok) {
        setShowSuccessMessage(true);
      } else {
        console.log('Deu Ruim');
      }
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }
  };
  useEffect(() => {
    if (showSuccessMessage) {
      setTimeout(() => {
        router.push('/movies');
      }, 2000);
    }
  }, [showSuccessMessage, router]);
  return (
    <PageContainer>
      <PageContent>
      <Typography variant="h4" component="h2" gutterBottom>
          Cadastro de Filme
        </Typography>
        <form onSubmit={handleSubmit} method="post">
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <TextField
              fullWidth
              label="Insira o nome do filme"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Descrição do filme"
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <TextField
              fullWidth
              label="Atores principais"
              id="atores_principais"
              name="atores_principais"
              value={formData.atores_principais}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <TextField
              fullWidth
              label="foto do filme"
              id="url_imagem"
              name="url_imagem"
              value={formData.url_imagem}
              onChange={handleChange}
            />
          </Box>

          <div style={{ display: 'flex' }}>
          <Box sx={{ "& > :not(style)": { m: 1, width: "auto" } }}>
          <InputLabel id="tema">Data de estreia:</InputLabel>
            <TextField
              fullWidth
              id="estreia"
              name="estreia"
              type="date"
              value={formData.estreia}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          
  <Box sx={{ "& > :not(style)": { m: 1, width: "200px", minWidth: "80px", width: "auto" } }}>
    <InputLabel id="tema">Escolha o tema:</InputLabel>
    <Select
      labelId="tema"
      id="tema"
      name="tema"
      value={formData.tema}
      onChange={handleChange}
    >
      <MenuItem value=""></MenuItem>
      <MenuItem value="Acao">Ação</MenuItem>
      <MenuItem value="Aventura">Aventura</MenuItem>
      <MenuItem value="Comedia">Comédia</MenuItem>
      <MenuItem value="Drama">Drama</MenuItem>
      <MenuItem value="Ficcao Cientifica">Ficção Científica</MenuItem>
      <MenuItem value="Guerra">Guerra</MenuItem>
      <MenuItem value="Romance">Romance</MenuItem>
      <MenuItem value="Terror">Terror</MenuItem>
      <MenuItem value="Animacao">Animação</MenuItem>
      <MenuItem value="Musical">Musical</MenuItem>
      <MenuItem value="Crime">Crime</MenuItem>
      <MenuItem value="Historia Real">História Real</MenuItem>
      {/* Adicione mais itens de menu conforme necessário */}
    </Select>
  </Box>

  <Box sx={{ "& > :not(style)": { m: 1, width: "200px", minWidth: "5rem", width: "auto" } }}>
    <InputLabel id="indicacao-label">Classificação indicativa:</InputLabel>
    <Select
      labelId="indicacao-label"
      id="indicacao"
      name="indicacao"
      value={formData.indicacao}
      onChange={handleChange}
    >
      <MenuItem value=""></MenuItem>
      <MenuItem value="Livre">Livre</MenuItem>
      <MenuItem value="10+">10+</MenuItem>
      <MenuItem value="12+">12+</MenuItem>
      <MenuItem value="14+">14+</MenuItem>
      <MenuItem value="16+">16+</MenuItem>
      <MenuItem value="18+">18+</MenuItem>
      {/* Adicione mais itens de menu conforme necessário */}
    </Select>
  </Box>

          </div>
          <Box sx={{ m: 1 }}>
        <Button type="submit" variant="contained" color="success"
      >
          Cadastrar
        </Button>
      </Box>
        </form>
        {showSuccessMessage && (
              <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="success">Filme registrado com com sucesso!<br/>The movie is now registered!</Alert>
            </Stack>
        )}
      </PageContent>
    </PageContainer>
  );
}
