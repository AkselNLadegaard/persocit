import React, { useState } from 'react'
import styled from '@emotion/styled'

const Dots = styled.div`
	aspect-ratio: 1 / 1;
	display: grid;
	grid-template-columns: repeat(var(--gNumber), 1fr);
	grid-template-rows: repeat(var(--gNumber), 1fr);
	gap: 8px;

	.dot {
		transform: scale(0);
		opacity: 0.5;
		transition: all 0.5s cubic-bezier(0.5, 0, 0.5, 1);

		transition-delay: calc(0.4ms * (var(--dots) - var(--i)));
		background: var(--tertiary);
	}

	:hover {
		> .dot {
			transform: scale(1);
			opacity: 0.5;

			transition-delay: calc(40ms * var(--i));
		}
	}

	&.active {
		> .dot {
			transform: scale(1) !important;
			opacity: 0.5 !important;
			transition-delay: calc(40ms * var(--i));
		}
	}
`
const StaggerEffect = ({ number = 16 }) => {
	const [clicked, setClicked] = useState(true)
	let numberDots = number
	return (
		<Dots
			style={{ '--dots': numberDots, '--gNumber': Math.sqrt(numberDots) }}
			className={clicked && 'active'}
			onClick={(event) => setClicked(!clicked)}
		>
			{[...Array(number)].map((x, i) => (
				<div className='dot' style={{ '--i': i }} key={i} />
			))}
		</Dots>
	)
}

export default StaggerEffect
