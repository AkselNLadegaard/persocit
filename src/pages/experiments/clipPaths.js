import * as React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

const anmCpTriangleInitial = css`
	clip-path: polygon(0% 0%, 0% 100%, 100% 0%);
`
const anmCpTriangle1 = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 100%, 100% 0%);

  }
  50% {
    clip-path: polygon(100% 100%, 100% 0%, 0% 100%);
  }
  100% {

    clip-path: polygon(0% 0%, 0% 100%, 100% 0%);
  }
`

const cpTriangles = css`
	.triangle-1 {
		//prettier-ignore
		clip-path: polygon(
			0% 0%, 
			0% 100%, 
			100% 0%);
	}

	.triangle-2 {
		animation: ${anmCpTriangle1} 7s ease-in-out infinite;
	}

	.triangle-3 {
		//prettier-ignore
		clip-path: polygon(
			50% 0%,
			100% 100%,
			0% 100%);
	}

	.triangle-4 {
	}
`
const ClipPathContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
	grid-gap: var(--gap);
	z-index: calc(var(--navIndex) - 5);

	.cp {
		aspect-ratio: 1 / 1;
		background: linear-gradient(-45deg, var(--primary), var(--tertiary));
		color: var(--primaryText);
		font-size: 2rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cp-1 {
		clip-path: inset(2px 4px 6px 8px);
	}

	.cp-2 {
		clip-path: circle(25% at 50% 50%);
	}

	.cp-3 {
		//prettier-ignore
		clip-path: ellipse(
			12% 33% at 
			50% 50%);
	}

	.cp-4 {
		//prettier-ignore
		clip-path: polygon(
			25% 0%,
			75% 0%,
			100% 25%,
			100% 75%,
			75% 100%,
			25% 100%,
			0% 75%,
			0% 25%,
			25% 0%
		);
	}

	@keyframes circle {
		0% {
			clip-path: circle(80%);
		}
		50% {
			clip-path: circle(30%);
		}
		100% {
			clip-path: circle(80%);
		}
	}

	.cp-5 {
		//prettier-ignore
		clip-path: polygon(
			50% 0%,
			100% 25%,
			100% 75%,
			50% 100%,
			0% 75%,
			0% 25%,
			50% 0%
		);
	}
	.cp-6 {
		animation: circle 5s ease-in-out infinite;
	}
	.path-1 {
		//prettier-ignore
		clip-path: path('M10,30 A20,20 0,0,1 50,30 A20,20 0,0,1 90,30 Q90,60 50,90 Q10,60 10,30 M5,5 L90,90');
	}
	${cpTriangles};
`

const ClipPathCard = styled.div`
	padding: var(--gap);
`

const ClipPathPage = () => {
	return (
		<Layout>
			<Section>
				<h1>Experiments with the ClipPath property</h1>
			</Section>
			<Section className={'bg-experiments'}>
				<h2>Basic shapes</h2>

				<ClipPathContainer>
					<ClipPathCard className={'cp cp-1'}>Inset</ClipPathCard>
					<ClipPathCard className={'cp cp-2'}>Circle </ClipPathCard>
					<ClipPathCard className={'cp cp-3'}>Ellipsis</ClipPathCard>
					<ClipPathCard className={'cp cp-4'}>Polygon</ClipPathCard>
					<ClipPathCard className={'cp cp-5'}></ClipPathCard>
					<ClipPathCard className={'cp cp-6'}></ClipPathCard>
				</ClipPathContainer>
			</Section>
			<Section className={'bg-default'}>
				<h2>Triangles</h2>
				<ClipPathContainer className={'bg-inner'}>
					<ClipPathCard className='cp triangle-1'></ClipPathCard>
					<ClipPathCard className='cp triangle-2'></ClipPathCard>
					<ClipPathCard className='cp triangle-3'></ClipPathCard>
				</ClipPathContainer>
			</Section>
			<Section className={'bg-blog'}>
				<h2>Path</h2>
				<ClipPathContainer className={'bg-inner'}>
					<ClipPathCard className='cp path-1'></ClipPathCard>
				</ClipPathContainer>
			</Section>
		</Layout>
	)
}

export default ClipPathPage
