const { addKeyword } = require("@bot-whatsapp/bot");
const { flowPrincipal } = require("../app");

const RegisterEleccion = async (url, eleccion) => {
  await fetch("https://lapoza.es/api/votacion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url_votacion: url,
      eleccion: eleccion,
    }),
  });
};

const FlowMenuElegido = addKeyword([
  "FLOW_MENU_ELEGIDO",
  "MENU ELEGIDO",
]).addAnswer(
  [
    "Fenomenal,  veo que ya ha elegido el Tipo de Menú de su Evento y por tanto le pido que me indique con un Número cual es. Los Menús Infantiles, Adolescentes o Especiales por Dietas los trataremos con los Invitados directamente si nos han dejado sus datos o en caso contrario le llamará a usted una persona del Restaurante para tratar este asunto A continuacion mire el siguente listado y conteste a este chat sólo con el número del Menú Elegido por favor",
    "1.- Menú PicaPizza",
    "2.- Menú PicaPizza con Extras",
    "3.- Menú PicaTapas ",
    "4.- Menú PicaTapas con Extras",
    "5 - Menú Italiano",
    "6.- Menú Mediterráneo ",
    "7.- Menú Eventos (30 / 35 / 40)",
    "8.- Menú Celebración 1",
    "9.- Menú Celebración 2",
    "10- Menú Celebración 3",
  ],
  { capture: true },
  async (ctx, { gotoFlow, fallback, flowDinamic, state, endFlow }) => {
    if (
      !ctx.body == "1" ||
      !ctx.body == "2" ||
      !ctx.body == "3" ||
      !ctx.body == "4" ||
      !ctx.body == "5" ||
      !ctx.body == "6" ||
      !ctx.body == "7" ||
      !ctx.body == "8" ||
      !ctx.body == "9" ||
      !ctx.body == "10"
    ) {
      fallback();
    }

    if (ctx.body == "1") {
      state.update({
        menuElegido: "Menú PicaPizza",
      });
      await RegisterEleccion(ctx.body, state.get("menuElegido"));
      flowDinamic([
        {
          body: `Menú PicaPizza seleccionado, Muchas Gracias por Hablar con Forkito, Estaremos en contacto para enviar el enlace del evento`,
        },
      ]);
    }

    if (ctx.body == "2") {
      state.update({
        menuElegido: "Menú PicaPizza con Extras",
      });
      await RegisterEleccion(ctx.body, state.get("menuElegido"));
      flowDinamic([
        {
          body: `Menú PicaPizza con Extras seleccionado, Muchas Gracias por Hablar con Forkito, Estaremos en contacto para enviar el enlace del evento`,
        },
      ]);
    }

    if (ctx.body == "3") {
      state.update({
        menuElegido: "Menú PicaTapas",
      });
      await RegisterEleccion(ctx.body, state.get("menuElegido"));
      flowDinamic([
        {
          body: `Menú PicaTapas seleccionado, Muchas Gracias por Hablar con Forkito, Estaremos en contacto para enviar el enlace del evento`,
        },
      ]);
    }

    if (ctx.body == "4") {
      state.update({
        menuElegido: "Menú PicaTapas con Extras",
      });
      await RegisterEleccion(ctx.body, state.get("menuElegido"));
      flowDinamic([
        {
          body: `Menú PicaTapas con Extras seleccionado, Muchas Gracias por Hablar con Forkito, Estaremos en contacto para enviar el enlace del evento`,
        },
      ]);
    }

    if (ctx.body == "5") {
      state.update({
        menuElegido: "Menú Italiano",
      });
      await RegisterEleccion(ctx.body, state.get("menuElegido"));
      flowDinamic([
        {
          body: `Menú Italiano seleccionado, Muchas Gracias por Hablar con Forkito, Estaremos en contacto para enviar el enlace del evento`,
        },
      ]);
    }

    if (ctx.body == "6") {
      state.update({
        menuElegido: "Menú Mediterráneo",
      });
      await RegisterEleccion(ctx.body, state.get("menuElegido"));
      flowDinamic([
        {
          body: `Menú Mediterráneo seleccionado, Muchas Gracias por Hablar con Forkito, Estaremos en contacto para enviar el enlace del evento`,
        },
      ]);
    }

    if (ctx.body == "7") {
      state.update({
        menuElegido: "Menú Eventos (30 / 35 / 40)",
      });
      await RegisterEleccion(ctx.body, state.get("menuElegido"));
      flowDinamic([
        {
          body: `Menú Eventos (30 / 35 / 40) seleccionado, Muchas Gracias por Hablar con Forkito, Estaremos en contacto para enviar el enlace del evento`,
        },
      ]);
    }

    if (ctx.body == "8") {
      state.update({
        menuElegido: "Menú Celebración 1",
      });
      await RegisterEleccion(ctx.body, state.get("menuElegido"));
      flowDinamic([
        {
          body: `Menú Celebración 1 seleccionado, Muchas Gracias por Hablar con Forkito, Estaremos en contacto para enviar el enlace del evento`,
        },
      ]);
    }

    if (ctx.body == "9") {
      state.update({
        menuElegido: "Menú Celebración 2",
      });
      await RegisterEleccion(ctx.body, state.get("menuElegido"));
      flowDinamic([
        {
          body: `Menú Celebración 2 seleccionado, Muchas Gracias por Hablar con Forkito, Estaremos en contacto para enviar el enlace del evento`,
        },
      ]);
    }

    if (ctx.body == "10") {
      state.update({
        menuElegido: "Menú Celebración 3",
      });
      await RegisterEleccion(ctx.body, state.get("menuElegido"));
      flowDinamic([
        {
          body: `Menú Celebración 3 seleccionado, Muchas Gracias por Hablar con Forkito, Estaremos en contacto para enviar el enlace del evento`,
        },
      ]);
    }

    endFlow({ body: "Para volver a iniciar la conversación escriba *AYUDA*" });
  },
  [flowPrincipal]
);

module.exports = {
  FlowMenuElegido,
};
