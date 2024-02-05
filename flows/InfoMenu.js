const { addKeyword } = require("@bot-whatsapp/bot");
const { FlowElegirTipoMenuSi, FlowElegirTipoMenuNo } = require("./TipoMenu");
const { useRegisterMenuVotacion } = require("../hooks/useRegisterMenuVotacion");
const FlowInfoMenusSi = addKeyword(["FLOW_INFO_MENU_SI"]).addAnswer(
  "¿Usted va a Elegir el Tipo de Menú de todo el Evento? Responda Si o No",
  {
    capture: true,
  },

  async (ctx, { gotoFlow }) => {
    if (
      ctx.body == "si" ||
      ctx.body == "Si" ||
      ctx.body == "SI" ||
      ctx.body == "sI"
    )
      gotoFlow(FlowElegirTipoMenuSi);

    if (
      ctx.body == "no" ||
      ctx.body == "No" ||
      ctx.body == "NO" ||
      ctx.body == "nO"
    ) {
      gotoFlow(FlowElegirTipoMenuNo);
    }
  },
  [FlowElegirTipoMenuSi, FlowElegirTipoMenuNo]
);

const FlowInfoMenusNo = addKeyword(["FLOW_INFO_MENU_NO"]).addAnswer(
  "Siento no haber podido ayudarle, le transmitiré esta información a mis compañeros del Restaurante y en cuanto puedan le contactaran. Si en otro momento desea que vuelva a ayudarle solo tiene que escribir en el chat la palabra AYUDA. Feliz Día "
);

// exportar constante
module.exports = {
  FlowInfoMenusSi,
  FlowInfoMenusNo,
};
