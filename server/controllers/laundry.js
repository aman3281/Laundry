import express from "express";
import mongoose from "mongoose";
import sgMail from "@sendgrid/mail";
import Laundry from "../models/laundry.js";
import User from "../models/user.js";
import mailgun from "mailgun-js";
import nodemalier from "nodemailer";
const router = express.Router();
// sgMail.setApiKey(
//   "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"
// );
// let transporter = nodemalier.createTransport({
//   host: "smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "7dc4076e0b30c1",
//     pass: "6e78b7259d267c",
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// });
// let mailOptions = {
//   from: "pratikprog@gmail.com",
//   to: "pratikkumar753@gmail.com",
//   subject: "hiii",
//   text: "hiii",
// };
// transporter.sendMail(mailOptions, function (err, success) {
//   if (err) console.log(err);
//   else {
//     console.log("email send!");
//   }
// });
// const msg = {
//   to: "pratikkumar753@gmail.com",
//   from: "pratikprog@gmail.com",
//   subject: "hii uiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiipratik",
//   text: "the iiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiy yigyftu  kytdtyfkyt fky yfufutf fttext",
// };
// sgMail.send(msg, function (err, info) {
//   if (err) console.log("Email Error");
//   console.log(err, "email Success");
// });

const DOMAIN = "sandboxaa9d473a429b4afb9156164e8e15c987.mailgun.org";
const api_key = "94d2611219cd1fc82d6b551e939477a5-bdb2c8b4-3e509a5d";
const mg = mailgun({ apiKey: api_key, domain: DOMAIN });

export const getLaundry = async (req, res) => {
  const id = req.userId;
  const userId = id;
  // console.log(req.userId);

  try {
    const laundry = await Laundry.find({ userId });
    // console.log(laundry, "Laundry");
    res.status(200).json(laundry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getAllLaundry = async (req, res) => {
  try {
    const laundry = await Laundry.find();
    // console.log(laundry, "Laundry");
    res.status(200).json(laundry);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createLaundry = async (req, res) => {
  const laundry = req.body;
  // console.log(laundry);
  const newLaundry = new Laundry({
    ...laundry,
    createdAt: new Date().toISOString(),
  });

  try {
    await newLaundry.save();
    // console.log(laundry, "succes");
    res.status(201).json(newLaundry);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const changeStatus = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  // console.log(data.status, "fdata");
  console.log(data);
  let strSend = "";
  if (data.status == 0) strSend = "New Request";
  if (data.status == 1) strSend = "InProgress";
  if (data.status == 2) strSend = "Accpeted!";
  if (data.status == 3) strSend = "Finish";

  const updateData = await Laundry.findByIdAndUpdate(
    id,
    {
      statusLaundry: data.status,
    },
    { new: true }
  );
  const userData = await User.findById({ _id: updateData.userId });
  console.log(updateData);
  console.log(userData);
  const dataMail = {
    from: "pranay2017raj@gmail.com",
    to: `${userData.email}`,
    subject: "Laundry Status",
    text: `
    Hii ${userData.name}, \n
    your Request Status: ${strSend} \n
    Total Price ${updateData.totalPrice} \n 
    Pick Up Date : ${updateData.pickUpDate}`,
  };
  mg.messages().send(dataMail, function (error, body) {
    if (error) console.log(error);
    else console.log("successful");
  });
  res.json(updateData);
};

export default router;
