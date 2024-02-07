const { addKeyword } = require("@bot-whatsapp/bot");
const { FlowInfoMenusSi } = require("./InfoMenu");

const FlowUserDataEmail = addKeyword(["FLOW_USER_DATA_EMAIL"]).addAnswer(
  "Perfecto, Nos indica su email, por favor?",
  { capture: true },
  async (ctx, { state, gotoFlow, fallBack, flowDynamic }) => {
    if (!ctx.body.includes("@")) {
      await flowDynamic([
        {
          body: `El email que ha introducido no es valido, por favor introduzca un email valido`,
        },
      ]);
      return fallBack();
    }

    await state.update({ email: ctx.body });
    console.log(state.getMyState());
    gotoFlow(FlowInfoMenusSi);
  },
  [FlowInfoMenusSi]
);

const FlowUserData = addKeyword(["FLOW_USER_DATA"]).addAnswer(
  "Perfecto, Nos indica su nombre, por favor?",
  { capture: true },
  async (ctx, { state, gotoFlow, flowDynamic }) => {
    await state.update({ name: ctx.body });
    await flowDynamic([
      {
        body: `Hola ${state.get("name")}, es un placer saludarte.`,
      },
    ]);
    gotoFlow(FlowUserDataEmail);
  },
  [FlowUserDataEmail]
);

module.exports = {
  FlowUserData,
};
