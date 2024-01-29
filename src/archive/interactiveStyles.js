import React, { useState } from 'react'
import styled from '@emotion/styled'
import Layout from '../components/layout/Layout'
import Section from '../components/general/Section'
import { css } from '@emotion/react'
import StaggerEffect from '../components/experiments/interactiveStyles/staggerEffect'

const CardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4ch 8ch;

	.card-row {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30ch, 1fr));
		gap: 4ch;
		border-bottom: 2px solid var(--backgroundText);
		padding: 2ch 0;
	}

	.subtitle {
		font-size: 0.8em;
		font-style: italic;
	}

	.card {
		padding: 2ch 4ch;
	}

	.card-1 {
		border-style: solid;
		border-color: var(-secondary);
		border-inline-width: 1.5px 3px;
		border-block-width: 1px 3px;

		transition: all ease-in-out 0.3s;
		position: relative;

		h4 {
			margin-block-end: 0;
		}

		.subtitle {
			margin-block: 0.2em 0.5em;
		}

		::after {
			content: '';
			transition: all ease-in-out 0.3s;
			position: absolute;
			top: calc(2ch + 0.3em);
			left: 1.5ch;
			height: 1ch;
			width: 1ch;
			background: var(--secondary);
			border-radius: 50% 50%;
		}

		:hover,
		:focus {
			box-shadow: 6px 5px 0 var(--tertiary);

			::after {
				border-radius: 2px 2px;
			}
		}
	}

	.card-2 {
		border: solid var(--tertiary);
	}

	.card-3 {
		border: solid var(--tertiary);
		border-width: calc(var(--card3BorderWidth) / 4)
			calc(var(--card3BorderWidth) / 1) calc(var(--card3BorderWidth) / 3)
			calc(var(--card3BorderWidth) / 4);
	}

	.card-4 {
	}

	.card-5 {
	}
`

const Experiments = () => {
	const [count] = useState(0)
	const [card1Range, setCard1Range] = useState(0)
	let card1CssObject = css`
		border-width: ${card1Range}px !important;
	`

	const [card2Slider1, setCard2Slider1] = useState(0)
	const [card2Slider2, setCard2Slider2] = useState(0)
	const [card2Slider3, setCard2Slider3] = useState(0)
	const [card2Slider4, setCard2Slider4] = useState(0)

	const [card3Slider1, setCard3Slider1] = useState(0)
	return (
		<Layout>
			<Section>
				<h1>Cards </h1>
			</Section>

			<Section>
				<CardsContainer>
					<div className='card-row'>
						<div className='card-description'>
							<h3>Generate css class with emotion-</h3>
							<p>This is extremely slow</p>
						</div>
						<div className='card card-1' css={card1CssObject}>
							<h4>Lorem ipsum</h4>
							<p className='subtitle'>Slow slow slow</p>
							<p>The css class then uses the value</p>
							<p> {count}</p>
							<p> {card1Range}</p>
							<input
								type='range'
								min='0'
								max='100'
								value={card1Range}
								onChange={(event) =>
									setCard1Range(event.target.value)
								}
								step='1'
							/>
						</div>
					</div>
					<div className='card-row '>
						<div className='card-description'>
							<h3>As a style object-</h3>
							<p>A lot faster</p>
						</div>
						<div
							className='bg-blog card card-2'
							style={{
								borderBlockWidth: `${card2Slider1}px ${card2Slider3}px`,
								borderInlineWidth: `${card2Slider4}px ${card2Slider2}px`,
							}}
						>
							<div className='bg-inner'>
								<h4>Lorem ipsum</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Adipisci aliquam assumenda
									commodi deserunt, distinctio eaque et
									exercitationem iste non officiis quis,
									quisquam reiciendis reprehenderit saepe
									temporibus ullam voluptas! Perferendis,
									saepe?
								</p>
								<a href=''>Empty link</a>
								<input
									type='range'
									min='0'
									max='100'
									value={card2Slider1}
									onChange={(event) =>
										setCard2Slider1(event.target.value)
									}
									step='1'
								/>
								<input
									type='range'
									min='0'
									max='100'
									value={card2Slider2}
									onChange={(event) =>
										setCard2Slider2(event.target.value)
									}
									step='1'
								/>
								<input
									type='range'
									min='0'
									max='100'
									value={card2Slider3}
									onChange={(event) =>
										setCard2Slider3(event.target.value)
									}
									step='1'
								/>
								<input
									type='range'
									min='0'
									max='100'
									value={card2Slider4}
									onChange={(event) =>
										setCard2Slider4(event.target.value)
									}
									step='1'
								/>
							</div>
						</div>
					</div>
					<div className='card-row'>
						<div className='card-description'>
							<h3>Updating a CSS custom property-</h3>
							<p>Which is then used in the border styling.</p>
						</div>
						<div
							className='card card-3'
							style={{
								'--card3BorderWidth': `${card3Slider1}px`,
							}}
						>
							<h4>Lorem ipsum</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. A, accusantium consectetur
								consequatur doloribus, ducimus enim error eum
								facilis magni, maxime nostrum odit quaerat quos
								recusandae repellat reprehenderit saepe vero
								voluptates.
							</p>

							<input
								type='range'
								min='0'
								max='100'
								value={card3Slider1}
								onChange={(event) =>
									setCard3Slider1(event.target.value)
								}
								step='1'
							/>
						</div>
					</div>
					<div className='card-row'>
						<div className='card-description'>
							<h3>A sweet description of card-</h3>
							<p>
								Kudos to the idea and example from:
								https://twitter.com/DavidKPiano/status/1009499115720495114
							</p>
						</div>
						<div className='card card-4'>
							<h4>Click me </h4>
							<StaggerEffect></StaggerEffect>
						</div>
					</div>
					<div className='card-row'>
						<div className='card-description'>
							<h3>A sweet description of card-</h3>
							<p>Oh yes a lot of stuff</p>
						</div>
						<div className='card card-5'>
							<h4>Lorem ipsum</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Aliquid, assumenda dicta eaque
								enim est et expedita facere nihil odit omnis
								temporibus ullam veritatis? Architecto
								aspernatur cupiditate dolore eligendi iure
								numquam.
							</p>
						</div>
					</div>
					<div className='card-row'>
						<div className='card-description'>
							<h3>A sweet description of card-</h3>
							<p>Oh yes a lot of stuff</p>
						</div>
						<div className='card card-6'>
							<h4>Lorem ipsum</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Adipisci asperiores
								consequuntur debitis dolorum impedit nesciunt
								voluptatem. Ab aperiam asperiores cum esse
								incidunt maxime, minus modi nesciunt provident!
								Excepturi, facilis nihil?
							</p>
						</div>
					</div>
				</CardsContainer>
			</Section>
		</Layout>
	)
}

export default Experiments
