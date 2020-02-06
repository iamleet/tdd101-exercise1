describe('#IO', () => {
    let io;
    let dom;


    beforeEach(() => {
        dom = td.replace('../src/dom', {
            globals: {
                prompt: sinon.stub(),
                alert: sinon.spy(),
                helloName: sinon.spy()
            }
        });
        io = require('../src/io');
        
    });

    afterEach(() => {
        td.reset();
    });

    describe('.prompt', () => {
        it('displays a message to the users', () => {
            const message = "What is your name?";
            io.prompt(message);
            expect(dom.globals.prompt).to.be.calledWith(message);
        });
        it('greets the user with the input provided', () => {
            const message = "Hello, Brian, nice to meet you!";
            dom.globals.prompt.withArgs('Brian').returns(message);
            expect(io.prompt('Brian')).to.equal(message);
        });
    });

    describe('.alert', () => {
        it('displays the message to the user', () => {
            const message = "Hello, Brian, nice to meet you!";
            io.alert(message);
            expect(dom.globals.alert).to.be.calledWith(message)
        });
    })

    describe('.helloName', () => {
        it('returns a greeting with the users name', () => {
            const name = "Brian";
            io.helloName(name);
            expect(io.helloName(name)).to.equal('Hello, Brian, nice to meet you!');
        })
    })

});


