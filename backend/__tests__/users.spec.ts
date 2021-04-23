import * as request from 'supertest';
import app from '../src/application'

const newUser = {
  names: "FakeUserNameTest",
  role: "care_giver",
  phone: 900000001,
  email: "test@faketest.com",
  password: "test1234",
  confirmPassword: "test1234",
  address: "test address"
}

describe('Create new user', () => {
  it('should return 201 & valid response when we enter a correct request body', async done => {
    request(app)
      .post(`api/users/register`)
      .send(newUser)
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err, res) => {
        if (err) return done(err)
        expect(res.body).toMatchObject({
          "success": true,
        })
        done()
      })
  })
})
