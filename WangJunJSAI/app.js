var b = require("brain");
var net = new b.NeuralNetwork();

//net.train([{ input: [0, 0], output: [0] },
//{ input: [0, 1], output: [1] },
//{ input: [1, 0], output: [1] },
//{ input: [1, 1], output: [0] }]);

//net.train([{ input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 } },
//{ input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } },
//{ input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 } }]);

//var output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }

console.log("打球训练");
 
net.train([
    { input: { wangjun:5,liulei:3 }, output: { "wangjun": 1, "liulei": 0 } },
    { input: { wangjun: 2, liulei: 6 }, output: { "wangjun": 0, "liulei": 1  } },
    { input: { wangjun: 0, liulei: 3 }, output: { "wangjun": 0, "liulei": 1 } }
]);

var output = net.run({ wangjun: 7, liulei: 3 });  // { white: 0.99, black: 0.002 }

console.log('Hello world '+ JSON.stringify(output));
