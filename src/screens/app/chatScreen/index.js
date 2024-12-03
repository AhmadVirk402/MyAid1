import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import {
  widthPercentageToDP as responsiveWidth,
  heightPercentageToDP as responsiveHeight,
  responsiveFont,
} from 'react-native-responsive-hook';
import { COLORS,FontSizes,Fonts } from '../../../utilities'
import { GoBack } from "../../../components";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Today at 5:03 PM", isSystemMessage: true,},
    { id: "2", text: "Hello, are you nearby?", isUser: true, time: "5:03 PM" },
    { id: "3", text: "I'll be there in a few mins", isUser: false, time: "5:03 PM" },
    { id: "4", text: "OK, I am waiting at Vinmark", isUser: true, time: "5:04 PM" },
    {
      id: "5",
      text: "John D sent you an offer, waiting for response",
      isSystemMessage: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: (messages.length + 1).toString(),
          text: newMessage,
          isUser: true,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setNewMessage("");
    }
  };

  const renderMessage = ({ item }) => {
    if (item.isSystemMessage) {
      return <Text style={styles.systemMessage}>{item.text}</Text>;
    }

    return (
      <View
        style={[
          styles.messageBubble,
          item.isUser ? styles.userMessage : styles.otherMessage,
        ]}
      >
        <Text style={[styles.messageText, item.isUser ?styles.userText:styles.otherText]}>{item.text}</Text>
        {!item.isSystemMessage && <Text style={[styles.timeText,item.isUser ?styles.userText:styles.otherText]}>{item.time}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
    
 
      <GoBack name={'John Doe'} />

      
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        style={styles.messagesList}
        contentContainerStyle={{ paddingTop: responsiveHeight(45) }}
        //inverted
      />

     
      {/* <Text style={styles.systemMessage}>John D sent you an offer, waiting for response</Text> */}
      <View style={styles.inputContainer}>     
        <TouchableOpacity style={styles.attachment}>
          <Image
            source={require("../../../assets/images/shape.png")}  // Replace with attachment icon
            style={styles.attachmentIcon}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.send}>
          <Image
            source={require("../../../assets/images/Send.png")}  
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  
  messagesList: {
    flex: 1,
    paddingHorizontal:responsiveWidth(4),
  },
  messageBubble: {
    maxWidth: "75%",
    marginVertical: responsiveHeight(1),
    padding: responsiveHeight(1),
    paddingHorizontal:responsiveHeight(2),
    borderRadius: responsiveHeight(1.5),
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: COLORS.primary,
    color: COLORS.white,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor:'#E9E9E9',
    color:COLORS.dark
  },
  messageText: {
    fontSize: FontSizes.regular,
    color: COLORS.white,
    fontFamily:Fonts.RobotoMedium
  },
  userText:{
    color:COLORS.white
  },
  otherText:{
    color:COLORS.dark
  },
  timeText: {
    fontSize: FontSizes.tiny,
    color: COLORS.white,
    marginTop: responsiveHeight(0.5),
    alignSelf: "flex-end",
  },
  systemMessage: {
    fontSize: FontSizes.regular,
    color: "#999",
    textAlign: "center",
    marginVertical: responsiveHeight(1),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: responsiveHeight(1.7),
  },
  attachment:{
    marginHorizontal:responsiveWidth(3)
  },
  attachmentIcon: {
    width: responsiveWidth(3.8),
    height:responsiveHeight(3),
    marginHorizontal: responsiveWidth(1.5),
  },
  input: {
    flex: 1,
    height: responsiveHeight(7),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: responsiveHeight(2),
    paddingHorizontal: responsiveHeight(2),
    backgroundColor: "#F9F9F9",
    fontSize:FontSizes.regular,
  },
  send:{
    backgroundColor:COLORS.primary,
    height:responsiveHeight(5),
    width:responsiveWidth(10),
    alignItems:'center',
    justifyContent:'center',
    borderRadius:responsiveHeight(3),
    marginHorizontal:responsiveWidth(2),
  },
  sendIcon: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    
  },

});

export default ChatScreen;
