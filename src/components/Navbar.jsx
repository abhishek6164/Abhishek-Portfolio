import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

const pages = ["Abhishek"];

function ResponsiveAppBar() {
  return (
    <AppBar
      className="!bg-transparent font-mono overflow-auto scrollbar-hide  !shadow-none text-3xl font-bold !text-black"
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <span key={page} className="flex   items-center space-x-2">
                <span className="w-5 h-5 bg-red-500 rounded-full "></span>{" "}
                {/* Red Dot */}
                <span className="cursor-pointer ">{page}</span>
              </span>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
