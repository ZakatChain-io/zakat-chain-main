import React, { useState } from 'react';
import {ReactComponent as ChatBoxProfileIcon} from '../assets/chat-box-profile-icon.svg';
import {ReactComponent as ChatBoxExpandIcon} from '../assets/chat-box-expand-icon.svg';
import {ReactComponent as ChatBoxMinimizeIcon} from '../assets/chat-box-minimize-icon.svg';
import {ReactComponent as ChatBoxCollapseIcon} from '../assets/chat-box-collapse-icon.svg';
import {ReactComponent as ChatBoxCameraIcon} from '../assets/chat-box-camera-icon.svg';
import {ReactComponent as ChatBoxSendMessageIcon} from '../assets/chat-box-send-message-icon.svg';
import AssitantMessageComponent from './assitant-message-component';
import UserMessageComponent from './user-message-component';

const ChatBoxComponent = ({setShowChatBox}) => {
    const [textMessages, setTextMessages] = useState([
        {id: 1, message: 'Hello there, I am Zakat Chain\'s assistant. How can I help you today?', type: 'assistant'}, 
        {id: 2, message: "I need help", type: 'user'},
        {id: 2, message: "I am having issues with my zakat payment", type: 'user'},
        {id: 4, message: "What is the issue sir?", type: 'assistant'},
    ]);
    const [conversationLength, setConversationLength] = useState(textMessages.length);
    const [chatBoxTextArea, setChatBoxTextArea] = useState({message: "", type: "user", id: conversationLength + 1});
    const [image, setImage] = useState();
    const onCollapseClick = () => {
        setShowChatBox(false)
    }

    const handleChatBoxTextAreaChange = (e) => {
        setChatBoxTextArea({message: e.target.value, type: "user"})
    }
    const handleSendButtonClick = () => {
        setTextMessages([...textMessages, chatBoxTextArea]);
        setConversationLength(conversationLength + 1);
        setChatBoxTextArea({message: "", type: "user"});
    }

    const handleUpload = (e) => {
        // get the selected file from the input element
        let file = e.target.files[0];
        // create a URL for the file to display as preview
        let url = URL.createObjectURL(file);
        // set the image state to the URL
        setImage(url);
    }
  return (
    <div className='absolute w-[90%] right-5 sm:right-10 -top-80 z-30 md:w-[40%] sm:w-[70%]'>
        <div className='px-6 pt-3 pb-6 bg-[#FF9606] flex justify-between'>
            <div className='flex relative'>
                <div className='absolute -top-7 -left-2 px-4 py-4 rounded-[100%] border-2 border-[#FF9606] bg-white'>
                    <ChatBoxProfileIcon className='h-9 w-9'/>
                </div>
                <div className='ml-20'>
                    <p className='text-white text-lg font-semibold'>Zakat Chain</p>
                    <p className='text-white text-sm'>Chat Box [Online]</p>
                </div>
            </div>
            <div className='flex gap-x-4 pt-1'>
                <span className='cursor-pointer'><ChatBoxExpandIcon className='h-4 w-4'/></span>
                <span className='cursor-pointer'><ChatBoxMinimizeIcon className='h-4 w-4'/></span>
                <span className='cursor-pointer' onClick={onCollapseClick}><ChatBoxCollapseIcon className='h-4 w-4'/></span>
            </div>
        </div>
        {/* Once there is a message, the chat box will expand to show the message, and this div below will be hidden. */}
        {
            textMessages.length === 0 ? (
                <div className='bg-white px-10 pt-10 pb-28 border-b border-black overflow-y-scroll h-60'>
                    <p className='text-center'>
                        We are here to help make your experience here
                        on Zakat Chain, seamless. Ask Us anything.
                    </p>
                </div>
            ) : (
                <div className='bg-white px-5 pt-10 pb-28 border-b border-black overflow-y-scroll h-60'>
                    {
                        textMessages.map((message, index) => {
                            if (message.type === 'assistant') {
                                return <AssitantMessageComponent key={index} message={message.message}/>
                            } else {
                                return <UserMessageComponent key={index} message={message.message}/>
                            }
                        })
                    }
                </div>
            )
        }
        <div className='px-6 py-3 bg-white flex border-b rounded-b-xl'>
            <div className='self-center mr-8'>
                <label htmlFor='file-input' className='cursor-pointer'><ChatBoxCameraIcon className='h-5 w-5'/></label>
                {/* hide the default file input and use the onChange event to handle upload */}
                <input id="file-input" type="file" onChange={handleUpload} className='hidden'/>
            </div>
                  {/* show the image preview if the image state is not null */}
                {image && <img src={image} alt="preview" className='h-10 w-10 object-cover'/>}
            <div className=''>
                <form>
                    <textarea type='text' rows={1} onChange={handleChatBoxTextAreaChange} value={chatBoxTextArea.message} className='resize-none focus:outline-none' placeholder='Type your message here...'>
                    </textarea>
                </form>
            </div>
            <div className='self-center ml-auto cursor-pointer' onClick={handleSendButtonClick}>
                <ChatBoxSendMessageIcon className='h-5 w-5'/>
            </div>
        </div>
    </div>
  )
}

export default ChatBoxComponent;