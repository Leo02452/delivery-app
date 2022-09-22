import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  :root {
      // grayScale
      --g1: rgba(245, 245, 245, 1);
      --g2: rgba(235, 235, 235, 1);
      --g3: rgba(220, 220, 220, 1);
      --g4: rgba(180, 184, 182, 1);
      --g5: rgba(160, 160, 160, 1);
      --g6: rgba(120, 120, 120, 1);
      --g7: rgba(100, 100, 100, 1);
      --g8: rgba(80, 80, 80, 1);
      --g9: rgba(60, 60, 60, 1);
      --g10: rgba(40, 40, 40, 1);
      --g11: rgba(20, 20, 20, 1);
      --g12: rgba(5, 5, 5, 1);
      
      // Primary color - Green
      --p1: #C9EBFF;
      --p2: #C6FFFF;
      --p3: #B0FFE7;
      --p4: #8FECD0;
      --p5: #62BDA2;
      --p6: #499B82;
      --p7: #34856D;
      --p8: #26735C;
      --p9: #145441;
      --p10: #062E22;

      background-color: ${(props) => props.theme.general.background};
      color: ${(props) => props.theme.general.color};

      /* scroll-behavior: smooth; */

    }
`;

export default Global;
