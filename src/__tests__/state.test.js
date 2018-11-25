import States from './__mocks__/state'

test('API test case', async function () {
  global.fetch = jest.fn().mockImplementation(() => {
    var promise = new Promise((resolve, reject) => {
      resolve({
        json: function () {
          return { url: "/es/wyoming/"}
        }
      })
    })
    return promise;
  })

  const response = await States.all();
  console.warn(response);
  expect(response.url).toBe("/es/wyoming/")
});

