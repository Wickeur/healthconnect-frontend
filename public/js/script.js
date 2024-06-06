$(document).ready(function() {

    function fetchHealthProfessionals() {
        $.ajax({
            url: `${config.apiUrl}/healthProfessionals`,
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                const healthProfessionalsTable = $('#healthProfessionalsTable tbody');
                healthProfessionalsTable.empty();  // Effacer les anciennes entrées

                data.forEach(function(healthProfessional) {
                    let row = `<tr>
                        <td>${healthProfessional.id}</td>
                        <td>${healthProfessional.name}</td>
                        <td>${healthProfessional.specialty}</td>
                        <td>${healthProfessional.location}</td>
                        <td>${healthProfessional.availability}</td>
                    </tr>`;
                    healthProfessionalsTable.append(row);
                });
            },
            error: function(request, status, error) {
                console.error('Erreur lors de la récupération des professionnels de santé:', error);
            }
        });
    }

    fetchHealthProfessionals();  // Charger les professionnels de santé initialement
});
