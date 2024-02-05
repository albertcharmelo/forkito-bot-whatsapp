const { addKeyword } = require("@bot-whatsapp/bot");
const { FlowMenuElegido } = require("./MenuElegido");
const { useRegisterMenuVotacion } = require("../hooks/useRegisterMenuVotacion");

const FlowElegirTipoMenuSi = addKeyword(["FLOW_TIPO_MENU_SI"])
  .addAnswer(
    "Fenomenal 👍, le voy a enviar ahora un enlace con todas las opciones que tenemos para que usted lo vea tranquilamente y cuando lo tenga me escribe el siguente texto: *MENU ELEGIDO*  Y volvemos a hablar"
  )
  .addAnswer("https://lapoza.es/eventos/", null, null, [FlowMenuElegido]);

const FlowElegirTipoMenuNo = addKeyword(["FLOW_TIPO_MENU_NO"]).addAnswer(
  [
    "Fenomenal 👍, le voy a enviar DOS enlaces.",
    "1️⃣ es el que puede compartir con todos los invitados en donde se pueden ver todos los Menús que tenemos y cada invitado puede votar cual es el que prefiere. Así se elige el Tipo de Menú que quiere la mayoría",
    "2️⃣ enlace para usted como organizador en el que va a poder ver las elecciones de cada invitado y podrá dar el Resultado Final.Una vez tenga claro el Resultado puede volver a escribirme indicando el texto: *MENU ELEGIDO*",
  ],
  null,
  async (ctx, { flowDynamic, state }) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];

    const LinkMenuVotacion = await useRegisterMenuVotacion({
      telefono: ctx.from,
      email: state.get("email"),
      nombre: state.get("name"),
      fecha: formattedDate,
    });

    await state.update({
      linkMenuVotacion: LinkMenuVotacion.votacion.url_votacion,
    });

    await flowDynamic([
      { body: `Link de Votacion: ${state.get("linkMenuVotacion")}` },
    ]);

    await flowDynamic([
      { body: `Link de Organizador: ${state.get("linkMenuVotacion")}` },
    ]);
  },
  []
);

module.exports = {
  FlowElegirTipoMenuSi,
  FlowElegirTipoMenuNo,
};
