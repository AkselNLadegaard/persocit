import React from 'react'
import { themes } from '../../abstracts/constants'
import styled from '@emotion/styled'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { css } from '@emotion/react'

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
	console.log(themes)
	return (
		<Layout>
			<Section>
				<h2>Theme testing</h2>
				<p>
					So we all naturally want to have many different themes on
					our sites - cause why not, colors are nice.
				</p>
				<p>
					But generating functional color themes, changing them for
					darkmode and ensuring OK contrast levels is hard
				</p>
				<p>
					This is why this site generates entire themes, alt-themes
					and dark versions of both, from a single hue!{' '}
				</p>
				<p>
					The saturation and ligtness are hardcoded for dark and light
					themes.{' '}
				</p>
				<p>
					Theme colors contrast to their backgrounds are checked and
					adjusted if needed.
				</p>
				<p>
					All generated colors have a corresponded --colorText, which
					tends to be AA rated!{' '}
				</p>
				<h3>The process:</h3>
				<ol>
					<li>
						Give hue and generate HSL color with constants for
						Saturation and Lightenss
					</li>
					<li>
						Check contrast with background color -- if not AA,
						adjust lightness until it fits
					</li>
					<li>
						Generate secondary and tertiary by rotating plus minus
						120 degrees
					</li>
					<li>
						Check secondary and tertiary contrast to background, --
						adjust if needed
					</li>
					<li>
						Generate alt versions of primary, secondary and tertiary
						by rotating by some offset, and repeat 2 & 3
					</li>
					<li>
						A similair approach is then used to generate a dark
						version - all colors are darkened and the steps are
						repeated with different constants
					</li>
				</ol>
				<ThemeTestContainer>
					<h2>Now with classes bg-themeName</h2>
					{Object.keys(themes).map((value, index) => (
						<div key={index} className={`card bg-${value}`}>
							<div className='bg-inner'>
								<h3>This is theme {value}</h3>
								<a href='src/pages/experiments'>
									this is an empty link
								</a>
								<button className='btn-pri'>Click me</button>
								<button className='btn-sec'>Click me</button>
								<button className='btn-ter'>Click me</button>
								😳
							</div>
						</div>
					))}
				</ThemeTestContainer>
				<ThemeTestContainer>
					<h2>Now with classes bg-themeName-primary</h2>
					{Object.keys(themes).map((value, index) => (
						<div key={index} className={`card bg-${value}-primary`}>
							<div className='bg-inner'>
								<h3>This is theme {value}</h3>
								<a href='src/pages/experiments'>
									this is an empty link
								</a>
								<button className='btn-pri'>Click me</button>
								<button className='btn-sec'>Click me</button>
								<button className='btn-ter'>Click me</button>
								😳
							</div>
						</div>
					))}
				</ThemeTestContainer>
			</Section>
		</Layout>
	)
}

export default Theming
