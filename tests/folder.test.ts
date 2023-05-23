import { create_folder } from '../src/helpers/directory';

const nameDir = 'tests/dir_test';

test(`Create a folder inside "tests" with the name "${nameDir}"`, (): void => {
  expect(() => create_folder(nameDir)).toMatchSnapshot('');
});
