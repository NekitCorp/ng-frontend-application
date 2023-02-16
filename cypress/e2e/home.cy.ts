describe('The home page', () => {
	beforeEach(() => {
		cy.fixture('quests').then((json) => {
			cy.intercept('GET', '/api/quests', json).as('quests');
		});
		cy.fixture('quest').then((json) => {
			cy.intercept('GET', '/_next/data/development/quest/?.json?id=?', json).as('quest');
		});

		cy.visit('/');

		cy.wait(['@quests']);
	});

	it('Successfully loads', () => {
		const list = cy.get('[data-id="quest-list"]');
		list.should('exist');
		list.find('[data-id^="quest-card"]').should('have.length', 3);
	});

	it('Should load detail quest page on card click', () => {
		cy.get('[data-id^="quest-card"]').first().click();
		cy.wait(['@quest']);
		cy.url().should('include', '/quest/');
	});
});
