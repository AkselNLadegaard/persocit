import * as React from 'react'
import Layout     from '../components/layout/Layout'
import Section    from '../components/general/Section'
import styled  from '@emotion/styled'
import {Link}        from 'gatsby'
import * as constant from '../abstracts/constants'
import {SectionHero} from "../components/general/SectionHero";

const LinksSection = styled(Section)`
  width: 100%;

  .cardsContainer {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20ch, 1fr));
    grid-auto-rows: minmax(20ch, auto);
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
        aspect-ratio: 1 / 1;
      }
    }
  }
`

const IndexPage = () => {
    return (
        <Layout>
            <SectionHero>
                <h1>Welcome to my site!</h1>
            </SectionHero>
            <LinksSection>
                <h3>Some popular destinations:</h3>
                <div className='cardsContainer'>
                    <Link className='bg-experiments' to={'experiments'}>
                        <div>Go see some fun codng experiments</div>
                    </Link>
                    <Link className='bg-about' to={'about'}>
                        <div>Curious what this site is all about?</div>
                    </Link>
                    <Link className='bg-blog' to={'blog'}>
                        <div>Or go to the empty blog</div>
                    </Link>
                </div>
            </LinksSection>
        </Layout>
    )
}

export default IndexPage
