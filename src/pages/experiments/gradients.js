import React    from 'react'
import styled   from '@emotion/styled'
import Layout   from '../../components/layout/Layout'
import Section  from '../../components/general/Section'
import {themes} from '../../abstracts/constants'
import {css}    from '@emotion/react'

const GradientContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));
  grid-auto-rows: minmax(20ch, auto);
  grid-gap: var(--gap);

  .card {
    padding: var(--gap);
    aspect-ratio: 1 / 1;
    border: dotted 2px;
  }

  .linearGradient {
    background: linear-gradient(var(--primary),
    var(--secondary),
    var(--tertiary));
  }

  .radialGradient {
    background: radial-gradient(var(--primary),
    var(--secondary),
    var(--tertiary));
  }

  .conicGradient {
    background: conic-gradient(from 120deg,
    var(--primary),
    var(--secondary),
    var(--tertiary),
    var(--primary));

    :hover {
      background: conic-gradient(from 45deg,
      var(--primary),
      var(--secondary),
      var(--primary));
    }

  }

  .repeatingGradient-1 {
    background: repeating-linear-gradient(45deg,
    var(--background),
    var(--background) var(--gap),
    var(--secondary) var(--gap),
    var(--secondary) calc(var(--gap) + var(--gap)));
    background-blend-mode: soft-light;


  }

  .repeatingGradient-2 {
    font-size: 2rem;
    background: radial-gradient(circle at 0% 50%,
    transparent 0.9ch,
    var(--primary) 1ch,
    transparent 1.1ch) 0 1ch,
    radial-gradient(at 100% 100%,
    transparent 0.9ch,
    var(--primary) 1ch,
    transparent 1.1ch),
    var(--background);
    background-size: 2.025ch 2.0ch;
    color: var(--backgroundText);
  }

  .repeatingGradient-3, .repeatingGradient-4, .repeatingGradient-5 {
    background: radial-gradient(var(--backgroundText) 3px, transparent 4px),
    radial-gradient(var(--backgroundText) 3px, transparent 4px),
    linear-gradient(var(--background) 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, var(--tertiary) 75px, var(--tertiary) 76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, var(--tertiary) 76px, var(--tertiary) 77px, transparent 78px, transparent 109px),
    var(--background);
    background-size: 109px 109px, 109px 109px, 100% 6px, 109px 109px, 109px 109px;
    background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
    color: var(--backgroundText);
  }

  .repeatingGradient-6, .repeatingGradient-7 {
    background-color: var(--background);
    background-image: linear-gradient(var(--backgroundText) 3px, transparent 3px),
    linear-gradient(90deg, var(--backgroundText) 3px, transparent 3px),
    linear-gradient(var(--backgroundText) 1.5px, transparent 1.5px),
    linear-gradient(90deg, var(--backgroundText) 1.5px, transparent 1.5px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -3px -3px, -3px -3px, -1.5px -1.5px, -1.5px -1.5px;
    background-blend-mode: soft-light;
    color: var(--backgroundText);
  }

  .repeatingGradient-8, .repeatingGradient-9 {
    --rpgSize: 20px;
    --rpgWidth: 10px;
    background: radial-gradient(var(--backgroundText) 3px, transparent 4px),
    radial-gradient(var(--backgroundText) 3px, transparent 4px),
    linear-gradient(var(--background) 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, var(--tertiary) 75px, var(--tertiary) 76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, var(--tertiary) 76px, var(--tertiary) 77px, transparent 78px, transparent 109px),
    var(--background);
    background-size: 100% var(--rpgWidth), var(--rpgSize) var(--rpgSize), var(--rpgSize) var(--rpgSize);
    background-position: calc(var(--rpgSize) / 2) calc(var(--rpgSize) / 2), 0px 0px, 0px 0px, 0px 0px, 0px 0px;
    color: var(--backgroundText);
  }
`

const Gradients = () => {
    return (
        <Layout>
            <Section>
                <h1>Gradient fun!</h1>
                <p>Messing around with gradients </p>
            </Section>

            <Section>
                <h2>Linear gradients</h2>
                <GradientContainer>
                    {Object.keys(themes).map((value, index) => (
                        <div
                            key={index}
                            css={css`
                              ${themes[value].theme}
                            `}
                            className={'card linearGradient'}
                        ></div>
                    ))}
                </GradientContainer>
            </Section>
            <Section>
                <h2>Radial</h2>
                <GradientContainer>
                    {Object.keys(themes).map((value, index) => (
                        <div
                            key={index}
                            css={css`
                              ${themes[value].theme}
                            `}
                            className={'card radialGradient'}
                        ></div>
                    ))}
                </GradientContainer>
            </Section>
            <Section>
                <h2>Conic gradients</h2>
                <GradientContainer>
                    {Object.keys(themes).map((value, index) => (
                        <div
                            key={index}
                            css={css`
                              ${themes[value].theme}
                            `}
                            className={'card conicGradient'}
                        ></div>
                    ))}
                </GradientContainer>
            </Section>
            <Section>
                <h2>Repeating gradients</h2>
                <p>Converted a few of <a href="https://projects.verou.me/css3patterns/" title={"repeating css paterns"}>repeating
                    css3 patterns</a> to custom properties</p>
                <GradientContainer>
                    {Object.keys(themes).map((value, index) => (
                        <div
                            key={index}
                            css={css`
                              ${themes[value].theme}
                            `}
                            className={`card repeatingGradient-${index + 1}`}
                        >
                            <p>So can you read this</p>
                            <p><b>What about this?</b></p>
                        </div>
                    ))}
                </GradientContainer>
            </Section>
        </Layout>
    )
}

export default Gradients
