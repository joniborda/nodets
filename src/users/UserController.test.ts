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
    })
    describe('#users', () => {
        it('users/', async () => {
            request = chai.request(app)
            await request.get('/v1/users').then((res) => {
                chai.expect(res.body, "No body excepted").to.eql({
                    id: 1
                })
            })
        })

        it('not found', async () => {
            request = chai.request(app)
            await request.get('/notfound').then((res) => {
                chai.expect(res.body, "Not found excepted").to.eql({
                    message: "Not Found"
                })
            })
        })

        it('error 500', async () => {
            // TODO : implements
            // request = chai.request(app)
            // await request.get('/v1/users').then((res) => {
            //     chai.expect(res.body, "Not found excepted").to.eql({
            //         message: "Not found"
            //     })
            // })
        })
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