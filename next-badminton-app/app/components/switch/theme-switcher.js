import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";  // Import Switch
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="theme-switcher-container">
            <Switch
                size="lg"  // Switch size
                color="success"
                onClick={handleTheme}
                checked={theme === "dark"}
                startContent={<SunIcon className="w-5 h-5" />}  // Tailwind size for SunIcon
                endContent={<MoonIcon className="w-5 h-5" />}  // Tailwind size for MoonIcon
                className="switcher-custom"
            />
        </div>
    );
};

export default ThemeSwitcher;
