type ColorShades = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type ColorSystem = {
  "primary": ColorShades;
  "secondary": ColorShades;
  "danger": ColorShades;
  "success": ColorShades;
  "pending": ColorShades;
  "destructive": ColorShades;
};


export const colors: ColorSystem = {
    "primary": {
      50: "#F3F7FD",
      100: "#E7EFFC",
      200: "#CFDFF9",
      300: "#B7CFF6",
      400: "#9FBFF3",
      500: "#87AFF0",
      600: "#6F9FED",
      700: "#578FEA",
      800: "#3F7FE7",
      900: "#276FE4"
    },
    "secondary": {
      50: "#F6F8FA",
      100: "#EDF1F5",
      200: "#DBE3EB",
      300: "#C9D5E1",
      400: "#B7C7D7",
      500: "#A5B9CD",
      600: "#93ABC3",
      700: "#819DB9",
      800: "#6F8FAF",
      900: "#5D81A5"
    },
    "danger": {
      50: "#FFF7E6",
      100: "#FFEFCC",
      200: "#FFDF99",
      300: "#FFCF66",
      400: "#FFBF33",
      500: "#FFAF00",
      600: "#CC8C00",
      700: "#996900",
      800: "#664600",
      900: "#332300"
    },
    "success": {
      50: "#E6F9F1",
      100: "#CCF3E3",
      200: "#99E7C7",
      300: "#66DBAB",
      400: "#33CF8F",
      500: "#00C373",
      600: "#009C5C",
      700: "#007545",
      800: "#004E2E",
      900: "#002717"
    },
    "pending": {
      50: "#FFF8E6",
      100: "#FFF1CC",
      200: "#FFE399",
      300: "#FFD566",
      400: "#FFC733",
      500: "#FFB900",
      600: "#CC9400",
      700: "#996F00",
      800: "#664A00",
      900: "#332500"
    },
    "destructive": {
      50: "#FFEAEA",
      100: "#FFD5D5",
      200: "#FFABAB",
      300: "#FF8181",
      400: "#FF5757",
      500: "#FF2D2D",
      600: "#CC2424",
      700: "#991B1B",
      800: "#661212",
      900: "#330909"
    }
  };


  export const white = "#FFFFFF";
  export const black = '#010209';
  export const transparent = "transparent";
  export const currentColor = "currentColor";