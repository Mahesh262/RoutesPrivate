// import React from "react";
// import { Routes, Route } from "react-router";
// import Products from "./Products";
// import Login from "./Login";
// import Homes from "./Homes";
// import Navibar from "./Navibar";
// import About from "./About";
// import { Auths } from "./Auths";
// import Profile from "./Profile";
// import { RequireAuth } from "./RequireAuth";
// import OrderSummary from "./OrderSummary";
// import NoMath from "./NoMath";
// import News from "./News";
// import Feautures from "./Feautures";
// // const Lazyab = React.lazy(() => import("./Nava"));
// const App = () => {
//   return (
//     <>
//       <Auths>
//         <Navibar />
//         <Routes>
//           <Route path="/Login" element={<Login />} />
//           {/* <Route
//           path="/Nava"
//           element={
//             <React.Suspense fallback="loading....">
//               <Lazyab />
//             </React.Suspense>
//           }
//         /> */}
//           <Route path="/About" element={<About />} />
//           <Route path="/Products" element={<Products />}>
//             <Route index element={<Feautures />} />
//             <Route path="News" element={<News />} />
//             <Route path="featured" element={<Feautures />} />
//           </Route>

//           <Route path="/Homes" element={<Homes />} />
//           <Route path="orders" element={<OrderSummary />} />
//           <Route path="*" element={<NoMath />} />

//           <Route
//             path="/profile"
//             element={
//               <RequireAuth>
//                 <Profile />
//               </RequireAuth>
//             }
//           />
//         </Routes>
//       </Auths>
//     </>
//   );
// };

// export default App;

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import Bookdata from "./Data.json";
import axios from "axios";

import React from "react";
import Searchba from "./Searchba";

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#445150",
      },
      secondary: {
        main: "#ff6e9f",
      },
    },
    typography: {
      htmlFontSize: 12,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button variant="text" color="primary">
          Wleocme fsdsfd
        </Button>
        <Button color="secondary">Wleocme fsdsfd</Button>
        <Typography>Body1</Typography>
      </ThemeProvider>
      <Searchba data={Bookdata} />
      {/* <Navibar /> */}
    </>
  );
};

export default App;
