import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { css } from '@emotion/react'

const CardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4ch 8ch;

	.card-row {
		display: grid;
		grid-template-columns: (auto-fill, minmax(20ch, 1fr));
		gap: 4ch;
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
	}

	.card-3 {
	}

	.card-4 {
	}

	.card-5 {
	}
`

const Experiments = () => {
	return (
		<Layout>
			<Section>
				<h1>Cards </h1>
			</Section>

			<Section>
				<CardsContainer>
					<div className='card-row'>
						<div className='card-description'>
							<h3>A sweet description of card-</h3>
							<p>Oh yes a lot of stuff</p>
						</div>
						<div className='card card-1'>
							<h4>Lorem ipsum</h4>
							<p className='subtitle'>Neat subtitle</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Culpa, dolorum earum error
								esse eum fuga illum in ipsa iure labore magnam
								natus necessitatibus neque nesciunt odit qui
								rerum, soluta veniam!
							</p>
							<button className='btn'>Goofy</button>
						</div>
					</div>
					<div className='card-row '>
						<div className='card-description'>
							<h3>A sweet description of card-</h3>
							<p>Oh yes a lot of stuff</p>
						</div>
						<div className='bg-themeBlog card card-2'>
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
							</div>
						</div>
					</div>
					<div className='card-row'>
						<div className='card-description'>
							<h3>A sweet description of card-</h3>
							<p>Oh yes a lot of stuff</p>
						</div>
						<div className='card card-3'>
							<h4>Lorem ipsum</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. A, accusantium consectetur
								consequatur doloribus, ducimus enim error eum
								facilis magni, maxime nostrum odit quaerat quos
								recusandae repellat reprehenderit saepe vero
								voluptates.
							</p>
						</div>
					</div>
					<div className='card-row'>
						<div className='card-description'>
							<h3>A sweet description of card-</h3>
							<p>Oh yes a lot of stuff</p>
						</div>
						<div className='card card-4'>
							<h4>Lorem ipsum</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. A alias atque autem
								consequatur, cumque expedita id illo incidunt
								ipsum, maiores, natus neque nesciunt provident
								sunt totam ut veritatis. Esse, perferendis.
							</p>
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
