const Koa = require('koa');
const Router = require('koa-router');
const path = require('path');
const serve = require('koa-static');
const cors = require('@koa/cors');
const koaBody = require('koa-bodyparser');
const mailer = require('./nodemailer');
// const send = require('koa-send');

const app = new Koa();
const router = new Router();
const PORT = 5000;

router.post('/contactme', ctx => {
  const feedbackInfo = ctx.request.body.body;
  const message = {
    to: 'moiskillnadne@gmail.com',
    subject: `You have new feedback from ${feedbackInfo.name}`,
    html: `<p>Emails sender: <h2>${feedbackInfo.email}.</h2></p>
    
    <p>${feedbackInfo.message}</p>

    <h3>Date:</h3> ${feedbackInfo.submitDate}
    `,
  };
  mailer(message);

  ctx.redirect('/');
});

app
  .use(cors())
  .use(koaBody())
  .use(serve(path.join(__dirname, 'client/')))
  .use(router.routes())
  .use(router.allowedMethods());
//   .use(async (ctx: Koa.ParameterizedContext): Promise<void> => {
//     await send(ctx, `${dirname}/client/build/index.html`.replace('/app', ''));
//   })

app.listen(PORT, () => console.log(`Server start on ${PORT} port`));
