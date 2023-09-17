export function removeClassButton(): void {

	const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
	buttons.forEach((btn) => { btn.classList.remove('active'); });
}