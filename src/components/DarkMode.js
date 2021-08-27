import React, { useEffect, useState } from 'react'

const isBrowser = typeof window !== 'undefined'

function setTheme(toTheme) {
	document.documentElement.setAttribute('data-theme', toTheme)
}

function browserPrefersColorScheme() {
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		return 'dark'
	} else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
		return 'light'
	} else return 'light'
}

function detectColorScheme() {
	// The ideal detect color scheme function:
	// Saves browser preference to local storage. If browser preference has changed since the last visit, then
	// the new preference is assumed to be the most important, and thus the theme is set to the new browser preference.
	// Otherwise, it relies on the users specified preference.
	// and finally it fall backs to default intended styling (light theme)

	// 1. Browser has changed preference (prefers-color-scheme)
	// 2. Local storage
	// 3. Default light styling & no-preference.

	if (isBrowser) {
		if (window.matchMedia('(prefers-color-scheme)').matches) {
			const browserPreference = browserPrefersColorScheme()
			if (localStorage.getItem('initialPreference') === null) {
				localStorage.setItem('initialPreference', browserPreference)
				setTheme(browserPreference)
				return browserPreference === 'dark'
			} else if (
				localStorage.getItem('initialPreference') !== browserPreference
			) {
				setTheme(browserPreference)
				localStorage.setItem('initialPreference', browserPreference)
			} else if (localStorage.getItem('theme') !== null) {
				const prefersTheme = localStorage.getItem('theme')
				setTheme(prefersTheme)
				return prefersTheme === 'dark'
			}
		} else if (localStorage.getItem('theme')) {
			const prefersTheme = localStorage.getItem('theme')
			console.log('Fallback to local storage theme, for old browsers')
			setTheme(prefersTheme)
			return prefersTheme === 'dark'
		} else {
			setTheme('light')
			return false
		}
	} else return false
}

const DarkMode = ({ name = 'darkModeToggle', children, ...rest }) => {
	const [darkMode, setDarkMode] = useState(() =>
		detectColorScheme(setDarkMode)
	)
	if (isBrowser) {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (e) => {
				detectColorScheme()
				setDarkMode(e.matches)
			})
		window
			.matchMedia('(prefers-color-scheme: no-preference)')
			.addEventListener('change', (e) => {
				detectColorScheme()
				setDarkMode(!e.matches)
			})
	}
	// TODO cleanup event listeners?
	useEffect(() => {
		if (darkMode) {
			setTheme('dark', setDarkMode(true))
			localStorage.setItem('theme', 'dark')
		} else {
			setTheme('light', setDarkMode(false))
			localStorage.setItem('theme', 'light')
		}
	}, [darkMode])

	const handleDarkMode = () => {
		setDarkMode(!darkMode)
	}
	return (
		<input
			type={'checkbox'}
			name={name}
			checked={darkMode}
			onChange={handleDarkMode}
			{...rest}
		/>
	)
}

export default DarkMode
