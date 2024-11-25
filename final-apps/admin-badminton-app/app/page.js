"use client";

import {PaymentTotal} from "@/app/components/payment-total/payment-total";
import {PaymentHistory} from "@/app/components/payment-history/payment-history";
import {CreateSession} from "@/app/components/create-session/create-session";

export default function Home() {

    return (
        <div className="page">
            <div className="sidebar">
                <img alt="Logo" className="svg-container" src="logo-SVG.svg"/>
                <nav className="button-container">
                    <button aria-label="Admin" id="Admin">Admin</button>
                </nav>
            </div>

            <div className="content-container">
                <PaymentTotal />
                <CreateSession />
                <PaymentHistory />
            </div>

        </div>
    );
}
