import { MailAdapter, SendMailAdapter } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "90e2a319f677ad",
    pass: "4f3bf6e541f240"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailAdapter) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Alexandre Morais <teste@gmail.com>',
      subject,
      html: body
    })
  };
}