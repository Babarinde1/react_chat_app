import { PictureOutlined, SendOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { sendMessage, isTyping } from "react-chat-engine";
const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const text = value.trim();
    if (text.length > 0) sendMessage(creds, chatId, { text });
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(props, chatId);
  };
  const handleUpload=(e)=>{
sendMessage(creds, chatId, {files: e.target.files, text:''})
  }
  return (
    <form className="message-form" onSubmit={onSubmitHandler}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onSubmit={onSubmitHandler}
        onChange={handleChange}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon"/>
      </button>
    </form>
  );
};

export default MessageForm;
