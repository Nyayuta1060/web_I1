// JavaScriptコード
const board = document.getElementById('board');
const input = document.getElementById('input');

// メッセージの配列と番号を保持するオブジェクト
let messages = [];
let messageCount = 1;

// 現在の日時を取得する関数（変更なし）
function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const weekday = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}/${month}/${day}(${weekday}) ${hours}:${minutes}:${seconds}`;
}

// ボードの作成（変更あり）
function createBoard() {
    board.innerHTML = '';
    messages.forEach((message, index) => {
        const div = document.createElement('div');
        div.className = 'message';
        
        // メッセージ番号を新しい行として追加（左側に配置）
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.textContent = `${message.number}. `;
        div.appendChild(numberDiv);
        
        // 日時を新しい行として追加（右側に配置）
        const timeDiv = document.createElement('div');
        timeDiv.className = 'time';
        timeDiv.textContent = getCurrentTime();
        div.appendChild(timeDiv);
        
        // 改行
        const br = document.createElement('br');
        div.appendChild(br);
        
        // メッセージ内容を新しい行として追加
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = message.text;
        div.appendChild(messageContent);
        
        board.appendChild(div);
    });
}

// メッセージの追加（変更あり）
function addMessage(message) {
    const inputText = message.trim();
    
    if (inputText === '') {
        alert('空文字は送信できません');
        return;
    }
    
    const div = document.createElement('div');
    div.className = 'message';
    
    // メッセージ番号と日時を新しい行として追加（左側に配置）
    const headerDiv = document.createElement('div');
    headerDiv.className = 'header';
    headerDiv.innerHTML = `<span class="number">${messageCount}.風吹けば名無し </span><span class="time">${getCurrentTime()}</span>`;
    div.appendChild(headerDiv);
    
    // メッセージ内容を新しい行として追加
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = inputText;
    div.appendChild(messageContent);
    
    board.appendChild(div);
    messages.push({text: inputText, number: messageCount});
    messageCount++;
}

// 送信機能
function submitForm() {
    const inputText = input.value.trim();
    addMessage(inputText);
    input.value = '';
}

// 初期化
let tells = ['こんにちは'];
createBoard();

// 入力フィールドの作成と追加
input.focus();