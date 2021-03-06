"use strict"

const emojiInput = document.querySelector('#emoji-input');
let allEmojiArr = [];

document.querySelector('#unshift-btn').addEventListener('click', unshiftEmj);
document.querySelector('#shift-btn').addEventListener('click', shiftEmj);
document.querySelector('#push-btn').addEventListener('click', pushEmj);
document.querySelector('#pop-btn').addEventListener('click', popEmj);
document.querySelector('#happy-btn').addEventListener('click', function() {
    random.getRandomEmoji(random.happyArr);
});
document.querySelector('#emotion-btn').addEventListener('click', function() {
    random.getRandomEmoji(random.emotionArr);
});
document.querySelector('#sports-btn').addEventListener('click', function() {
    random.getRandomEmoji(random.sportsArr);
});
document.querySelector('#work-btn').addEventListener('click', function() {
    random.getRandomEmoji(random.workArr);
});
document.querySelector('#dayoff-btn').addEventListener('click', function() {
    random.getRandomEmoji(random.dayoffArr);
});


function unshiftEmj() {
    if (emojiInput.value) {
        allEmojiArr.unshift(emojiInput.value);
        emojiInput.value = "";
        renderEmj();
        console.log(allEmojiArr);
    }
}

function shiftEmj() {
    allEmojiArr.shift();
    renderEmj();
}

function pushEmj() {
    if (emojiInput.value) {
        allEmojiArr.push(emojiInput.value);
        emojiInput.value = "";
        renderEmj();
    }
}

function popEmj() {
    allEmojiArr.pop();
    renderEmj();
}

function renderEmj() {
    const emojiContainer = document.querySelector('#emoji-container');
    emojiContainer.innerHTML = "";
    for (let i = 0; i < allEmojiArr.length; i++) {
        emojiContainer.innerHTML += allEmojiArr[i] + ' ';
    }
}

let random = {
    happyArr: ["๐", "๐", "๐", "๐", "๐", "๐ค"],
    emotionArr: ["๐คจ", "๐", "๐ก", "๐คฏ", "๐คญ", "๐ญ", "๐"],
    sportsArr: ["๐๐ปโโ๏ธ", "๐๐ปโโ๏ธ", "๐ต๐ปโโ๏ธ", "๐ง๐ปโโ๏ธ", "๐๐ปโโ๏ธ", "โฝ", "โน๐ผ"],
    workArr: ["๐จ๐ผโ๐", "๐ฉ๐ผโ๐ซ", "๐จ๐ผโ๐ญ", "๐ฉ๐ผโโ๏ธ", "๐จ๐ปโ๐", "๐๐ปโโ๏ธ", "๐จ๐ปโ๐ป"],
    dayoffArr: ["๐ฉ๐ปโ๐พ", "๐ฉ๐ปโ๐ณ", "๐ฉโโค๏ธโ๐โ๐จ", "๐ด", "๐ฅณ", "๐ง๐ผโโ๏ธ", "๐"],

    getRandomEmoji: function(arr) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        let randomEmoji = arr[randomIndex];
        allEmojiArr.push(randomEmoji);
        renderEmj();
    }
};

