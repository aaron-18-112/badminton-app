const apiUrl = 'http://localhost:5089/api/Player';



// Fetch all players
export const getAllPlayers = async () => {
    const response = await fetch(`${apiUrl}/get-all-players`);
    const data = await response.json();
    return data.map(player => ({
        id: player.id,
        name: `${player.firstName} ${player.lastName}`,
        paid: player.paid,  // Assuming the response contains the 'paid' field
    }));
};

// PATCH request to update the 'paid' status of a player
export const updatePlayerPaidStatus = async (id, paid) => {
    try {
        const response = await fetch(`${apiUrl}/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paid),
        });
        return response;
    } catch (error) {
        console.error("Error in updating player paid status:", error);
        throw error;
    }
};
