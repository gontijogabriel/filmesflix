import {Typography } from "@mui/material";
import { PageContainer, PageContent } from "../styles/PageStyles";

export default function About() {
  return (
    <PageContainer>
      <PageContent>
      <Typography variant="h4" component="h2" gutterBottom>
          Sobre mim
        </Typography>
        <Typography variant="h5" gutterBottom>
        Bem-vindo ao nosso mundo cinematográfico!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Somos um grupo de entusiastas de filmes apaixonados por contar histórias cativantes
        através das lentes mágicas do cinema. Acreditamos no poder do cinema como uma forma
        poderosa de entretenimento, educação e expressão artística. Nossa missão é fornecer
        aos amantes de filmes uma plataforma abrangente para explorar e se envolver com uma
        ampla gama de conteúdos relacionados ao mundo do cinema.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Nossa equipe está empenhada em fornecer análises objetivas, notícias atuais, curiosidades
        fascinantes e conteúdo educacional sobre uma variedade de gêneros cinematográficos. Desde
        clássicos atemporais até os mais recentes lançamentos de sucesso, estamos aqui para compartilhar
        informações valiosas e divertidas sobre todos os aspectos do cinema.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Além disso, buscamos promover a apreciação e compreensão da arte cinematográfica, destacando o
        trabalho árduo e a dedicação de cineastas, atores, produtores e todos os profissionais talentosos
        por trás das câmeras. Acreditamos que cada filme conta uma história única e oferece uma experiência
        emocionante que pode nos transportar para mundos desconhecidos, desafiar nossas perspectivas e nos
        inspirar de maneiras inesperadas.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Junte-se a nós nesta jornada emocionante enquanto exploramos o vasto e dinâmico universo do cinema
        e celebramos a magia da sétima arte juntos.
      </Typography>
      <Typography variant="body1">
        Seja bem-vindo e aproveite a viagem pelo fascinante mundo dos filmes!
      </Typography>
      </PageContent>
    </PageContainer>
  );
}
