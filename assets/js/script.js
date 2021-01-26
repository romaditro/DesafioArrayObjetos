//Debe crear 1 arreglo por cada listado (Radiología, Traumatología y Dental).
//1 objeto por cada fila de información que contengan los listados.
let radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

let traumoatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

let dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];



//Mostrar por pantalla la cantidad de consultas por cada listado (utilizar la propiedad length para ésto).
//Mostrar por pantalla la primera y última atención de cada listado, desplegando el rut del paciente junto con la previsión, separados por un guión.
let txtTotales = document.getElementById("txt-totales");

txtTotales.innerHTML = "<h2>Radiología</h2>";
txtTotales.innerHTML = txtTotales.innerHTML + (`Cantidad de atenciones : ${radiologia.length} <br>`);
txtTotales.innerHTML = txtTotales.innerHTML + (`Primera atención: ${radiologia[0].paciente} - ${radiologia[0].rut} - ${radiologia[0].prevision} . <br>`);
txtTotales.innerHTML = txtTotales.innerHTML + (`Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].rut} -  ${radiologia[radiologia.length - 1].prevision} . <br>`);

txtTotales.innerHTML = txtTotales.innerHTML + "<h2>Traumoatología </h2>";
txtTotales.innerHTML = txtTotales.innerHTML + (`Cantidad de atenciones : ${traumoatologia.length} <br>`);
txtTotales.innerHTML = txtTotales.innerHTML + (`Primera atención: ${traumoatologia[0].paciente} - ${traumoatologia[0].rut} - ${traumoatologia[0].prevision} . <br>`);
txtTotales.innerHTML = txtTotales.innerHTML + (`Última atención: ${traumoatologia[traumoatologia.length - 1].paciente} - ${traumoatologia[traumoatologia.length - 1].rut} - ${traumoatologia[traumoatologia.length - 1].prevision} . <br>`);

txtTotales.innerHTML = txtTotales.innerHTML + "<h2>Dental</h2>";
txtTotales.innerHTML = txtTotales.innerHTML + (`Cantidad de atenciones : ${dental.length} <br>`);
txtTotales.innerHTML = txtTotales.innerHTML + (`Primera atención: ${dental[0].paciente} - ${traumoatologia[0].rut} -  ${dental[0].prevision} . <br>`);
txtTotales.innerHTML = txtTotales.innerHTML + (`Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].rut} - ${dental[dental.length - 1].prevision} . <br>`);