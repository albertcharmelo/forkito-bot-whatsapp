const { addKeyword } = require("@bot-whatsapp/bot");
const { FlowInfoMenusSi } = require("./InfoMenu");

const FlowUserDataEmail = addKeyword(["FLOW_USER_DATA_EMAIL"]).addAnswer(
  "Perfecto, Nos indica su email, por favor?",
  { capture: true },
  async (ctx, { state, gotoFlow }) => {
    await state.update({ email: ctx.body });
    console.log(state.getMyState());
    gotoFlow(FlowInfoMenusSi);
  },
  [FlowInfoMenusSi]
);

const FlowUserData = addKeyword(["FLOW_USER_DATA"]).addAnswer(
  "Perfecto, Nos indica su nombre, por favor?",
  { capture: true },
  async (ctx, { state, gotoFlow }) => {
    await state.update({ name: ctx.body });
    console.log(state.getMyState());
    gotoFlow(FlowUserDataEmail);
  },
  [FlowUserDataEmail]
);

module.exports = {
  FlowUserData,
};
