import styled from 'styled-components';
import themes from '../constants/themes';

export const Page = styled.article`
  width: 1400px;
  position: relative;
  margin: ${themes.spacing.headerNavVertical} auto;

  @media ${themes.media.onlyLaptop} {
    width: 1100px;
  }

  @media ${themes.media.onlyTabletLandScape} {
    width: 840px;
  }

  @media ${themes.media.onlyTabletPortrait} {
    margin: ${themes.spacing.headerNavVertical} auto;
    width: 720px;
  }

  @media ${themes.media.maxMobile} {
    width: 100%;
    margin: 0;
    padding: ${themes.spacing.headerNavVertical},
      ${themes.spacing.headerNavHorizontal};
    overflow: hidden;
  }

  @media ${themes.media.maxLowScreenMobile} {
    padding: ${themes.spacing.headerNavVertical},
      ${themes.spacing.headerNavVertical};
  }
`;
