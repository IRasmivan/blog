import styled from 'styled-components'

const HeaderStyle = styled.div`
	display: grid;
	grid-template-columns:
		minmax(0, 1fr)
		minmax(280px, 320px)
		2rem
		minmax(0, 980px)
		2rem
		minmax(80px, 160px)
		minmax(0, 1fr);
	align-items: start;
	min-height: 100vh;
	padding: 2rem;
	background: linear-gradient(135deg, #f5f0e5 0%, #efe5d5 100%);

	> .site-sidebar {
		grid-column: 2;
	}

	> .site-main {
		grid-column: 4;
	}

	@media (max-width: 960px) {
		display: block;
		padding: 0;
	}
`
export default HeaderStyle