import app from '../app'
import assert from 'assert'
const chai = require('chai')
import chaiHttp from 'chai-http'

chai.use(chaiHttp);
const expect = chai.expect;

var server: any = null
var request: any = null
describe('Array', () => {
    before(() => {
        server = app.listen(8008, () => {
            console.log(`server started at http://localhost:${8008}`)
        })
        request = chai.request(app)
    })
    describe('#users', () => {
        it('users/', async () => {
            await request.get('/v1/users').then((res) => {
                chai.expect(res.body, "No body excepted").to.eql({
                    id: 1
                })
            })
        });
    });
    describe('#indexOf()', () => {

        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1)
        });
    });

    after(() => {
        server.close()
    })
});