import { Header } from "@components/Header";
import { Container } from "@pages/home/styles";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <Container>
      <Typography variant="h2">!!SOME HOME PAGE HERE</Typography>
      <Header />
    </Container>
  );
}

export default Home;
