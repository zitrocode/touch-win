import { create_folder } from '../src/helpers/directory';

test('Create a folder inside "tests" with the name "files_test"', () => {
  expect(() => create_folder('tests/files_test')).toMatchSnapshot('');
});
