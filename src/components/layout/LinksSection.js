import styled        from "@emotion/styled";
import Section       from "../general/Section";
import * as constant from "../../abstracts/constants";

export const LinksSection = styled(Section)`
  width: 100%;

  .cardsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18ch, 1fr));
    grid-gap: var(--gap);

    > a {
      --borderWidth: 0.2em;
      font-size: 1.5rem;
      border: var(--primary) dashed var(--borderWidth);

      :hover,
      :focus,
      :active {
        border: solid var(--borderWidth);
      }

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: var(--gap);

      ${constant.mq[1]} {
      }
    }
  }
`