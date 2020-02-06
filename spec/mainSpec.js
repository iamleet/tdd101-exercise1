describe('#MAIN', () => {

    let io;
    let main;

    beforeEach(() => {

        io = td.replace('../src/io', {
            prompt: sinon.stub(),
            helloName: sinon.stub()
        });
        
        io.prompt.returns('');

        main = require('../src/index');

    });

    afterEach(() => {
        td.reset();
    });

    describe('.main', () => {
        it('Prompts the user for their name', () => {
            io.prompt.withArgs('What is your name?').returns('Brian')
            main.main(); 
            expect(io.prompt).to.be.calledWith('What is your name?');
        });
        it('Returns a greeting', () => {
            const message = "Hello, Brian, nice to meet you!"
            io.prompt.withArgs('What is your name?').returns('Brian');
            io.helloName.returns(message);
            const greeting = main.main();
            expect(greeting).to.equal(message);
        })
    })
});