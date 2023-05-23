import { create_file } from '../src/helpers/file';

const nameFile = 'tests/touch-win.js';

test('Create a file called "touch-win.js" in the "test" folder', (): void => {
  expect(() => create_file(nameFile)).toMatchSnapshot(
    `Successfully created file "${nameFile}"`
  );
});
