
const entire=[];


function add() {
    let div = document.getElementsByClassName("chat")[0];
    let chatNames = document.createElement("div");
    let name= document.getElementsByClassName('search-human')[0].value;
    if(name!="")
    chatNames.innerHTML = 
`<div class="chat-names" onclick="display('${name}')">
<div class="chat-names-sub-1">
    <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" alt="">              
</div>
<div class="chat-names-sub-2">
    <div class="chat-names-sub-2-1">
        <span id='${name}'>${name}</span>
        <span class="last-message-time"></span>
    </div>
    <div class="chat-names-sub-2-2">
        <p class="last-message"></p>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
    </div>
</div>
</div>`;
    div.append(chatNames);
   entire[name]=""
}


function sendMessage()
{
    

    const message=document.getElementsByClassName('message')[0].value;
    const div=document.createElement('span');
    const span=document.createElement('span');
    span.innerText=`${message}`
    span.style='font-size:0.9rem;'
    div.append(span);
    
    const lastMessage=document.getElementsByClassName('last-message')[0];
    lastMessage.innerText=message;

    const lastMessageTime=document.getElementsByClassName('last-message-time')[0];
    
    const subScript=document.createElement('sub');
    const hours=new Date().getHours()%12;
    const minutes=new Date().getMinutes();
    subScript.innerText=`${hours}:${minutes}`;
    lastMessageTime.innerText=`${hours}:${minutes}`;
    subScript.style='font-size:0.6rem;'
    div.append(subScript);
     
    div.style='background-color:rgb(217,253,211); padding: 5px; border-radius:3px; margin:10px;';
    const rightSectionChatMatter=document.getElementsByClassName('right-section-chat-matter')[0];
    rightSectionChatMatter.appendChild(div);  
    let mic=document.getElementsByClassName('mic')[0];
    
}
function displaySend()
{
    let div=document.getElementsByClassName('mic')[0];
    let something=document.getElementsByClassName('message')[0];
    if(something.innerText==="")
    {
        div.innerHTML=`
        
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="grey"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`
        return 
    }
    div.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="grey"><path d="M0 0h24v24H0z" fill="none"/><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
    `
}
function display(nameOfTheChat)
{
    
    const nameOfTheChatNames=document.getElementById(nameOfTheChat);
    let currentChatingPerson=document.getElementsByClassName('current-chating-person')[0];
    currentChatingPerson.innerText=nameOfTheChatNames.innerText;
    console.log(nameOfTheChatNames.innerText);
}
