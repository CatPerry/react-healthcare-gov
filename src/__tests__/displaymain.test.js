jest.mock('./fetchContent')

test('displays item after page load', () => {
  document.body.innerHTML =
    '<div id="main-content>' +
  '  <span id="username" />' +
  '  <button id="button" />' +
    '</div>';

  require('./displaymain');
  const $ = require('jquery');
  const fetchContent = require('./fetchContent');


  fetchContent.mockImplementation(cb => {
    cb({
      fullName: 'Hello Healthcare'
    });
  });

  $('#button').click();

  expect(fetchContent).toBeCalled();
  expect($('#username').text()).toEqual('Hello Healthcare');
});
