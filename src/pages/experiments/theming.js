import React from 'react'
import { themes } from '../../abstracts/constants'
import styled from '@emotion/styled'
import Layout from '../../components/Layout'
import Section from '../../components/Section'

const ThemeTestContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 20ch);
	grid-auto-rows: minmax(20ch, auto);
	grid-gap: var(--gap);

	.card {
		padding: var(--gap);
	}
`

const Theming = ({ data }) => {
	return (
		<Layout>
			<Section>
				<h2>Theme testing</h2>
				<p>
					Themes are generated with some regard to color science,
					albeit it not a lot at this point
				</p>
				<p>
					One can generate themes with 1-3 colors, black, white and
					background colors.{' '}
				</p>
				<p>
					The theme function then creates all the necessary colors and
					sets them as custom properties
				</p>
				<p>
					Another function generates useful utility classes like
					.bg-themeName.{' '}
				</p>
				<p>
					To avoid conflicting colors, the children of .bg-themeName
					will be following the generated themeNameAlt.{' '}
				</p>
				<h3>All 'normal' themes</h3>
				<p>
					Belows maps all of the existing themes to illustrate them
					(alt themes not mapped)
				</p>
				<p>
					In the future all themes will also respect darkmodes, proper
					contrasts and better complement color generation
				</p>
				<p>Possibly also a color theme generator playground! </p>
				<ThemeTestContainer>
					{Object.keys(themes).map((value, index) => (
						<div key={index} css={`card ${themes[value].theme}`}>
							<h3>This is theme {value}</h3>
							<a href='src/pages/experiments'>
								this is an empty link
							</a>
							<button>Click me</button>
							😳
						</div>
					))}
				</ThemeTestContainer>
				<ThemeTestContainer>
					<h2>Now with classes bg-themeName</h2>
					{Object.keys(themes).map((value, index) => (
						<div key={index} className={`card bg-${value}`}>
							<h3>This is theme {value}</h3>
							<a href='src/pages/experiments'>
								this is an empty link
							</a>
							<button></button>
							<button className='btn-pri'>Click me</button>
							<button className='btn-sec'>Click me</button>
							<button className='btn-ter'>Click me</button>
							😳
						</div>
					))}
				</ThemeTestContainer>
			</Section>
		</Layout>
	)
}

export default Theming
