const useRegisterMenuVotacion = async ({ telefono, email, nombre, fecha }) => {
  const menus = "default";
  const origen = "whastapp";

  const raw = JSON.stringify({
    nombre_org: nombre,
    email_org: email,
    telefono_org: telefono,
    fecha_evento: fecha,
    menus: menus,
    origen: origen,
  });

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "https://eventos.lapoza.es/api/votacionMenus",
    requestOptions
  );

  const data = await response.json();

  return data;
};

module.exports = {
  useRegisterMenuVotacion,
};
