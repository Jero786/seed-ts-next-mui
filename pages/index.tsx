import Typography from "@mui/material/Typography";
import Link from "next/link";

function Home() {
  return (
    <div>
      <Typography variant="h1">Hello Seed!</Typography>
      <Link href="/home">GO TO</Link>
    </div>
  );
}

export default Home;
