import useLocalStorage from './useLocalStorage';

const useDarkMode = () => useLocalStorage('darkMode', false);

export default useDarkMode