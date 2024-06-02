const config = {
    apiUrl: "http://localhost:3000"
};

$(document).ready(function() {

    function fetchRDVs() {
        $.ajax({
            url: `${config.apiUrl}/RDV`,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                const rdvTable = $('#rdvTable tbody');
                rdvTable.empty();  // Effacer les anciennes entrées

                data.forEach(function(rdv) {
                    let row = `<tr>
                        <td>${rdv.id}</td>
                        <td>${rdv.idUserClient}</td>
                        <td>${rdv.idUserMedecin}</td>
                        <td>${rdv.date}</td>
                        <td>${rdv.timeStart}</td>
                        <td>${rdv.timeEnd}</td>
                    </tr>`;
                    rdvTable.append(row);
                });
            },
            error: function(request, status, error) {
                console.error('Erreur lors de la récupération des RDVs:', error);
            }
        });
    }

    fetchRDVs();  // Charger les RDVs initialement
});
