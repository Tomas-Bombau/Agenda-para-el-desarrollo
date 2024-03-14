import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  useTheme,
  Stack,
  useMediaQuery,
} from "@mui/material"
import { Link } from "react-router-dom";
import ContactanosTabs from "./ContactanosTabs";

export default function ActivityTabs({ subject, title, backgroundTabs }) {
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const lgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" disableGutters>
      <Stack component={"section"} mt={5}>
        <Typography gutterBottom variant="h3" fontFamily="Chilanka" className="text-center lg:text-left" sx={{textDecoration: "underline #3A7B50", textDecorationThickness: "4px", textUnderlineOffset: "5px",}}>
          {title}
        </Typography>
      </Stack>
      <Tabs component={"ul"} textColor="white" indicatorColor=""  value={value} aria-label="education tabs" onChange={handleChange} sx={{backgroundImage:`url(${backgroundTabs})`,
          backgroundPosition: "center",  width: "fit-content",  mt: 2, borderRadius: "10px 10px 0 0", }}>
        <Tab component={"li"} key={0} label={subject[0].label} sx={{fontSize: mdScreen ? 14 : 18, color: "black",fontWeight: 900, textIndent: 2, letterSpacing: 2, borderRight: value == 0 ? "1px solid black" : "null", borderTop: value == 0 ? "1px solid black" : null,
            borderLeft: value == 0 ? "1px solid black" : null, boxShadow: "1px 1px 2px black", backgroundColor: value === 0 ? "transparent" : "#d4d4d8"}} />
        ;
        <Tab component={"li"} key={1} label={subject[1].label}  sx={{fontSize: mdScreen ? 14 : 18, color: "black", fontWeight: 900, textIndent: 2, letterSpacing: 2, borderLeft: value == 1 ? "1px solid black" : "null", borderTop: value == 1 ? "1px solid black" : null,
            borderRight: value == 1 ? "1px solid black" : null, boxShadow: "1px 1px 2px black", backgroundColor: value === 1 ? "transparent" : "#d4d4d8"}} />
        ;
      </Tabs>
      <Paper component={"section"} sx={{ width: "100%" }}>
        <Grid container>
          <Grid container direction="column" justifyContent="space-between" gap={2} item xs={12} md={8} padding={2}>
            <Typography textAlign={mdScreen ? "center" : "left"}>
              {value == 1 ? subject[1].parragraph1 : subject[0].parragraph1}
            </Typography>
            <Box sx={{ display: lgScreen ? "column" : "flex",ustifyContent: lgScreen ? "center" : "space-around",alignItems: "center", }}>
              <Box sx={{ display: "flex",flexDirection: "column", alignItems: lgScreen ? "center" : "end"}} >
                <Typography variant="h6" fontWeight="bold" paddingX={6} textAlign={lgScreen ? "center" : null} mt={mdScreen ? 5 : 0} >
                  {value == 1 ? subject[1].citeCard : subject[0].citeCard}  
                </Typography>
                <Typography variant="overline" fontWeight={800}  fontFamily="Chilanka" paddingRight={lgScreen ? 0 : 10} paddingTop={2} >
                  {value == 1 ? subject[1].citeAuthor : subject[0].citeAuthor}
                  {value == 1 ? subject[1].citePhoto : subject[0].citePhoto}
                </Typography>
              </Box>
            </Box>
          <Typography textAlign={mdScreen ? "center" : "left"}>
            {value == 1 ? subject[1].parragraph2 : subject[0].parragraph2}
          </Typography>
          </Grid>
          <Grid item xs={12} md={4} p={2} height={mdScreen ? 300 : null}>
            <Box sx={{ height: "100%" }}>
              <Box
                sx={{
                  backgroundImage: `url(${
                    value == 0 ? subject[0].image : subject[1].image
                  })`,
                  position: "relative",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: "2px 2px 10px black",
                  transition:
                    "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  "&:hover": {
                    "& > div": {
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      transform: "rotateY(0deg)",
                    },
                  },
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    padding: "20px",
                    boxSizing: "border-box",
                    backgroundColor: "#f2f2f2",
                    transform: "rotateY(-90deg)",
                    transformOrigin: "right",
                    transition:
                      "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  }}
                >
                <Stack flex flexDirection={"column"} alignItems={"center"} justifyContent={"space-evenly"} height={"100%"}>
                <Typography sx={{margin: 0, fontSize: "34px", color: "#E15244", fontWeight: 700, fontFamily:"Chilanka"}}>
                    {value == 0 ? subject[0].title : subject[1].title}
                  </Typography>
                  <Typography sx={{ margin: "10px 0 0", fontSize: "17px", fontWeight:"bold", textAlign:"center", color:"#000000", lineHeight: 1.4 }}>
                    {value == 0 ? subject[0].description  : subject[1].description}
                  </Typography>
                </Stack>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <ContactanosTabs />
    </Container>
  );
}
