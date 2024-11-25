const apiUrl = 'http://localhost:5089/api/Player';

export const getAllPlayers = async () => {
    const response = await fetch(`${apiUrl}/get-all-players`);
    const data = await response.json();
    return data.map(player => ({
        id: player.id,
        name: `${player.firstName} ${player.lastName}`,
        paid: player.paid,
    }));
};

export const updatePlayerPaymentStatus = async (id, paid) => {
    try {
        return await fetch(`${apiUrl}/update-player-payment-status/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(paid),
        });
    } catch (error) {
        console.error("Error in updating player paid status:", error);
        throw error;
    }
};