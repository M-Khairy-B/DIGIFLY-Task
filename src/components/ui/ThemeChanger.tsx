

import { useTheme } from 'next-themes';

export default function ThemeChanger() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
            }}
        >
            Change Theme
        </button>
    );
}
