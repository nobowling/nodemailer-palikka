# nodemailer-palikka

How to use:
1. Clone project
2. npm i in repo root
3. Create .env file with following properties:
```
RECEIVER_EMAIL={ email you want messages to be sent }
USER_EMAIL={ email you use to send those emails }
USER_PASS={ password of email you are using for sending }
PORT={ some port eg 4444 }
```
- NOTE: email you use might need some configuring so that nodemailer is able to use it but at least gmail configuration was well documented and easy to produce
- Docs: https://nodemailer.com/usage/using-gmail/

4. npm start in repo root
  - You can also use npm run watch to start server in development mode (automatic server restart after making changes to code)

5. POST to {BASEPATH_URL}/api/mail with payload:
```json
{
  "name": "Jack Russel",
  "email": "jack@russel.com",
  "phone": "123456789",
  "message": "Looremi ipsumi liirum laarum"
}
```
