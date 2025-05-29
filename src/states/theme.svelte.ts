let theme = $state<'light' | 'dark'>('light');

export function getTheme() {
	return theme;
}

export function toggleTheme() {
	theme = theme === 'dark' ? 'light' : 'dark';
}

export function setTheme(value: 'dark' | 'light') {
	theme = value;
}
