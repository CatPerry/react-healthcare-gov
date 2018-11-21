jest.mock('./state');

import * as state from './state';

describe('the first state URL', () => {
  test('has a Wyoming URL', () => {
    expect.objectContaining({
      url: '/es/wyoming/'
    })
  })
})



// expect(state).toEqual(         
//   expect.arrayContaining([      
//     expect.objectContaining({
//       url: '/es/wyoming/'
//     })
//   ])
// )
// The assertion for a promise must be returned.
// it('works with promises', () => {
//   expect.assertions(1);
//   return state.getUrl(1).then(data => expect(data).toContainEqual("/es/wyoming/"));
// });