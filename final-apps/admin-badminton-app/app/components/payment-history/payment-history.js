"use client";

import "./payment-history.css";
import {getAllPlayers, updatePlayerPaymentStatus} from "@/app/api/services/player-service";
import {useEffect, useState} from "react";

export function PaymentHistory() {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getAllPlayers().then((data) => {
            setPlayers(data);
        });
    }, []);


    const handleCheckboxChange = async (id, paid) => {
        try {
            const response = await updatePlayerPaymentStatus(id, paid);
            if (response.ok) {
                setPlayers(prevPlayers => prevPlayers.map(player => player.id === id ? {...player, paid} : player));
                console.log("Paid status updated successfully.");
            } else {
                console.error("Failed to update paid status.");
            }
        } catch (error) {
            console.error("Error updating paid status:", error);
        }
    };

    return (
        <section className="payment-history">
            <h3>Payment History</h3><br/>
            <table style={{width: "100%"}}>
                <thead>
                <tr>
                    <th style={{width: "80%"}}>Name</th>
                    <th>Paid?</th>
                </tr>
                </thead>
                <tbody>
                {players.length > 0 ? (
                    players.map((player) => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>
                                <input name="checkbox"
                                       type="checkbox"
                                       checked={player.paid}
                                       onChange={(event) => handleCheckboxChange(player.id, event.target.checked)}
                                />
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="2">No players found</td>
                    </tr>
                )}
                </tbody>
            </table>
        </section>
    );

}