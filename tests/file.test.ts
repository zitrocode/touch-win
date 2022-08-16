import { create_file } from '../src/helpers/file';

test('Create a file called "touch-win.js" in the "test" folder', () => {
  expect(() => create_file('tests/touch-win.js')).toMatchSnapshot(
    'Successfully created file "tests/touch-win.js"'
  );
});
