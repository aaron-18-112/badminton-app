import "./globals.css";

export const metadata = {
    title: "AJ Bell ShuttleBell - Admin",
    description: "App to manage your badminton sessions",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <link href="/AJB-Icon.svg" rel="icon" type="image/svg+xml"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
