const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");
const { EVENTS } = require("@bot-whatsapp/bot");
const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const JsonFileAdapter = require("@bot-whatsapp/database/json");

// FLOWS
const { FlowInfoMenusSi, FlowInfoMenusNo } = require("./flows/InfoMenu");
const { FlowUserData } = require("./flows/UserData");
// Flow principal
const flowPrincipal = addKeyword([
  "hola",
  "buenas noches",
  "buenas tardes",
  "buenos dias",
  "buenas noches",
  "ola",
  "hey",
  "ayuda",
  EVENTS.WELCOME,
])
  .addAnswer(
    "Hola! Me llamo Forkito y me gustaria enviarle información  sobre nuestra oferta de Menús para Grupos y Eventos. Además de la información puedo ayudarle también enviandole un enlace para que usted personalmente decida el Menú o puedo enviarle un enlace para que todos los invitados voten el Menú que quiere la mayoría."
  )
  .addAnswer(
    "¿Desea que le envíe la información de nuestros Menús? Responda Si o No",
    { capture: true },
    (ctx, { gotoFlow, fallBack }) => {
      if (
        ctx.body != "si" &&
        ctx.body != "no" &&
        ctx.body != "Si" &&
        ctx.body != "No" &&
        ctx.body != "SI" &&
        ctx.body != "NO" &&
        ctx.body != "sI" &&
        ctx.body != "nO" &&
        ctx.body != "sI" &&
        ctx.body != "nO"
      ) {
        return fallBack();
      }

      if (
        ctx.body == "si" ||
        ctx.body == "Si" ||
        ctx.body == "SI" ||
        ctx.body == "sI"
      )
        gotoFlow(FlowUserData);

      if (
        ctx.body == "no" ||
        ctx.body == "No" ||
        ctx.body == "NO" ||
        ctx.body == "nO"
      )
        gotoFlow(FlowInfoMenusNo);
    },
    [FlowInfoMenusNo, FlowInfoMenusSi, FlowUserData]
  );

const main = async () => {
  const adapterDB = new JsonFileAdapter();
  const adapterFlow = createFlow([flowPrincipal]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();

module.exports = {
  flowPrincipal,
};
