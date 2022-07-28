import * as React from 'react'
import Layout     from '../../components/layout/Layout'
import Section    from '../../components/general/Section'
import styled  from '@emotion/styled'
import { css } from '@emotion/react'

const ButtonCardContainer = styled.div`
	--borderCard: 2px dashed var(--primary);
	display: grid;
	grid-template-columns: repeat(auto, 3);
`
const ButtonOptionsStyles = css`
	.outline {
		background: transparent;
		color: var(--backgroundText);
		border: 2px solid var(--btnBg);

		:hover,
		:focus,
		:active {
			background: var(--btnBg);
			color: var(--btnColor);
		}
	}

	.triangle {
		position: relative;
		--borderWidth: 0%;
		z-index: 1;

		::before,
		::after {
			content: '';
			position: absolute;
			height: var(--borderWidth);
			width: var(--borderWidth);
			background: var(--tertiary);
			z-index: -1;
			transition: height, width 0.3s ease-in-out;
		}

		::before {
			clip-path: polygon(0% 0, 0 100%, 100% 0);
			top: 0;
			left: 0;
		}

		::after {
			clip-path: polygon(100% 0, 100% 100%, 0 100%);
			bottom: 0;
			right: 0;
		}

		:hover,
		:focus {
			::before,
			::after {
				--borderWidth: 100%;
			}

			::before {
			}

			::after {
			}
		}

		:active {
			::before,
			::after {
				--borderWidth: 50%;
			}
		}
	}
`
const ButtonCard = styled.div`
	padding: var(--gap);
	border: var(--primary);
	${ButtonOptionsStyles};
`

const IndexPage = () => {
	return (
		<Layout>
			<Section>
				<h1>Buttons</h1>
				<p>
					There are many ways of making buttons - these are some of
					them
				</p>
				<p>Inspect the buttons or go look at the repository.</p>
			</Section>
			<Section>
				<ButtonCardContainer>
					<ButtonCard>
						<h3>Default buttons</h3>
						<p>Default button options in the style</p>
						<button>Interact with the primary button!</button>
						<button className='btn-sec'>
							Interact with the secondary button!
						</button>
						<button className='btn-ter'>
							Interact with the tertiary button!
						</button>
					</ButtonCard>
					<ButtonCard className={'bg-default'}>
						<div className='bg-inner'>
							<h3>Default buttons</h3>
							<p>Default button options in the style</p>
							<button className='outline'>
								Interact with the primary button!
							</button>
							<button className='btn-sec outline'>
								Interact with the secondary button!
							</button>
							<button className='btn-ter outline'>
								Interact with the tertiary button!
							</button>
						</div>
					</ButtonCard>
					<ButtonCard>
						<button className='btn triangle'>triangle</button>
					</ButtonCard>
				</ButtonCardContainer>
			</Section>
		</Layout>
	)
}

export default IndexPage
