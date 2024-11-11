import "./globals.css";

export const metadata = {
    title: "AJ Bell ShuttleBell",
    description: "An app to help manage your badminton sessions",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}
