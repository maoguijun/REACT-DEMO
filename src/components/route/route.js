import React from "react";
import { comment } from "../../config";
import HelloWord from "../demos/1_HelloWord";
import JSX from "../demos/2_JSX";
import Tick from "../demos/3_Tick";
import Comment from "../demos/4_Comment";
import List from "../demos/5_List";
import TextArea from "../demos/6_TextArea";
import Welcome from "../demos/7_Welcome";
import Clock from "../demos/8_Clock";
import Toggle from "../demos/9_Toggle";
import LoginControl from "../demos/10_LoginControl";
import Key from "../demos/11_Key";
import Select from "../demos/12_Select";
import SignUp from "../demos/13_SignUp";
import Calculator from "../demos/14_Calculator";
import RenderProps from "../demos/15_RenderProps";
import RenderProps2 from "../demos/16_RenderProps2";
// import ClickDown from "../demos/17_ClickDown";

export const componentList = {
  HelloWord: <HelloWord />,
  JSX: <JSX />,
  Tick: <Tick />,
  Comment: <Comment {...comment} />,
  List: <List numbers={comment.numbers} />,
  TextArea: <TextArea />,
  Welcome: <Welcome />,
  Clock: <Clock />,
  Toggle: <Toggle />,
  LoginControl: <LoginControl />,
  Key: <Key posts={comment.posts} />,
  Select: <Select />,
  SignUp: <SignUp />,
  Calculator: <Calculator />,
  RenderProps: <RenderProps />,
  RenderProps2: <RenderProps2 />
  // ClickDown: <ClickDown />
};
export const componentNameList = [
  "HelloWord",
  "JSX",
  "Tick",
  "Comment",
  "List",
  "TextArea",
  "Welcome",
  "Clock",
  "Toggle",
  "LoginControl",
  "Key",
  "Select",
  "SignUp",
  "Calculator",
  "RenderProps",
  "RenderProps2"
  // "ClickDown"
];
