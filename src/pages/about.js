import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'gatsby'
import Section from '../components/general/Section'
import { themes } from '../abstracts/constants'

const About = () => {
	return (
		<Layout theme={themes.about}>
			<Section>
				<h1>The about page</h1>
				<p>This website is built mainly using:</p>

				<ul>
					<li>
						<a
							href='https://www.gatsbyjs.com/'
							title={'Go to GatsbyJS homepage'}
						>
							GatsbyJS
						</a>{' '}

					</li>
					<li>
						<a
							href='https://emotion.sh/'
							title={'Go to Emotion homepage'}
						>
							Emotion
						</a>{' '}

					</li>
					<li>
						<a
							href='https://mdxjs.com/'
							title={'go to mdxJS homepage'}
						>
							MDX
						</a>{' '}

					</li>
				</ul>

				<p>
					The styling is generally written from scratch, with the
					exception of the fundamental typographical styling, which
					uses{' '}
					<a
						href='https://kyleamathews.github.io/typography.js/'
						title={'Go to typographyJS homepage'}
					>
						typographyJs
					</a>
				</p>
				<p>
					The source code for the website is currently available on:{' '}
					<a
						href='https://github.com/AkselNLadegaard/persocit'
						title={'Go to the sites githubrepo'}
					>
						Github
					</a>
				</p>
				<Link to={'/'}>Back to the front page</Link>
			</Section>
		</Layout>
	)
}

export default About
