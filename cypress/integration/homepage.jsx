describe("Home Page navigate",()=> {
    it("render homePage",()=>{
        cy.visit("/");
        cy.get("#searchtxt").should("exist");
        cy.get("#searchbtn").click();

    })
    it("Search Query",()=>{
        cy.visit("/");
        cy.get("#searchtxt").type("frozen");
        cy.get("#searchbtn").click();
    })

    it("search results click and check",()=>{
        cy.visit("/");
        cy.get("#searchtxt").type("frozen");
        cy.get("#searchbtn").click();
        cy.findAllByText("Olaf's Frozen Adventure").click();
    })

   
})