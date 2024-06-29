// uno.config.ts
import {
  defineConfig,
  presetWebFonts,
  presetUno,
  presetIcons,
  presetTypography,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        satoshi: "Satoshi",
        cabinet: "Cabinet Grotesk",
      },
    }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
        width: "1.5em",
        height: "1.5em",
      },
    }),
    presetTypography({
      selectorName: "markdown",
      cssExtend: {
        h1: {
          "font-size": "clamp(1.5rem, 5vw, 2rem)",
          "line-height": "1.2em",
          "text-align": "left",
          "font-family": "Cabinet Grotesk",
        },
        h2: {
          "font-size": "clamp(1.25rem, 5vw, 1.75rem)",
          "line-height": "1.2em",
          "text-align": "left",
          "font-family": "Cabinet Grotesk",
        },
        h3: {
          "font-size": "clamp(1.125rem, 5vw, 1.5rem)",
          "line-height": "1.2em",
          "text-align": "left",
          "font-family": "Cabinet Grotesk",
        },
        h4: {
          "font-size": "clamp(1rem, 5vw, 1.25rem)",
          "line-height": "1.2em",
          "text-align": "left",
          "font-family": "Cabinet Grotesk",
        },
        a: {
          "font-weight": 600,
          width: "fit-content !important",
          display: "inline-block",
          color: "transparent",
          animation: "changeColor 5s infinite",
        },
        "a:hover": {
          "text-decoration": "underline",
          "text-decoration-color": "black",
          "text-decoration-thickness": "1px",
        },
      },
    }),
  ],
  preflights: [
    {
      getCSS: () => {
        return `
        .3d {
        box-shadow: -0px 0px 0px 9px rgba(0,0,0,1);
-webkit-box-shadow: -0px 0px 0px 9px rgba(0,0,0,1);
-moz-box-shadow: -1px 0px 0px 9px rgba(0,0,0,1);
}

          @keyframes runningText {
            0% { transform: translateX(100%); }
            100% { transform: translateX(100%); }  
          }

          @keyframes shake {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(-20deg); }
            75% { transform: rotate(20deg); }
            100% { transform: rotate(0deg); }
          }

          @keyframes shake2 {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(20deg); }
            75% { transform: rotate(-20deg); }
            100% { transform: rotate(0deg); }
          }

          @keyframes runningText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }  
          }

          @keyframes changeColor {
            0% { 
              -webkit-background-clip: text;
              background-clip: text;
              background-color: #16a34a;
            }

            50% { 
              -webkit-background-clip: text;
              background-clip: text;
              background-color: #b91c1c;
            }

            75% { 
              -webkit-background-clip: text;
              background-clip: text;
              background-color: #1d4ed8;
            }

            100% { 
              -webkit-background-clip: text;
              background-clip: text;
              background-color: #16a34a;
            }
          }
        `;
      },
    },
  ],
});
