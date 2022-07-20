import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import { Theme, themer, themerClasses } from '../abstracts/themer'
import { themes, themes2 } from '../abstracts/constants'
import styled from '@emotion/styled'

const ThemeTestContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 20ch);
	grid-auto-rows: minmax(20ch, auto);
`

const Experiments = () => {
	return (
		<Layout theme={new Theme({ primary: '#2da98c' }).theme}>
			<Section>
				<h1>Experiments</h1>
				<p>A bunch of experiments!</p>
			</Section>
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
						<div key={index} css={themes[value].theme}>
							<h3>This is a header</h3>
							<a href=''>this is an empty link</a>
							<button>Click me</button>
							😳
						</div>
					))}
				</ThemeTestContainer>
				<ThemeTestContainer>
					<h2>Now with classes bg-themeName</h2>
					{Object.keys(themes).map((value, index) => (
						<div key={index} className={`bg-${value}`}>
							<h3>This is a header</h3>
							<a href=''>this is an empty link</a>
							<button>Click me</button>
							😳
						</div>
					))}
				</ThemeTestContainer>
			</Section>
		</Layout>
	)
}

export default Experiments
