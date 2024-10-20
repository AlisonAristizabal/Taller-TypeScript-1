import { Serie } from './Serie.js';
import { series } from './data.js';

const seriesBody = document.getElementById('seriesBody') as HTMLTableSectionElement;

series.forEach((serie: Serie) => {
    const row = seriesBody.insertRow();
    row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
});

// Calcular el promedio de temporadas
const averageSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length;

// Agregar una fila al final de la tabla con el promedio
const averageRow = seriesBody.insertRow();
averageRow.innerHTML = `
    <td colspan="3"><strong>Promedio de temporadas:</strong></td>
    <td><strong>${averageSeasons.toFixed(2)}</strong></td>
`;