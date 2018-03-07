import React from "react";
import { comment } from "../../config";
import HelloWord from "../demos/1_HelloWord";
import JSX from "../demos/2_JSX";
import Tick from "../demos/3_Tick";
import Comment from "../demos/4_Comment";

export const componentList = {
  HelloWord: <HelloWord />,
  JSX: <JSX />,
  Tick: <Tick />,
  Comment: (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  )
};
export const componentNameList = ["HelloWord", "JSX", "Tick", "Comment"];
