'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: このコメント行より下の項目に注目してください。
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "今日の晩御飯";
var HELP_MESSAGE = "今日のおすすめ料理を聞きたい時は「今日の晩御飯」と、終わりたい時は「おしまい」と言ってください。どうしますか？";
var HELP_REPROMPT = "どうしますか？";
var STOP_MESSAGE = "さようなら";

//=========================================================================================================================================
//「TODO: ここから下のデータを自分用にカスタマイズしてください。」
//=========================================================================================================================================
var data = [
    "冷し中華はいかがでしょうか。冷し中華とは、茹でた中華麺を冷水でシメるのが特徴で、深めの皿全体に麺をなだらかに盛り、具として細切りにした、肉類、錦糸卵、夏野菜を放射状に彩り良く配し、かけ汁をかけた料理です。北海道では冷やしラーメンと呼ばれています。",
    "石狩鍋はいかがでしょうか。石狩鍋とは、土鍋に昆布のダシを取り、サケをぶつ切りにして野菜と共に煮込んだ北海道の郷土料理です。",
    "せんべい汁はいかがでしょうか。せんべい汁とは、汁物用に作られた南部せんべいを、鶏肉やネギ、キノコといった具と共にだし汁で煮た青森県の郷土料理です。",
    "盛岡冷麺はいかがでしょうか。盛岡冷麺とは、かたくり粉と小麦粉を使った冷麺岩手県の郷土料理です。元々は朝鮮半島北部の料理で、朝鮮料理店を通じて広まり盛岡の味として定着しました。",
    "仙台牛タンはいかがでしょうか。仙台牛タンとは、米軍が消費した牛肉の余剰部位である舌肉を用いた焼き肉料理が評判になり、仙台の味として広まった郷土料理です。",
    "納豆汁はいかがでしょうか。納豆汁とは、粒納豆をすり鉢でつぶしてお汁に溶かした秋田県の郷土料理です。地域により豚汁のようだったり、山菜をたくさん入れたりします。",
    "芋煮はいかがでしょうか。芋煮とは、牛肉、サトイモなどを醤油仕立ての鍋で煮込んだ山形県の郷土料理です。",
    "あんこう鍋はいかがでしょうか。あんこう鍋とは、キアンコウを主な具材とする福島の郷土料理です。",
];

//=========================================================================================================================================
//この行から下のコードに変更を加えると、スキルが動作しなくなるかもしれません。わかる人のみ変更を加えてください。  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewRecipeIntent');
    },
    'GetNewRecipeIntent': function () {
        var recipeArr = data;
        var recipeIndex = Math.floor(Math.random() * recipeArr.length);
        var randomRecipe = recipeArr[recipeIndex];
        var speechOutput = randomRecipe;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomRecipe)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
